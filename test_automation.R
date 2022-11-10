library(Hmisc)
library(RSQLite)
library(jsonlite)
library(tidyverse)
library(janitor)
library(pacman)
library(knitr)
library(kableExtra)
library(lubridate) 
library(RCurl)
library(threadr)
library(emayili)


# Settings: 

## Change these:
### make sure you leave the "data.sqlite" and "data.csv" bits
download_location <- "/Users/jamiecummins/git/subjective-cognitive-complaints/data/raw/data.sqlite"
save_location <- "/Users/jamiecummins/git/subjective-cognitive-complaints/data/processed/data.csv"


## Do not change these:
url <- "ftp://ftp.drjamiecumminscom.webhosting.be/www/md/vragenlijst/data/data.sqlite"
credentials <- "mariedelabie@drjamiecumminscom:MarieDelabie1"



# download questionnaire data and save it to location
download_ftp_file(file_remote = url,
                  file_local = download_location,
                  credentials = credentials)

## extract and process sqlite file

# Establish SQL connection
con <-
  dbConnect(drv = RSQLite::SQLite(),
            # GUYS: CHANGE THE BELOW DIRECTORY TO THE LOCATION AND NAME OF THE FILE
            dbname = download_location)


# Extract main table
d <-
  dbGetQuery(conn = con,
             statement = 'SELECT * FROM labjs')

# Close and discard connection
dbDisconnect(conn = con)
rm(con)


d.meta <-
  map_dfr(d$metadata, fromJSON) %>% # apply JSON function to the metadata
  dplyr::rename(unique_id = id) # rename to avoid confusion

d <- d %>%
  bind_cols(d.meta) %>%
  select(-metadata)



count_unique <- function(x) {
  return(length(unique(x)))
}
# returns how many unique observations there are in a given vector

information_preserved <- function(x, length) {
  return(count_unique(str_sub(x, end = i)) == count_unique(x))
}
# put in a vector and a string length
# for that string length, the vector checks how many unique observations there are when the strings are truncated using that length
# the function then compares this number to the number of unique observations when at full string length
# if this number is the same (i.e., truncating the string doesn't change the number of unique observations) it returns TRUE

for (i in 5:36) {
  if (
    information_preserved(d$session, i) &&
    information_preserved(d$observation, i)
  ) {
    break()
  }
}
# check if more than five characters are needed to preserve the identifying information
# for-loop breaks as soon as both expressions are evaluated as TRUE


# Truncate IDs
d <- d %>%
  dplyr::mutate(session = str_sub(session, end = i),
                unique_id = str_sub(unique_id, end = i))


# Create function that does this
parseJSON <- function(input) {
  return(input %>%
           fromJSON(flatten = TRUE) %>% {
             if (class(.) == 'list') {discard(., is.null) %>% as_tibble()}
             else {.}
           } %>%
           janitor::clean_names() %>%
           mutate_all(as.character))
}



d.incremental <-
  d %>%
  dplyr::filter(payload %in% c('incremental', 'latest')) %>%
  group_by(unique_id, id) %>%
  do(
    {map_dfr(.$data, parseJSON)} %>%
      bind_rows()
  ) %>%
  ungroup()



# process the data 
old_questionnaire_df <- d.incremental %>%
  filter(!is.na(wat_is_uw_e_mailadres)) %>%
  select(email = wat_is_uw_e_mailadres,
         age = wat_is_uw_leeftijd,
         complaints = welke_cognitieve_klachten_heeft_u,
         preexisting_condition = hebt_u_een_bepaalde_neurologische_of_psychiatrische_diagnose,
         brain_injury = hebt_u_ooit_een_hersenletsel_gehad)

# process the data 
new_questionnaire_df <- d.incremental %>%
  filter(!is.na(email)) %>%
  select(email, age, complaints, complaints_duration,
         preexisting_condition, brain_injury)

questionnaire_df <- old_questionnaire_df |>
  bind_rows(new_questionnaire_df)

previous_download <- read_csv(save_location)

same_as_before <- identical(questionnaire_df$email, previous_download$email)

write_csv(questionnaire_df, save_location)


# email for 
# smtp <- server(host = "smtp.gmail.com",
#                port = 465,
#                username = "jamiec173@gmail.com",
#                password = "1Vji4006")
# 
# 
# if (same_as_before == TRUE) {
#   email <- envelope() %>%
#     from("jamiec173@gmail.com") %>%
#     to(c("inne.debacker@ugent.be", "Selma.AbdElMotlebOmar@UGent.be")) %>%
#     subject("**Automatic Message** Update SCC Study") %>%
#     text("Dear Selma and Inne, 
#          
#          
#          There has been no new data uploaded.
#          
#          All the best
#          Jamie") 
#   smtp(email, verbose = TRUE)
#   
# } else {
#   email <- envelope() %>%
#     from("jamiec173@gmail.com") %>%
#     to(c("inne.debacker@ugent.be", "Selma.AbdElMotlebOmar@UGent.be")) %>%
#     subject("**Automatic Message** Update SCC Study") %>%
#     text("Dear Selma and Inne, 
#          
#          
#          There has been some new data uploaded. See attachment.
#          
#          All the best
#          Jamie") %>%
#     attachment(save_location)
#   smtp(email, verbose = TRUE)
# 
# }


