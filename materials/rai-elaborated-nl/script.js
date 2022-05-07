// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Transmit",
      "url": "backend.php",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "input",
          "attributes": {
            "type": "number",
            "min": "18",
            "max": "100"
          },
          "label": "Wat is uw leeftijd?",
          "name": "age"
        },
        {
          "required": true,
          "type": "input",
          "label": "Wat is uw geslacht?",
          "name": "wat-is-uw-geslacht"
        },
        {
          "required": true,
          "type": "input",
          "label": "Wat is uw email?",
          "attributes": {
            "type": "email"
          },
          "name": "prolificid"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "demographics"
    },
    {
      "title": "Expanded Relational Abilities Index",
      "type": "lab.flow.Sequence",
      "parameters": {},
      "plugins": [],
      "metadata": {
        "title": "Expanded Relational Abilities Index",
        "description": "",
        "repository": "",
        "contributors": "Jamie Cummins (jamie.cummins@ugent.be)\nDylan Colbert (dylan.colbert.2011@mumail.ie)"
      },
      "files": {},
      "responses": {},
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "",
              "content": "U zult nu een test maken die wordt gebruikt om te meten hoe goed mensen concepten met elkaar in verband kunnen brengen op verschillende manieren.\u003Cbr\u003EU krijgt in totaal 128 oefeningen in deze test. Bij elke oefening krijgt u minstens 1 en maximum 4 uitspraken te zien over de relatie tussen denkbeeldige woorden (bijvoorbeeld: CUG is hetzelfde als JOM, JOM is hetzelfde als VEK). Onderaan het scherm krijgt u een vraag over de relatie tussen deze woorden (bijvoorbeeld: is CUG anders dan VEK?).\u003Cbr\u003E\u003Cbr\u003EU moet deze vraag nauwkeurig beantwoorden door \"JA\" of \"NEE\" te kiezen onderaan op uw scherm op basis van de informatie die u krijgt. "
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "introduction_1"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "Belangrijk!",
              "content": "Bij elke oefening heeft u 30 seconden om te reageren. Na deze 30 seconden wordt de oefening beëindigd, ook als u nog niet heeft geantwoord, en gaat u onmiddellijk door naar de volgende oefening. "
            },
            {
              "required": true,
              "type": "text",
              "content": "Als u klaar bent, klikt u op \"doorgaan\" om te beginnen. "
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Doorgaan →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "introduction_2"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "block": "1",
              "relation_1": "is hetzelfde als",
              "stim_3_id": "2",
              "relation_2": "is hetzelfde als",
              "stim_4_id": "3",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "1",
              "q_rel": "hetzelfde als",
              "q_stim_2_id": "3",
              "correct_response": "yes",
              "trial_num": "1",
              "q_word": "Is"
            },
            {
              "block": "1",
              "relation_1": "is hetzelfde als",
              "stim_3_id": "2",
              "relation_2": "is hetzelfde als",
              "stim_4_id": "3",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "3",
              "q_rel": "het tegenovergestelde van",
              "q_stim_2_id": "1",
              "correct_response": "no",
              "trial_num": "2",
              "q_word": "Is"
            },
            {
              "block": "1",
              "relation_1": "is hetzelfde als",
              "stim_3_id": "2",
              "relation_2": "is het tegenovergestelde van",
              "stim_4_id": "3",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "1",
              "q_rel": "hetzelfde als",
              "q_stim_2_id": "3",
              "correct_response": "no",
              "trial_num": "3",
              "q_word": "Is"
            },
            {
              "block": "1",
              "relation_1": "is hetzelfde als",
              "stim_3_id": "2",
              "relation_2": "is het tegenovergestelde van",
              "stim_4_id": "3",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "3",
              "q_rel": "het tegenovergestelde van",
              "q_stim_2_id": "1",
              "correct_response": "yes",
              "trial_num": "4",
              "q_word": "Is"
            },
            {
              "block": "1",
              "relation_1": "is het tegenovergestelde van",
              "stim_3_id": "2",
              "relation_2": "is het tegenovergestelde van",
              "stim_4_id": "3",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "1",
              "q_rel": "hetzelfde als",
              "q_stim_2_id": "3",
              "correct_response": "yes",
              "trial_num": "5",
              "q_word": "Is"
            },
            {
              "block": "1",
              "relation_1": "is het tegenovergestelde van",
              "stim_3_id": "2",
              "relation_2": "is het tegenovergestelde van",
              "stim_4_id": "3",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "3",
              "q_rel": "het tegenovergestelde van",
              "q_stim_2_id": "1",
              "correct_response": "no",
              "trial_num": "6",
              "q_word": "Is"
            },
            {
              "block": "1",
              "relation_1": "is hetzelfde als",
              "stim_3_id": "2",
              "relation_2": "is het tegenovergestelde van",
              "stim_4_id": "3",
              "stim_5_id": "3",
              "relation_3": "is hetzelfde als",
              "stim_6_id": "4",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "1",
              "q_rel": "hetzelfde als",
              "q_stim_2_id": "4",
              "correct_response": "no",
              "trial_num": "7",
              "q_word": "Is"
            },
            {
              "block": "1",
              "relation_1": "is hetzelfde als",
              "stim_3_id": "2",
              "relation_2": "is het tegenovergestelde van",
              "stim_4_id": "3",
              "stim_5_id": "3",
              "relation_3": "is hetzelfde als",
              "stim_6_id": "4",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "4",
              "q_rel": "het tegenovergestelde van",
              "q_stim_2_id": "1",
              "correct_response": "yes",
              "trial_num": "8",
              "q_word": "Is"
            },
            {
              "block": "1",
              "relation_1": "is het tegenovergestelde van",
              "stim_3_id": "2",
              "relation_2": "is hetzelfde als",
              "stim_4_id": "3",
              "stim_5_id": "3",
              "relation_3": "is het tegenovergestelde van",
              "stim_6_id": "4",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "1",
              "q_rel": "hetzelfde als",
              "q_stim_2_id": "4",
              "correct_response": "yes",
              "trial_num": "9",
              "q_word": "Is"
            },
            {
              "block": "1",
              "relation_1": "is het tegenovergestelde van",
              "stim_3_id": "2",
              "relation_2": "is hetzelfde als",
              "stim_4_id": "3",
              "stim_5_id": "3",
              "relation_3": "is het tegenovergestelde van",
              "stim_6_id": "4",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "4",
              "q_rel": "het tegenovergestelde van",
              "q_stim_2_id": "1",
              "correct_response": "no",
              "trial_num": "10",
              "q_word": "Is"
            },
            {
              "block": "1",
              "relation_1": "is het tegenovergestelde van",
              "stim_3_id": "2",
              "relation_2": "is het tegenovergestelde van",
              "stim_4_id": "3",
              "stim_5_id": "3",
              "relation_3": "is het tegenovergestelde van",
              "stim_6_id": "4",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "1",
              "q_rel": "hetzelfde als",
              "q_stim_2_id": "4",
              "correct_response": "yes",
              "trial_num": "11",
              "q_word": "Is"
            },
            {
              "block": "1",
              "relation_1": "is het tegenovergestelde van",
              "stim_3_id": "2",
              "relation_2": "is het tegenovergestelde van",
              "stim_4_id": "3",
              "stim_5_id": "3",
              "relation_3": "is het tegenovergestelde van",
              "stim_6_id": "4",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "4",
              "q_rel": "het tegenovergestelde van",
              "q_stim_2_id": "1",
              "correct_response": "no",
              "trial_num": "12",
              "q_word": "Is"
            },
            {
              "block": "1",
              "relation_1": "is het tegenovergestelde van",
              "stim_3_id": "2",
              "relation_2": "is hetzelfde als",
              "stim_4_id": "3",
              "stim_5_id": "3",
              "relation_3": "is het tegenovergestelde van",
              "stim_6_id": "4",
              "stim_7_id": "4",
              "relation_4": "is hetzelfde als",
              "stim_8_id": "5",
              "q_stim_1_id": "1",
              "q_rel": "hetzelfde als",
              "q_stim_2_id": "5",
              "correct_response": "yes",
              "trial_num": "13",
              "q_word": "Is"
            },
            {
              "block": "1",
              "relation_1": "is het tegenovergestelde van",
              "stim_3_id": "2",
              "relation_2": "is hetzelfde als",
              "stim_4_id": "3",
              "stim_5_id": "3",
              "relation_3": "is het tegenovergestelde van",
              "stim_6_id": "4",
              "stim_7_id": "4",
              "relation_4": "is hetzelfde als",
              "stim_8_id": "5",
              "q_stim_1_id": "5",
              "q_rel": "het tegenovergestelde van",
              "q_stim_2_id": "1",
              "correct_response": "no",
              "trial_num": "14",
              "q_word": "Is"
            },
            {
              "block": "1",
              "relation_1": "is hetzelfde als",
              "stim_3_id": "2",
              "relation_2": "is het tegenovergestelde van",
              "stim_4_id": "3",
              "stim_5_id": "3",
              "relation_3": "is hetzelfde als",
              "stim_6_id": "4",
              "stim_7_id": "4",
              "relation_4": "is het tegenovergestelde van",
              "stim_8_id": "5",
              "q_stim_1_id": "1",
              "q_rel": "hetzelfde als",
              "q_stim_2_id": "5",
              "correct_response": "no",
              "trial_num": "15",
              "q_word": "Is"
            },
            {
              "block": "1",
              "relation_1": "is hetzelfde als",
              "stim_3_id": "2",
              "relation_2": "is het tegenovergestelde van",
              "stim_4_id": "3",
              "stim_5_id": "3",
              "relation_3": "is hetzelfde als",
              "stim_6_id": "4",
              "stim_7_id": "4",
              "relation_4": "is het tegenovergestelde van",
              "stim_8_id": "5",
              "q_stim_1_id": "5",
              "q_rel": "het tegenovergestelde van",
              "q_stim_2_id": "1",
              "correct_response": "yes",
              "trial_num": "16",
              "q_word": "Is"
            },
            {
              "block": "2",
              "relation_1": "is hetzelfde als",
              "stim_3_id": "2",
              "relation_2": "is hetzelfde als",
              "stim_4_id": "3",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "3",
              "q_rel": "hetzelfde als",
              "q_stim_2_id": "1",
              "correct_response": "yes",
              "trial_num": "17",
              "q_word": "Is"
            },
            {
              "block": "2",
              "relation_1": "is hetzelfde als",
              "stim_3_id": "2",
              "relation_2": "is hetzelfde als",
              "stim_4_id": "3",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "1",
              "q_rel": "anders dan",
              "q_stim_2_id": "3",
              "correct_response": "no",
              "trial_num": "18",
              "q_word": "Is"
            },
            {
              "block": "2",
              "relation_1": "is hetzelfde als",
              "stim_3_id": "2",
              "relation_2": "is anders dan",
              "stim_4_id": "3",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "3",
              "q_rel": "hetzelfde als",
              "q_stim_2_id": "1",
              "correct_response": "yes",
              "trial_num": "19",
              "q_word": "Is"
            },
            {
              "block": "2",
              "relation_1": "is hetzelfde als",
              "stim_3_id": "2",
              "relation_2": "is anders dan",
              "stim_4_id": "3",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "1",
              "q_rel": "anders dan",
              "q_stim_2_id": "3",
              "correct_response": "yes",
              "trial_num": "20",
              "q_word": "Is"
            },
            {
              "block": "2",
              "relation_1": "is anders dan",
              "stim_3_id": "2",
              "relation_2": "is hetzelfde als",
              "stim_4_id": "3",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "3",
              "q_rel": "hetzelfde als",
              "q_stim_2_id": "1",
              "correct_response": "no",
              "trial_num": "21",
              "q_word": "Is"
            },
            {
              "block": "2",
              "relation_1": "is anders dan",
              "stim_3_id": "2",
              "relation_2": "is hetzelfde als",
              "stim_4_id": "3",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "1",
              "q_rel": "anders dan",
              "q_stim_2_id": "3",
              "correct_response": "yes",
              "trial_num": "22",
              "q_word": "Is"
            },
            {
              "block": "2",
              "relation_1": "is hetzelfde als",
              "stim_3_id": "2",
              "relation_2": "is anders dan",
              "stim_4_id": "3",
              "stim_5_id": "3",
              "relation_3": "is hetzelfde als",
              "stim_6_id": "4",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "4",
              "q_rel": "hetzelfde als",
              "q_stim_2_id": "1",
              "correct_response": "no",
              "trial_num": "23",
              "q_word": "Is"
            },
            {
              "block": "2",
              "relation_1": "is hetzelfde als",
              "stim_3_id": "2",
              "relation_2": "is anders dan",
              "stim_4_id": "3",
              "stim_5_id": "3",
              "relation_3": "is hetzelfde als",
              "stim_6_id": "4",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "1",
              "q_rel": "anders dan",
              "q_stim_2_id": "4",
              "correct_response": "yes",
              "trial_num": "24",
              "q_word": "Is"
            },
            {
              "block": "2",
              "relation_1": "is hetzelfde als",
              "stim_3_id": "2",
              "relation_2": "is hetzelfde als",
              "stim_4_id": "3",
              "stim_5_id": "3",
              "relation_3": "is anders dan",
              "stim_6_id": "4",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "1",
              "q_rel": "hetzelfde als",
              "q_stim_2_id": "4",
              "correct_response": "no",
              "trial_num": "25",
              "q_word": "Is"
            },
            {
              "block": "2",
              "relation_1": "is hetzelfde als",
              "stim_3_id": "2",
              "relation_2": "is hetzelfde als",
              "stim_4_id": "3",
              "stim_5_id": "3",
              "relation_3": "is anders dan",
              "stim_6_id": "4",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "4",
              "q_rel": "anders dan",
              "q_stim_2_id": "1",
              "correct_response": "yes",
              "trial_num": "26",
              "q_word": "Is"
            },
            {
              "block": "2",
              "relation_1": "is hetzelfde als",
              "stim_3_id": "2",
              "relation_2": "is hetzelfde als",
              "stim_4_id": "3",
              "stim_5_id": "3",
              "relation_3": "is anders dan",
              "stim_6_id": "4",
              "stim_7_id": "4",
              "relation_4": "is hetzelfde als",
              "stim_8_id": "5",
              "q_stim_1_id": "5",
              "q_rel": "hetzelfde als",
              "q_stim_2_id": "1",
              "correct_response": "yes",
              "trial_num": "27",
              "q_word": "Is"
            },
            {
              "block": "2",
              "relation_1": "is hetzelfde als",
              "stim_3_id": "2",
              "relation_2": "is hetzelfde als",
              "stim_4_id": "3",
              "stim_5_id": "3",
              "relation_3": "is anders dan",
              "stim_6_id": "4",
              "stim_7_id": "4",
              "relation_4": "is hetzelfde als",
              "stim_8_id": "5",
              "q_stim_1_id": "1",
              "q_rel": "anders dan",
              "q_stim_2_id": "5",
              "correct_response": "yes",
              "trial_num": "28",
              "q_word": "Is"
            },
            {
              "block": "2",
              "relation_1": "is hetzelfde als",
              "stim_3_id": "2",
              "relation_2": "is anders dan",
              "stim_4_id": "3",
              "stim_5_id": "3",
              "relation_3": "is hetzelfde als",
              "stim_6_id": "4",
              "stim_7_id": "4",
              "relation_4": "is hetzelfde als",
              "stim_8_id": "5",
              "q_stim_1_id": "5",
              "q_rel": "hetzelfde als",
              "q_stim_2_id": "1",
              "correct_response": "no",
              "trial_num": "29",
              "q_word": "Is"
            },
            {
              "block": "2",
              "relation_1": "is hetzelfde als",
              "stim_3_id": "2",
              "relation_2": "is anders dan",
              "stim_4_id": "3",
              "stim_5_id": "3",
              "relation_3": "is hetzelfde als",
              "stim_6_id": "4",
              "stim_7_id": "4",
              "relation_4": "is hetzelfde als",
              "stim_8_id": "5",
              "q_stim_1_id": "1",
              "q_rel": "hetzelfde als",
              "q_stim_2_id": "5",
              "correct_response": "no",
              "trial_num": "30",
              "q_word": "Is"
            },
            {
              "block": "2",
              "relation_1": "is hetzelfde als",
              "stim_3_id": "2",
              "relation_2": "is anders dan",
              "stim_4_id": "3",
              "stim_5_id": "3",
              "relation_3": "is hetzelfde als",
              "stim_6_id": "4",
              "stim_7_id": "4",
              "relation_4": "is hetzelfde als",
              "stim_8_id": "5",
              "q_stim_1_id": "5",
              "q_rel": "anders dan",
              "q_stim_2_id": "1",
              "correct_response": "yes",
              "trial_num": "31",
              "q_word": "Is"
            },
            {
              "block": "2",
              "relation_1": "is hetzelfde als",
              "stim_3_id": "2",
              "relation_2": "is anders dan",
              "stim_4_id": "3",
              "stim_5_id": "3",
              "relation_3": "is hetzelfde als",
              "stim_6_id": "4",
              "stim_7_id": "4",
              "relation_4": "is hetzelfde als",
              "stim_8_id": "5",
              "q_stim_1_id": "1",
              "q_rel": "anders dan",
              "q_stim_2_id": "5",
              "correct_response": "yes",
              "trial_num": "32",
              "q_word": "Is"
            },
            {
              "block": "3",
              "relation_1": "is meer dan",
              "stim_3_id": "2",
              "relation_2": "is meer dan",
              "stim_4_id": "3",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "1",
              "q_rel": "meer dan",
              "q_stim_2_id": "3",
              "correct_response": "yes",
              "trial_num": "33",
              "q_word": "Is"
            },
            {
              "block": "3",
              "relation_1": "is meer dan",
              "stim_3_id": "2",
              "relation_2": "is meer dan",
              "stim_4_id": "3",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "3",
              "q_rel": "minder dan",
              "q_stim_2_id": "1",
              "correct_response": "yes",
              "trial_num": "34",
              "q_word": "Is"
            },
            {
              "block": "3",
              "relation_1": "is meer dan",
              "stim_3_id": "3",
              "relation_2": "is minder dan",
              "stim_4_id": "2",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "1",
              "q_rel": "meer dan",
              "q_stim_2_id": "3",
              "correct_response": "yes",
              "trial_num": "35",
              "q_word": "Is"
            },
            {
              "block": "3",
              "relation_1": "is meer dan",
              "stim_3_id": "3",
              "relation_2": "is minder dan",
              "stim_4_id": "2",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "3",
              "q_rel": "minder dan",
              "q_stim_2_id": "1",
              "correct_response": "yes",
              "trial_num": "36",
              "q_word": "Is"
            },
            {
              "block": "3",
              "relation_1": "is minder dan",
              "stim_3_id": "2",
              "relation_2": "is minder dan",
              "stim_4_id": "3",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "1",
              "q_rel": "meer dan",
              "q_stim_2_id": "3",
              "correct_response": "no",
              "trial_num": "37",
              "q_word": "Is"
            },
            {
              "block": "3",
              "relation_1": "is minder dan",
              "stim_3_id": "2",
              "relation_2": "is minder dan",
              "stim_4_id": "3",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "3",
              "q_rel": "minder dan",
              "q_stim_2_id": "1",
              "correct_response": "no",
              "trial_num": "38",
              "q_word": "Is"
            },
            {
              "block": "3",
              "relation_1": "is meer dan",
              "stim_3_id": "3",
              "relation_2": "is minder dan",
              "stim_4_id": "2",
              "stim_5_id": "3",
              "relation_3": "is meer dan",
              "stim_6_id": "4",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "1",
              "q_rel": "meer dan",
              "q_stim_2_id": "4",
              "correct_response": "yes",
              "trial_num": "39",
              "q_word": "Is"
            },
            {
              "block": "3",
              "relation_1": "is meer dan",
              "stim_3_id": "3",
              "relation_2": "is minder dan",
              "stim_4_id": "2",
              "stim_5_id": "3",
              "relation_3": "is meer dan",
              "stim_6_id": "4",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "4",
              "q_rel": "minder dan",
              "q_stim_2_id": "1",
              "correct_response": "yes",
              "trial_num": "40",
              "q_word": "Is"
            },
            {
              "block": "3",
              "relation_1": "is minder dan",
              "stim_3_id": "3",
              "relation_2": "is meer dan",
              "stim_4_id": "2",
              "stim_5_id": "4",
              "relation_3": "is meer dan",
              "stim_6_id": "3",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "1",
              "q_rel": "meer dan",
              "q_stim_2_id": "4",
              "correct_response": "no",
              "trial_num": "41",
              "q_word": "Is"
            },
            {
              "block": "3",
              "relation_1": "is minder dan",
              "stim_3_id": "3",
              "relation_2": "is meer dan",
              "stim_4_id": "2",
              "stim_5_id": "4",
              "relation_3": "is meer dan",
              "stim_6_id": "3",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "4",
              "q_rel": "minder dan",
              "q_stim_2_id": "1",
              "correct_response": "no",
              "trial_num": "42",
              "q_word": "Is"
            },
            {
              "block": "3",
              "relation_1": "is minder dan",
              "stim_3_id": "2",
              "relation_2": "is minder dan",
              "stim_4_id": "3",
              "stim_5_id": "3",
              "relation_3": "is minder dan",
              "stim_6_id": "4",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "1",
              "q_rel": "meer dan",
              "q_stim_2_id": "4",
              "correct_response": "no",
              "trial_num": "43",
              "q_word": "Is"
            },
            {
              "block": "3",
              "relation_1": "is minder dan",
              "stim_3_id": "2",
              "relation_2": "is minder dan",
              "stim_4_id": "3",
              "stim_5_id": "3",
              "relation_3": "is minder dan",
              "stim_6_id": "4",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "4",
              "q_rel": "minder dan",
              "q_stim_2_id": "1",
              "correct_response": "no",
              "trial_num": "44",
              "q_word": "Is"
            },
            {
              "block": "3",
              "relation_1": "is minder dan",
              "stim_3_id": "3",
              "relation_2": "is meer dan",
              "stim_4_id": "2",
              "stim_5_id": "3",
              "relation_3": "is minder dan",
              "stim_6_id": "4",
              "stim_7_id": "5",
              "relation_4": "is meer dan",
              "stim_8_id": "4",
              "q_stim_1_id": "1",
              "q_rel": "meer dan",
              "q_stim_2_id": "5",
              "correct_response": "no",
              "trial_num": "45",
              "q_word": "Is"
            },
            {
              "block": "3",
              "relation_1": "is minder dan",
              "stim_3_id": "3",
              "relation_2": "is meer dan",
              "stim_4_id": "2",
              "stim_5_id": "3",
              "relation_3": "is minder dan",
              "stim_6_id": "4",
              "stim_7_id": "5",
              "relation_4": "is meer dan",
              "stim_8_id": "4",
              "q_stim_1_id": "5",
              "q_rel": "minder dan",
              "q_stim_2_id": "1",
              "correct_response": "no",
              "trial_num": "46",
              "q_word": "Is"
            },
            {
              "block": "3",
              "relation_1": "is meer dan",
              "stim_3_id": "3",
              "relation_2": "is minder dan",
              "stim_4_id": "2",
              "stim_5_id": "3",
              "relation_3": "is meer dan",
              "stim_6_id": "4",
              "stim_7_id": "5",
              "relation_4": "is minder dan",
              "stim_8_id": "4",
              "q_stim_1_id": "1",
              "q_rel": "meer dan",
              "q_stim_2_id": "5",
              "correct_response": "yes",
              "trial_num": "47",
              "q_word": "Is"
            },
            {
              "block": "3",
              "relation_1": "is meer dan",
              "stim_3_id": "3",
              "relation_2": "is minder dan",
              "stim_4_id": "2",
              "stim_5_id": "3",
              "relation_3": "is meer dan",
              "stim_6_id": "4",
              "stim_7_id": "5",
              "relation_4": "is minder dan",
              "stim_8_id": "4",
              "q_stim_1_id": "5",
              "q_rel": "minder dan",
              "q_stim_2_id": "1",
              "correct_response": "yes",
              "trial_num": "48",
              "q_word": "Is"
            },
            {
              "block": "4",
              "relation_1": "komt voor",
              "stim_3_id": "2",
              "relation_2": "komt voor",
              "stim_4_id": "3",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "3",
              "q_rel": "voor",
              "q_stim_2_id": "1",
              "correct_response": "no",
              "trial_num": "49",
              "q_word": "Komt"
            },
            {
              "block": "4",
              "relation_1": "komt voor",
              "stim_3_id": "2",
              "relation_2": "komt voor",
              "stim_4_id": "3",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "1",
              "q_rel": "na",
              "q_stim_2_id": "3",
              "correct_response": "no",
              "trial_num": "50",
              "q_word": "Komt"
            },
            {
              "block": "4",
              "relation_1": "komt na",
              "stim_3_id": "2",
              "relation_2": "komt na",
              "stim_4_id": "3",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "3",
              "q_rel": "voor",
              "q_stim_2_id": "1",
              "correct_response": "yes",
              "trial_num": "51",
              "q_word": "Komt"
            },
            {
              "block": "4",
              "relation_1": "komt na",
              "stim_3_id": "2",
              "relation_2": "komt na",
              "stim_4_id": "3",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "1",
              "q_rel": "na",
              "q_stim_2_id": "3",
              "correct_response": "yes",
              "trial_num": "52",
              "q_word": "Komt"
            },
            {
              "block": "4",
              "relation_1": "komt na",
              "stim_3_id": "3",
              "relation_2": "komt voor",
              "stim_4_id": "2",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "3",
              "q_rel": "voor",
              "q_stim_2_id": "1",
              "correct_response": "yes",
              "trial_num": "53",
              "q_word": "Komt"
            },
            {
              "block": "4",
              "relation_1": "komt na",
              "stim_3_id": "3",
              "relation_2": "komt voor",
              "stim_4_id": "2",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "1",
              "q_rel": "na",
              "q_stim_2_id": "3",
              "correct_response": "yes",
              "trial_num": "54",
              "q_word": "Komt"
            },
            {
              "block": "4",
              "relation_1": "komt voor",
              "stim_3_id": "3",
              "relation_2": "komt na",
              "stim_4_id": "2",
              "stim_5_id": "3",
              "relation_3": "komt voor",
              "stim_6_id": "4",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "4",
              "q_rel": "voor",
              "q_stim_2_id": "1",
              "correct_response": "no",
              "trial_num": "55",
              "q_word": "Komt"
            },
            {
              "block": "4",
              "relation_1": "komt voor",
              "stim_3_id": "3",
              "relation_2": "komt na",
              "stim_4_id": "2",
              "stim_5_id": "3",
              "relation_3": "komt voor",
              "stim_6_id": "4",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "1",
              "q_rel": "na",
              "q_stim_2_id": "4",
              "correct_response": "no",
              "trial_num": "56",
              "q_word": "Komt"
            },
            {
              "block": "4",
              "relation_1": "komt na",
              "stim_3_id": "2",
              "relation_2": "komt na",
              "stim_4_id": "3",
              "stim_5_id": "4",
              "relation_3": "komt voor",
              "stim_6_id": "3",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "4",
              "q_rel": "voor",
              "q_stim_2_id": "1",
              "correct_response": "yes",
              "trial_num": "57",
              "q_word": "Komt"
            },
            {
              "block": "4",
              "relation_1": "komt na",
              "stim_3_id": "2",
              "relation_2": "komt na",
              "stim_4_id": "3",
              "stim_5_id": "4",
              "relation_3": "komt voor",
              "stim_6_id": "3",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "1",
              "q_rel": "na",
              "q_stim_2_id": "4",
              "correct_response": "yes",
              "trial_num": "58",
              "q_word": "Komt"
            },
            {
              "block": "4",
              "relation_1": "komt na",
              "stim_3_id": "3",
              "relation_2": "komt voor",
              "stim_4_id": "2",
              "stim_5_id": "3",
              "relation_3": "komt na",
              "stim_6_id": "4",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "4",
              "q_rel": "voor",
              "q_stim_2_id": "1",
              "correct_response": "yes",
              "trial_num": "59",
              "q_word": "Komt"
            },
            {
              "block": "4",
              "relation_1": "komt na",
              "stim_3_id": "3",
              "relation_2": "komt voor",
              "stim_4_id": "2",
              "stim_5_id": "3",
              "relation_3": "komt na",
              "stim_6_id": "4",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "1",
              "q_rel": "na",
              "q_stim_2_id": "4",
              "correct_response": "yes",
              "trial_num": "60",
              "q_word": "Komt"
            },
            {
              "block": "4",
              "relation_1": "komt na",
              "stim_3_id": "3",
              "relation_2": "komt voor",
              "stim_4_id": "2",
              "stim_5_id": "3",
              "relation_3": "komt na",
              "stim_6_id": "4",
              "stim_7_id": "5",
              "relation_4": "komt voor",
              "stim_8_id": "4",
              "q_stim_1_id": "5",
              "q_rel": "voor",
              "q_stim_2_id": "1",
              "correct_response": "yes",
              "trial_num": "61",
              "q_word": "Komt"
            },
            {
              "block": "4",
              "relation_1": "komt na",
              "stim_3_id": "3",
              "relation_2": "komt voor",
              "stim_4_id": "2",
              "stim_5_id": "3",
              "relation_3": "komt na",
              "stim_6_id": "4",
              "stim_7_id": "5",
              "relation_4": "komt voor",
              "stim_8_id": "4",
              "q_stim_1_id": "1",
              "q_rel": "na",
              "q_stim_2_id": "5",
              "correct_response": "yes",
              "trial_num": "62",
              "q_word": "Komt"
            },
            {
              "block": "4",
              "relation_1": "komt voor",
              "stim_3_id": "3",
              "relation_2": "komt na",
              "stim_4_id": "2",
              "stim_5_id": "3",
              "relation_3": "komt voor",
              "stim_6_id": "4",
              "stim_7_id": "5",
              "relation_4": "komt na",
              "stim_8_id": "4",
              "q_stim_1_id": "5",
              "q_rel": "voor",
              "q_stim_2_id": "1",
              "correct_response": "no",
              "trial_num": "63",
              "q_word": "Komt"
            },
            {
              "block": "4",
              "relation_1": "komt voor",
              "stim_3_id": "3",
              "relation_2": "komt na",
              "stim_4_id": "2",
              "stim_5_id": "3",
              "relation_3": "komt voor",
              "stim_6_id": "4",
              "stim_7_id": "5",
              "relation_4": "komt na",
              "stim_8_id": "4",
              "q_stim_1_id": "1",
              "q_rel": "na",
              "q_stim_2_id": "5",
              "correct_response": "no",
              "trial_num": "64",
              "q_word": "Komt"
            },
            {
              "block": "5",
              "relation_1": "bevat",
              "stim_3_id": "",
              "relation_2": "",
              "stim_4_id": "",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "2",
              "q_rel": "Bevat",
              "q_stim_2_id": "1",
              "correct_response": "no",
              "trial_num": "65",
              "q_word": ""
            },
            {
              "block": "5",
              "relation_1": "is binnen",
              "stim_3_id": "",
              "relation_2": "",
              "stim_4_id": "",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "2",
              "q_rel": "Bevat",
              "q_stim_2_id": "1",
              "correct_response": "yes",
              "trial_num": "66",
              "q_word": ""
            },
            {
              "block": "5",
              "relation_1": "bevat",
              "stim_3_id": "2",
              "relation_2": "bevat",
              "stim_4_id": "3",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "3",
              "q_rel": "binnen",
              "q_stim_2_id": "1",
              "correct_response": "yes",
              "trial_num": "67",
              "q_word": "Is"
            },
            {
              "block": "5",
              "relation_1": "bevat",
              "stim_3_id": "3",
              "relation_2": "is binnen",
              "stim_4_id": "2",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "3",
              "q_rel": "Bevat",
              "q_stim_2_id": "1",
              "correct_response": "no",
              "trial_num": "68",
              "q_word": ""
            },
            {
              "block": "5",
              "relation_1": "bevat",
              "stim_3_id": "3",
              "relation_2": "is binnen",
              "stim_4_id": "2",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "1",
              "q_rel": "binnen",
              "q_stim_2_id": "3",
              "correct_response": "no",
              "trial_num": "69",
              "q_word": "Is"
            },
            {
              "block": "5",
              "relation_1": "is binnen",
              "stim_3_id": "2",
              "relation_2": "is binnen",
              "stim_4_id": "3",
              "stim_5_id": "",
              "relation_3": "",
              "stim_6_id": "",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "3",
              "q_rel": "Bevat",
              "q_stim_2_id": "1",
              "correct_response": "yes",
              "trial_num": "70",
              "q_word": ""
            },
            {
              "block": "5",
              "relation_1": "bevat",
              "stim_3_id": "3",
              "relation_2": "is binnen",
              "stim_4_id": "2",
              "stim_5_id": "3",
              "relation_3": "bevat",
              "stim_6_id": "4",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "1",
              "q_rel": "Bevat",
              "q_stim_2_id": "4",
              "correct_response": "yes",
              "trial_num": "71",
              "q_word": ""
            },
            {
              "block": "5",
              "relation_1": "bevat",
              "stim_3_id": "3",
              "relation_2": "is binnen",
              "stim_4_id": "2",
              "stim_5_id": "3",
              "relation_3": "bevat",
              "stim_6_id": "4",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "4",
              "q_rel": "binnen",
              "q_stim_2_id": "1",
              "correct_response": "yes",
              "trial_num": "72",
              "q_word": "Is"
            },
            {
              "block": "5",
              "relation_1": "is binnen",
              "stim_3_id": "3",
              "relation_2": "bevat",
              "stim_4_id": "2",
              "stim_5_id": "4",
              "relation_3": "bevat",
              "stim_6_id": "3",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "4",
              "q_rel": "Bevat",
              "q_stim_2_id": "1",
              "correct_response": "yes",
              "trial_num": "73",
              "q_word": ""
            },
            {
              "block": "5",
              "relation_1": "is binnen",
              "stim_3_id": "3",
              "relation_2": "bevat",
              "stim_4_id": "2",
              "stim_5_id": "4",
              "relation_3": "bevat",
              "stim_6_id": "3",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "1",
              "q_rel": "binnen",
              "q_stim_2_id": "4",
              "correct_response": "yes",
              "trial_num": "74",
              "q_word": "Is"
            },
            {
              "block": "5",
              "relation_1": "is binnen",
              "stim_3_id": "2",
              "relation_2": "is binnen",
              "stim_4_id": "3",
              "stim_5_id": "4",
              "relation_3": "bevat",
              "stim_6_id": "3",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "1",
              "q_rel": "Bevat",
              "q_stim_2_id": "4",
              "correct_response": "no",
              "trial_num": "75",
              "q_word": ""
            },
            {
              "block": "5",
              "relation_1": "is binnen",
              "stim_3_id": "2",
              "relation_2": "is binnen",
              "stim_4_id": "3",
              "stim_5_id": "4",
              "relation_3": "bevat",
              "stim_6_id": "3",
              "stim_7_id": "",
              "relation_4": "",
              "stim_8_id": "",
              "q_stim_1_id": "4",
              "q_rel": "binnen",
              "q_stim_2_id": "1",
              "correct_response": "no",
              "trial_num": "76",
              "q_word": "Is"
            },
            {
              "block": "5",
              "relation_1": "bevat",
              "stim_3_id": "3",
              "relation_2": "is binnen",
              "stim_4_id": "2",
              "stim_5_id": "3",
              "relation_3": "bevat",
              "stim_6_id": "4",
              "stim_7_id": "5",
              "relation_4": "is binnen",
              "stim_8_id": "4",
              "q_stim_1_id": "1",
              "q_rel": "Bevat",
              "q_stim_2_id": "5",
              "correct_response": "yes",
              "trial_num": "77",
              "q_word": ""
            },
            {
              "block": "5",
              "relation_1": "bevat",
              "stim_3_id": "3",
              "relation_2": "is binnen",
              "stim_4_id": "2",
              "stim_5_id": "3",
              "relation_3": "bevat",
              "stim_6_id": "4",
              "stim_7_id": "4",
              "relation_4": "bevat",
              "stim_8_id": "5",
              "q_stim_1_id": "5",
              "q_rel": "Bevat",
              "q_stim_2_id": "1",
              "correct_response": "no",
              "trial_num": "78",
              "q_word": ""
            },
            {
              "block": "5",
              "relation_1": "is binnen",
              "stim_3_id": "3",
              "relation_2": "bevat",
              "stim_4_id": "2",
              "stim_5_id": "4",
              "relation_3": "bevat",
              "stim_6_id": "3",
              "stim_7_id": "5",
              "relation_4": "bevat",
              "stim_8_id": "4",
              "q_stim_1_id": "5",
              "q_rel": "binnen",
              "q_stim_2_id": "1",
              "correct_response": "no",
              "trial_num": "79",
              "q_word": "Is"
            },
            {
              "block": "5",
              "relation_1": "is binnen",
              "stim_3_id": "2",
              "relation_2": "is binnen",
              "stim_4_id": "3",
              "stim_5_id": "4",
              "relation_3": "bevat",
              "stim_6_id": "3",
              "stim_7_id": "5",
              "relation_4": "bevat",
              "stim_8_id": "4",
              "q_stim_1_id": "1",
              "q_rel": "binnen",
              "q_stim_2_id": "5",
              "correct_response": "yes",
              "trial_num": "80",
              "q_word": "Is"
            }
          ],
          "sample": {
            "mode": "sequential",
            "n": ""
          },
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
// define each of the four potential stimuli per trial //
stimulus_1_bucket = ['BOR', 'COC', 'WUC', 'QOZ', 'NEZ', 'VOM', 'LAJ', 'XUL', 'WAQ', 'QIK', 'QEZ', 'DIL', 'WAJ', 'XEM', 'CUQ', 'CEY', 'QIQ', 'MOX', 'JIV', 'NUH', 'RUH', 'JIZ', 'TEB', 'GUC', 'LIX', 'XEJ', 'JAQ', 'POZ', 'DUJ', 'JAC', 'SOH', 'JIS', 'NAC', 'QOP', 'YOV', 'NAS', 'KUK', 'YIK', 'YIF', 'GOF', 'JEC', 'YUC', 'CIH', 'KUP', 'WUW', 'XEP', 'CIP', 'QAG', 'CIM', 'CUW', 'JUZ', 'YOZ', 'SAZ', 'REW', 'CAX', 'FAP', 'BUX', 'KOH', 'RER', 'QIX', 'FUX', 'VUP', 'FIP', 'KIV', 'XUD', 'QOF', 'MOH', 'HAZ', 'LIM', 'GIQ', 'BUZ', 'GUG', 'KES', 'HOX', 'MIF', 'QOB', 'VAP', 'XUX', 'QOS', 'QED', 'NUX', 'WAV', 'BIX', 'XIC', 'COV', 'NIJ', 'JIR', 'QUC', 'YEC', 'DUM', 'RAQ', 'QES', 'DAF', 'XAT', 'MEB', 'WEW', 'NAQ', 'XEN', 'BUK', 'MUP', 'ROQ', 'NAX', 'YIR', 'SED', 'WIB', 'XIH', 'RUR', 'KAQ', 'PUW', 'POC', 'JIH', 'XUS', 'QIJ', 'PEC', 'QEL', 'MEV', 'XIB', 'CAG', 'QUX', 'YUD', 'TOS', 'GER', 'MEY', 'MUX', 'JEK', 'YIG', 'QIP', 'CIC', 'CUK', 'XAV', 'YIJ', 'XIR', 'TEC', 'YAS', 'NIF', 'LOZ', 'SAV', 'CAF', 'WEY', 'GAJ', 'KUZ', 'FEF', 'GIR', 'WEV', 'QUZ', 'CIB', 'REQ', 'SEJ', 'DUZ', 'KUM', 'XAZ', 'TUS', 'CID', 'YEB', 'XOC', 'NUJ', 'GUQ', 'HIX', 'TIY', 'BUP', 'HAC', 'QEK', 'QEX', 'SIY', 'GOL', 'NUG', 'QIR', 'CEF', 'CEZ', 'TEV', 'QIY', 'KEC', 'YUV', 'LOH', 'YEM', 'KIH', 'QIC', 'YOH', 'QUP', 'SUS', 'GUK', 'YAV', 'TEY', 'CEW', 'QUH', 'GOC', 'HOZ', 'VOR', 'KIW', 'XIW', 'LIC', 'XAC', 'PAB', 'DEP', 'BAQ', 'XEF', 'LOV', 'HOQ', 'FUW', 'QET', 'LAQ', 'MOC', 'POQ', 'KOB', 'QEG', 'GOG', 'WEQ', 'SUV', 'YUQ', 'QON', 'PEH', 'VUN', 'FIJ', 'PIM', 'RUY', 'LUC', 'MUB', 'JIC', 'WUF', 'PIR', 'PEM', 'JIP', 'WUH', 'LUP', 'MEH', 'DOX', 'PIV', 'VOK', 'LEZ', 'HIG', 'VUH', 'YOR', 'HUZ', 'RUC', 'QOR', 'PEB', 'XIZ', 'XIF', 'SIW', 'XOK', 'RIR', 'TIQ', 'VEW', 'ROR', 'JEY', 'FUY', 'QOL'];
stimulus_2_bucket = ['SUR', 'VUS', 'BAZ', 'WEH', 'KEH', 'YOP', 'GAH', 'XEW', 'NIY', 'JOX', 'GEW', 'CIK', 'FEC', 'TOZ', 'CEJ', 'CEH', 'MAZ', 'RAC', 'NUM', 'GEV', 'CAS', 'QAQ', 'PEQ', 'XID', 'QOG', 'NOJ', 'YOQ', 'LUD', 'VUL', 'QAV', 'BAX', 'PIF', 'KOJ', 'CIF', 'SEP', 'QUV', 'CUL', 'ROX', 'FIM', 'NUC', 'QIM', 'PEJ', 'SAQ', 'QAR', 'KEQ', 'MED', 'GEF', 'POV', 'RAV', 'HUD', 'NAM', 'DOH', 'JER', 'TIZ', 'JUV', 'NEX', 'CIX', 'LUY', 'XIG', 'NOC', 'TUY', 'YAB', 'QOK', 'DUL', 'NOV', 'LIH', 'PIY', 'WUX', 'BIY', 'NEN', 'VUQ', 'DEF', 'SOG', 'XIX', 'BUF', 'GOW', 'CUX', 'HIQ', 'VIY', 'BIM', 'SOC', 'QEP', 'HIF', 'KAH', 'QAY', 'WEF', 'LUB', 'MUR', 'VIK', 'JUJ', 'MEJ', 'JIT', 'DIW', 'NID', 'PEY', 'LUF', 'VAJ', 'NIK', 'XAY', 'VIJ', 'JOS', 'YUF', 'SEB', 'TEQ', 'KOC', 'VIZ', 'TAC', 'DET', 'KAV', 'TOV', 'SUW', 'KAL', 'KIG', 'PUC', 'SUC', 'RUV', 'CIY', 'CEP', 'MUV', 'JIF', 'BOZ', 'QUL', 'YEL', 'GOQ', 'QIS', 'YUB', 'QAK', 'QUJ', 'NIW', 'FIH', 'MAQ', 'QAL', 'SOQ', 'HUF', 'GIC', 'NOQ', 'QUQ', 'TIW', 'MER', 'VOG', 'JUC', 'VES', 'TES', 'NEY', 'JUX', 'XUQ', 'LOJ', 'QIB', 'VIW', 'BUV', 'DAJ', 'XEQ', 'LEQ', 'PAQ', 'MEC', 'SOJ', 'FEX', 'VOC', 'QAW', 'GUB', 'LIW', 'HUX', 'YOF', 'XUY', 'HUS', 'WOY', 'JUR', 'HUC', 'CUY', 'RIZ', 'CEK', 'VIX', 'CUS', 'QOC', 'VUC', 'NUD', 'HIH', 'YOX', 'WIM', 'FIC', 'CUF', 'XOJ', 'XES', 'JIY', 'XUN', 'XIY', 'QID', 'YIV', 'FOW', 'GUF', 'TAH', 'MIY', 'FAQ', 'QAP', 'COQ', 'XOS', 'CAJ', 'GIH', 'MIP', 'DOQ', 'QOX', 'VOP', 'WOM', 'WAH', 'SEY', 'MIZ', 'WIX', 'DIF', 'DEH', 'KEJ', 'CUN', 'KUB', 'QUW', 'WUM', 'VAB', 'VIF', 'KIY', 'POY', 'XOX', 'YIB', 'LUT', 'WOZ', 'RIV', 'FOM', 'VAF', 'NEH', 'DUX', 'QUD', 'JAV', 'HOV', 'YEZ', 'RUP', 'WAZ', 'KOQ', 'SAF', 'QIG', 'VUW', 'QIH', 'HIW'];
stimulus_3_bucket = ['CET', 'QUM', 'LIY', 'YUG', 'XUW', 'GAC', 'QEH', 'PAZ', 'XIP', 'GIM', 'DOZ', 'JAF', 'FUH', 'KEZ', 'SOR', 'XEG', 'MIV', 'YIH', 'BIQ', 'VUY', 'XUG', 'PID', 'SEK', 'DUK', 'HIZ', 'YEV', 'COH', 'QUB', 'GEG', 'VAX', 'VEC', 'GUJ', 'YIC', 'CIW', 'POB', 'FEQ', 'VUD', 'QAJ', 'BUJ', 'XEY', 'TIX', 'CEM', 'KIQ', 'YEQ', 'MAH', 'XUV', 'DUV', 'XAP', 'NIN', 'HUR', 'PUQ', 'PUZ', 'QOM', 'XIM', 'VEJ', 'FAL', 'HED', 'CAH', 'GEZ', 'BAJ', 'HIR', 'YIL', 'QOD', 'DOD', 'YUX', 'YIQ', 'DEC', 'KUJ', 'NUW', 'SAH', 'FUM', 'SIL', 'WOH', 'WER', 'PIQ', 'JEX', 'KUQ', 'FAV', 'KUC', 'NAK', 'YAF', 'GIZ', 'XOY', 'XUR', 'SUJ', 'QIV', 'FUV', 'CAQ', 'BAC', 'CAC', 'GAZ', 'VUK', 'CIZ', 'VOV', 'XOT', 'HOJ', 'JAD', 'SUD', 'LIV', 'TOX', 'HUW', 'CED', 'XOG', 'HEZ', 'BEX', 'KED', 'FUQ', 'LIQ', 'MEZ', 'XAS', 'NEC', 'XAG', 'JAL', 'VEB', 'VEM', 'REZ', 'GEJ', 'JOM', 'WUB', 'VAD', 'MOJ', 'BUC', 'WUR', 'QOW', 'VED', 'QEQ', 'FEM', 'CEQ', 'PAV', 'XOH', 'CAZ', 'GOZ', 'HEC', 'TEK', 'CIJ', 'VEQ', 'YOJ', 'NEF', 'NUZ', 'XEV', 'REJ', 'SUQ', 'FOT', 'YOC', 'KAW', 'YUN', 'XAJ', 'JUY', 'KIS', 'LUH', 'GOS', 'BEC', 'KAC', 'XOV', 'COF', 'TEM', 'MAV', 'BER', 'WUN', 'KUX', 'COM', 'ROM', 'FUJ', 'NAF', 'JOR', 'YIW', 'FAW', 'WIF', 'VIR', 'FOJ', 'MEF', 'VOQ', 'VIQ', 'WID', 'FIV', 'PIW', 'LEC', 'XEK', 'YAQ', 'QEC', 'YOS', 'XED', 'YUJ', 'RUD', 'YEF', 'XAM', 'BUQ', 'NER', 'XAD', 'YER', 'YUR', 'JIQ', 'JAJ', 'XAF', 'CIQ', 'VID', 'LIR', 'WEZ', 'SIQ', 'MUC', 'NAZ', 'SIH', 'CUC', 'MEK', 'WOQ', 'GUX', 'PAJ', 'XAN', 'FUS', 'QUK', 'DUQ', 'DEZ', 'LAL', 'VEZ', 'SOV', 'BEJ', 'PUV', 'COJ', 'FAZ', 'NEQ', 'KIB', 'ROJ', 'WIC', 'JES', 'HOS', 'TUV', 'QAN', 'MUH', 'WUQ', 'HAV', 'BAP', 'XIJ', 'YAD', 'FAM', 'NEM', 'QAZ', 'WUJ', 'HUY', 'PAG', 'JOP', 'XOQ', 'VAM', 'CEG', 'VUZ', 'CEN', 'BEM', 'WOC', 'KUV', 'YAX'];
stimulus_4_bucket = ['CEB', 'FIQ', 'YEY', 'LAH', 'LAV', 'LOY', 'BEW', 'FEV', 'CUZ', 'XOM', 'SAR', 'MUJ', 'MIW', 'XOB', 'RIQ', 'XOD', 'YUY', 'FOL', 'VAY', 'TOB', 'DUY', 'WIV', 'YED', 'GAW', 'JIK', 'SUK', 'XAB', 'YIY', 'LIG', 'VUJ', 'GUV', 'RUQ', 'XOP', 'HEH', 'MUZ', 'MUQ', 'YEG', 'BEZ', 'BIF', 'VEK', 'XIK', 'YUZ', 'NIR', 'CIV', 'KUN', 'XOR', 'YAT', 'DOJ', 'XER', 'XUK', 'YEJ', 'YAN', 'NEJ', 'TAZ', 'YUS', 'KUW', 'SEZ', 'WEP', 'KOD', 'LOQ', 'SEG', 'KER', 'JEP', 'XEC', 'PUM', 'BEP', 'DIY', 'WOV', 'KUF', 'XUP', 'YIZ', 'SIV', 'WUP', 'HIB', 'QEM', 'FEB', 'HAQ', 'KUD', 'XUT', 'QUR', 'JUW', 'TIR', 'CEX', 'YEX', 'BEB', 'JUL', 'FIF', 'XOW', 'CUV', 'JAH', 'BOH', 'WUL', 'TUJ', 'QEV', 'JOD', 'VAZ', 'XUH', 'PUX', 'MEX', 'WIW', 'VUF', 'XUF', 'HUK', 'NIQ', 'TUZ', 'NIZ', 'RUX', 'QAF', 'GON', 'GIW', 'RAR', 'NAJ', 'QAH', 'TEF', 'SIF', 'JUP', 'HUV', 'YIS', 'VEF', 'KAZ', 'JEJ', 'XEX', 'PIB', 'PEZ', 'VUV', 'XIV', 'LUK', 'MIQ', 'BIW', 'HIL', 'MUW', 'CUH', 'TIH', 'NUV', 'CUG', 'XAW', 'TEH', 'TOC', 'TEP', 'QUS', 'SIJ', 'VOY', 'YAG', 'JOC', 'LEP', 'NAH', 'DIC', 'PUY', 'TEJ', 'CEV', 'YAC', 'HOH', 'JIW', 'HEJ', 'TUQ', 'XIL', 'YAZ', 'DIZ', 'YIM', 'KET', 'WEC', 'FAC', 'BIV', 'HEQ', 'SUH', 'CIL', 'QEF', 'KOY', 'GUZ', 'KEB', 'JOV', 'WEX', 'WOX', 'XUJ', 'JOF', 'XOZ', 'JEV', 'SOZ', 'SUT', 'XIN', 'GEC', 'RUJ', 'JEQ', 'BOJ', 'QOJ', 'WEJ', 'TEZ', 'SEQ', 'FUF', 'ROP', 'BIR', 'XEB', 'VOZ', 'FUK', 'MOY', 'VIL', 'HAX', 'QER', 'XOF', 'XAX', 'NIV', 'GOP', 'KEM', 'YIT', 'WOF', 'DAC', 'JEZ', 'WIH', 'JUH', 'KOZ', 'JIX', 'FEJ', 'MEQ', 'QEJ', 'XEZ', 'YAJ', 'DIQ', 'MUY', 'QUN', 'HIY', 'JEH', 'QUY', 'QAM', 'SEM', 'ROV', 'CIG', 'BEH', 'HUQ', 'YEK', 'GIK', 'DEG', 'WIY', 'KIC', 'LEJ', 'NUP', 'JUQ', 'CIR', 'QUT', 'VAQ', 'FUZ', 'KUY', 'KIZ', 'NAV', 'MOV', 'GIX', 'JOQ', 'WOB', 'LAZ', 'GEQ', 'SEF', 'TIV', 'LUZ'];
stimulus_5_bucket = ['JAX', 'QUG', 'JOJ', 'QIF', 'DOY', 'JEM', 'KAJ', 'JUM', 'QIZ', 'TUM', 'VIG', 'XAK', 'YOK', 'TID', 'KAG', 'CIT', 'GOV', 'LUR', 'GUD', 'WOD', 'FUP', 'XIT', 'SUY', 'VAH', 'CAV', 'PUJ', 'QAC', 'FEG', 'BAW', 'WUK', 'DEQ', 'DAV', 'YOL', 'NOZ', 'SES', 'TAQ', 'DAZ', 'JEG', 'YOY', 'ROF', 'KIX', 'SEH', 'CER', 'NAL', 'GEX', 'QOY', 'LUV', 'BOQ', 'KAX', 'QOT', 'YUL', 'GUH', 'BUW', 'FAH', 'GUW', 'TIF', 'SIZ', 'BIH', 'CIN', 'QOV', 'VIB', 'DED', 'GAK', 'RUZ', 'LOD', 'XUC', 'XEH', 'GIV', 'HAB', 'RAZ', 'HON', 'FIW', 'WUV', 'GAQ', 'MAJ', 'XAL', 'FEK', 'BOV', 'KIJ', 'TUC', 'VOT', 'QAB', 'MIH', 'QIW', 'YUW', 'KUG', 'YAL', 'FAF', 'KEL', 'FUL', 'FUC', 'VOH', 'WAC', 'BUH', 'LUJ', 'TUW', 'QEB', 'QIL', 'KUR', 'WUG', 'TOQ', 'VEY', 'GEH', 'TEX', 'TOJ', 'VUR', 'VOB', 'RIX', 'GEB', 'WEK', 'BEQ', 'RIY', 'FOS', 'DEJ', 'LUN', 'KOV', 'SUG', 'FOF', 'QEY', 'XAQ', 'QUF', 'QIN', 'XIQ', 'VIH', 'PUH', 'NUQ', 'QOQ', 'LIF', 'WOR', 'DIH', 'BOC', 'QOH', 'XOL', 'TUH', 'LUQ', 'XUM', 'DUH', 'GIY', 'JOZ', 'NOF', 'COR', 'QEW', 'NIH', 'NOX', 'WOJ', 'BIZ', 'VUM', 'TUD', 'GAX', 'JEL', 'HUJ', 'MOZ', 'SEV', 'NIG', 'XAR', 'YOT', 'GUR', 'POG', 'XUB', 'QAS', 'RUF', 'FOZ', 'PEX', 'NOY', 'VEH', 'NUY', 'XON', 'TAY', 'TUR', 'RIW', 'HEV', 'VEP', 'PEF', 'PEV', 'PIH', 'CUJ', 'FOD', 'DOB', 'YUT', 'SUZ', 'BAV', 'FAK', 'YIX', 'TIB', 'MUK', 'TOH', 'VUX', 'POJ', 'XUZ', 'VUT', 'FAJ', 'XET', 'FOQ', 'SAJ', 'WIQ', 'YOG', 'FEH', 'WUT', 'DAQ', 'XEL', 'MOQ', 'CEC', 'WUZ', 'VUB', 'RIH', 'QEN', 'JAZ', 'KAD', 'FOC', 'WUY', 'NIC', 'FOV', 'KOX', 'KOW', 'QAX', 'PIZ', 'XAH', 'KEW', 'VEV', 'LEH', 'QAD', 'GEP', 'LAN', 'YUH'];

this.state.stimulus_1 = stimulus_1_bucket[Math.random() * stimulus_1_bucket.length | 0];
this.state.stimulus_2 = stimulus_2_bucket[Math.random() * stimulus_2_bucket.length | 0];
this.state.stimulus_3 = stimulus_3_bucket[Math.random() * stimulus_3_bucket.length | 0];
this.state.stimulus_4 = stimulus_4_bucket[Math.random() * stimulus_4_bucket.length | 0];
this.state.stimulus_5 = stimulus_5_bucket[Math.random() * stimulus_5_bucket.length | 0];

this.parameters.stim_1 = this.state.stimulus_1
this.parameters.stim_2 = this.state.stimulus_2
this.parameters.q_stim_1 = this.state.stimulus_1
this.parameters.q_stim_2 = this.state.stimulus_2

this.state.total_correct = 0

}
          },
          "title": "standard_trial_list",
          "tardy": true,
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "trial_sequence",
            "content": [
              {
                "type": "lab.html.Frame",
                "context": "\u003Chead\u003E\n    \u003Cdiv id='countdown' class='timer_caption'\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Fhead\u003E\n\n\u003Cmain data-labjs-section=\"frame\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n  \u003Ccanvas\u002F\u003E\n\u003C\u002Fmain\u003E",
                "contextSelector": "[data-labjs-section=\"frame\"]",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
time_left = 30;

downloadTimer = setInterval(function(){
  if(time_left <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = "Resterende seconden: " + Math.trunc(time_left);
  }
  time_left -= 1;
}, 1000);


},
                  "after:end": function anonymous(
) {
clearInterval(downloadTimer);
}
                },
                "title": "timer",
                "tardy": true,
                "content": {
                  "type": "lab.canvas.Screen",
                  "content": [
                    {
                      "type": "i-text",
                      "left": 0,
                      "top": -75,
                      "angle": 0,
                      "width": 864.46,
                      "height": 27.12,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "black",
                      "text": "${this.parameters.stim_1} ${this.parameters.relation_1} ${this.parameters.stim_2}",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "24",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    },
                    {
                      "type": "i-text",
                      "left": 0,
                      "top": 150,
                      "angle": 0,
                      "width": 1165.98,
                      "height": 27.12,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "black",
                      "text": "${this.parameters.q_word} ${this.parameters.q_stim_1} ${this.parameters.q_rel} ${this.parameters.q_stim_2}?",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "24",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    },
                    {
                      "type": "aoi",
                      "left": -250,
                      "top": 250,
                      "angle": 0,
                      "width": 100,
                      "height": 75,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "rgba(0, 0, 0, 0.2)",
                      "label": "yes"
                    },
                    {
                      "type": "aoi",
                      "left": 250,
                      "top": 250,
                      "angle": 0,
                      "width": 100,
                      "height": 75,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "rgba(0, 0, 0, 0.2)",
                      "label": "no"
                    },
                    {
                      "type": "rect",
                      "left": -250,
                      "top": 250,
                      "angle": 0,
                      "width": 100,
                      "height": 75,
                      "stroke": "#000000",
                      "strokeWidth": 1,
                      "fill": "#a8ca09"
                    },
                    {
                      "type": "rect",
                      "left": 250,
                      "top": 250,
                      "angle": 0,
                      "width": 100,
                      "height": 75,
                      "stroke": "#000000",
                      "strokeWidth": 1,
                      "fill": "#d6341a"
                    },
                    {
                      "type": "i-text",
                      "left": -250,
                      "top": 250,
                      "angle": 0,
                      "width": 56.03,
                      "height": 31.64,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "#ffffff",
                      "text": "JA",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "28",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    },
                    {
                      "type": "i-text",
                      "left": 250,
                      "top": 250,
                      "angle": 0,
                      "width": 42,
                      "height": 31.64,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "#ffffff",
                      "text": "NEE",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "28",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    },
                    {
                      "type": "i-text",
                      "left": 0,
                      "top": -25,
                      "angle": 0,
                      "width": 864.46,
                      "height": 27.12,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "black",
                      "text": "${this.parameters.stim_3} ${this.parameters.relation_2} ${this.parameters.stim_4}",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "24",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    },
                    {
                      "type": "i-text",
                      "left": 0,
                      "top": 25,
                      "angle": 0,
                      "width": 864.46,
                      "height": 27.12,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "black",
                      "text": "${this.parameters.stim_5} ${this.parameters.relation_3} ${this.parameters.stim_6}",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "24",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    },
                    {
                      "type": "i-text",
                      "left": 0,
                      "top": -200,
                      "angle": 0,
                      "width": 381.98,
                      "height": 27.12,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "black",
                      "text": "Trial ${parameters.trial_num} of 128",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "24",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    },
                    {
                      "type": "i-text",
                      "left": 0,
                      "top": 75,
                      "angle": 0,
                      "width": 864.46,
                      "height": 27.12,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "black",
                      "text": "${this.parameters.stim_7} ${this.parameters.relation_4} ${this.parameters.stim_8}",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "24",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    }
                  ],
                  "viewport": [
                    800,
                    600
                  ],
                  "files": {},
                  "responses": {
                    "mousedown @yes": "yes",
                    "mousedown @no": "no"
                  },
                  "parameters": {},
                  "messageHandlers": {
                    "before:prepare": function anonymous(
) {
this.parameters.stim_1 = this.state.stimulus_1
this.parameters.stim_2 = this.state.stimulus_2

if (this.parameters.stim_3_id == 2) { 
  this.parameters.stim_3 = this.state.stimulus_2;
} else if (this.parameters.stim_3_id == 3) {
  this.parameters.stim_3 = this.state.stimulus_3;
};

if (this.parameters.stim_4_id == 1) { 
  this.parameters.stim_4 = this.state.stimulus_1;
} else if (this.parameters.stim_4_id == 2) {
  this.parameters.stim_4 = this.state.stimulus_2;
} else if (this.parameters.stim_4_id == 3) {
  this.parameters.stim_4 = this.state.stimulus_3;
};

if (this.parameters.stim_5_id == 1) { 
  this.parameters.stim_5 = this.state.stimulus_1;
} else if (this.parameters.stim_5_id == 2) {
  this.parameters.stim_5 = this.state.stimulus_2;
} else if (this.parameters.stim_5_id == 3) { 
  this.parameters.stim_5 = this.state.stimulus_3;
} else if (this.parameters.stim_5_id == 4) {
  this.parameters.stim_5 = this.state.stimulus_4;
};

if (this.parameters.stim_6_id == 1) { 
  this.parameters.stim_6 = this.state.stimulus_1;
} else if (this.parameters.stim_6_id == 2) {
  this.parameters.stim_6 = this.state.stimulus_2;
} else if (this.parameters.stim_6_id == 3) { 
  this.parameters.stim_6 = this.state.stimulus_3;
} else if (this.parameters.stim_6_id == 4) {
  this.parameters.stim_6 = this.state.stimulus_4;
} else if (this.parameters.stim_6_id == 5) {
  this.parameters.stim_6 = this.state.stimulus_5;
};

if (this.parameters.stim_7_id == 1) { 
  this.parameters.stim_7 = this.state.stimulus_1;
} else if (this.parameters.stim_7_id == 2) {
  this.parameters.stim_7 = this.state.stimulus_2;
} else if (this.parameters.stim_7_id == 3) { 
  this.parameters.stim_7 = this.state.stimulus_3;
} else if (this.parameters.stim_7_id == 4) {
  this.parameters.stim_7 = this.state.stimulus_4;
} else if (this.parameters.stim_7_id == 5) {
  this.parameters.stim_7 = this.state.stimulus_5;
};

if (this.parameters.stim_8_id == 1) { 
  this.parameters.stim_8 = this.state.stimulus_1;
} else if (this.parameters.stim_8_id == 2) {
  this.parameters.stim_8 = this.state.stimulus_2;
} else if (this.parameters.stim_8_id == 3) { 
  this.parameters.stim_8 = this.state.stimulus_3;
} else if (this.parameters.stim_8_id == 4) {
  this.parameters.stim_8 = this.state.stimulus_4;
} else if (this.parameters.stim_8_id == 5) {
  this.parameters.stim_8 = this.state.stimulus_5;
};

if (this.parameters.q_stim_1_id == 1) { 
  this.parameters.q_stim_1 = this.state.stimulus_1;
} else if (this.parameters.q_stim_1_id == 2) {
  this.parameters.q_stim_1 = this.state.stimulus_2;
} else if (this.parameters.q_stim_1_id == 3) {
  this.parameters.q_stim_1 = this.state.stimulus_3;
} else if (this.parameters.q_stim_1_id == 4) {
  this.parameters.q_stim_1 = this.state.stimulus_4;
} else if (this.parameters.q_stim_1_id == 5) {
  this.parameters.q_stim_1 = this.state.stimulus_5;
};

if (this.parameters.q_stim_2_id == 1) { 
  this.parameters.q_stim_2 = this.state.stimulus_1;
} else if (this.parameters.q_stim_2_id == 2) {
  this.parameters.q_stim_2 = this.state.stimulus_2;
} else if (this.parameters.q_stim_2_id == 3) {
  this.parameters.q_stim_2 = this.state.stimulus_3;
} else if (this.parameters.q_stim_2_id == 4) {
  this.parameters.q_stim_2 = this.state.stimulus_4;
} else if (this.parameters.q_stim_2_id == 5) {
  this.parameters.q_stim_2 = this.state.stimulus_5;
};
},
                    "after:end": function anonymous(
) {
// remove currently used stimuli from buckets
stimulus_1_bucket = stimulus_1_bucket.filter(item => item !== this.state.stimulus_1)
stimulus_2_bucket = stimulus_2_bucket.filter(item => item !== this.state.stimulus_2)
stimulus_3_bucket = stimulus_3_bucket.filter(item => item !== this.state.stimulus_3)
stimulus_4_bucket = stimulus_4_bucket.filter(item => item !== this.state.stimulus_4)
stimulus_5_bucket = stimulus_5_bucket.filter(item => item !== this.state.stimulus_5)


// select the new stimuli for the next trial //
this.state.stimulus_1 = stimulus_1_bucket[Math.random() * stimulus_1_bucket.length | 0];
this.state.stimulus_2 = stimulus_2_bucket[Math.random() * stimulus_2_bucket.length | 0];
this.state.stimulus_3 = stimulus_3_bucket[Math.random() * stimulus_3_bucket.length | 0];
this.state.stimulus_4 = stimulus_4_bucket[Math.random() * stimulus_4_bucket.length | 0];
this.state.stimulus_5 = stimulus_5_bucket[Math.random() * stimulus_5_bucket.length | 0];

if (this.state.correct == 1) {
  this.state.total_correct += 1
};
}
                  },
                  "title": "trial",
                  "correctResponse": "${parameters.correct_response}",
                  "tardy": true,
                  "timeout": "31000"
                }
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "iti",
                "timeout": "1000"
              }
            ]
          }
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "block": "6",
              "trial_num": "81",
              "relation_1": "is hetzelfde als",
              "relation_2": "is hetzelfde als",
              "q_stim_1_id": "1",
              "q_stim_2_id": "2",
              "q_rel": "hetzelfde als",
              "q_stim_3_id": "3",
              "q_stim_4_id": "4",
              "correct_response": "yes"
            },
            {
              "block": "6",
              "trial_num": "82",
              "relation_1": "is hetzelfde als",
              "relation_2": "is hetzelfde als",
              "q_stim_1_id": "1",
              "q_stim_2_id": "2",
              "q_rel": "het tegenovergestelde van",
              "q_stim_3_id": "4",
              "q_stim_4_id": "3",
              "correct_response": "no"
            },
            {
              "block": "6",
              "trial_num": "83",
              "relation_1": "is hetzelfde als",
              "relation_2": "is hetzelfde als",
              "q_stim_1_id": "2",
              "q_stim_2_id": "1",
              "q_rel": "het tegenovergestelde van",
              "q_stim_3_id": "4",
              "q_stim_4_id": "3",
              "correct_response": "no"
            },
            {
              "block": "6",
              "trial_num": "84",
              "relation_1": "is hetzelfde als",
              "relation_2": "is het tegenovergestelde van",
              "q_stim_1_id": "1",
              "q_stim_2_id": "2",
              "q_rel": "hetzelfde als",
              "q_stim_3_id": "4",
              "q_stim_4_id": "3",
              "correct_response": "no"
            },
            {
              "block": "6",
              "trial_num": "85",
              "relation_1": "is hetzelfde als",
              "relation_2": "is het tegenovergestelde van",
              "q_stim_1_id": "2",
              "q_stim_2_id": "1",
              "q_rel": "het tegenovergestelde van",
              "q_stim_3_id": "3",
              "q_stim_4_id": "4",
              "correct_response": "yes"
            },
            {
              "block": "6",
              "trial_num": "86",
              "relation_1": "is het tegenovergestelde van",
              "relation_2": "is het tegenovergestelde van",
              "q_stim_1_id": "1",
              "q_stim_2_id": "2",
              "q_rel": "hetzelfde als",
              "q_stim_3_id": "4",
              "q_stim_4_id": "3",
              "correct_response": "yes"
            },
            {
              "block": "6",
              "trial_num": "87",
              "relation_1": "is het tegenovergestelde van",
              "relation_2": "is het tegenovergestelde van",
              "q_stim_1_id": "1",
              "q_stim_2_id": "2",
              "q_rel": "het tegenovergestelde van",
              "q_stim_3_id": "3",
              "q_stim_4_id": "4",
              "correct_response": "no"
            },
            {
              "block": "6",
              "trial_num": "88",
              "relation_1": "is het tegenovergestelde van",
              "relation_2": "is het tegenovergestelde van",
              "q_stim_1_id": "2",
              "q_stim_2_id": "1",
              "q_rel": "het tegenovergestelde van",
              "q_stim_3_id": "3",
              "q_stim_4_id": "4",
              "correct_response": "no"
            },
            {
              "block": "6",
              "trial_num": "89",
              "relation_1": "is meer dan",
              "relation_2": "is meer dan",
              "q_stim_1_id": "1",
              "q_stim_2_id": "2",
              "q_rel": "hetzelfde als",
              "q_stim_3_id": "4",
              "q_stim_4_id": "3",
              "correct_response": "no"
            },
            {
              "block": "6",
              "trial_num": "90",
              "relation_1": "is meer dan",
              "relation_2": "is meer dan",
              "q_stim_1_id": "1",
              "q_stim_2_id": "2",
              "q_rel": "het tegenovergestelde van",
              "q_stim_3_id": "3",
              "q_stim_4_id": "4",
              "correct_response": "no"
            },
            {
              "block": "6",
              "trial_num": "91",
              "relation_1": "is meer dan",
              "relation_2": "is meer dan",
              "q_stim_1_id": "2",
              "q_stim_2_id": "1",
              "q_rel": "het tegenovergestelde van",
              "q_stim_3_id": "3",
              "q_stim_4_id": "4",
              "correct_response": "yes"
            },
            {
              "block": "6",
              "trial_num": "92",
              "relation_1": "is meer dan",
              "relation_2": "is minder dan",
              "q_stim_1_id": "1",
              "q_stim_2_id": "2",
              "q_rel": "hetzelfde als",
              "q_stim_3_id": "3",
              "q_stim_4_id": "4",
              "correct_response": "no"
            },
            {
              "block": "6",
              "trial_num": "93",
              "relation_1": "is meer dan",
              "relation_2": "is minder dan",
              "q_stim_1_id": "2",
              "q_stim_2_id": "1",
              "q_rel": "het tegenovergestelde van",
              "q_stim_3_id": "4",
              "q_stim_4_id": "3",
              "correct_response": "yes"
            },
            {
              "block": "6",
              "trial_num": "94",
              "relation_1": "is minder dan",
              "relation_2": "is minder dan",
              "q_stim_1_id": "2",
              "q_stim_2_id": "1",
              "q_rel": "hetzelfde als",
              "q_stim_3_id": "3",
              "q_stim_4_id": "4",
              "correct_response": "no"
            },
            {
              "block": "6",
              "trial_num": "95",
              "relation_1": "is minder dan",
              "relation_2": "is minder dan",
              "q_stim_1_id": "1",
              "q_stim_2_id": "2",
              "q_rel": "het tegenovergestelde van",
              "q_stim_3_id": "4",
              "q_stim_4_id": "3",
              "correct_response": "yes"
            },
            {
              "block": "6",
              "trial_num": "96",
              "relation_1": "is minder dan",
              "relation_2": "is minder dan",
              "q_stim_1_id": "2",
              "q_stim_2_id": "1",
              "q_rel": "het tegenovergestelde van",
              "q_stim_3_id": "4",
              "q_stim_4_id": "3",
              "correct_response": "no"
            }
          ],
          "sample": {
            "mode": "sequential",
            "n": ""
          },
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {

this.state.stimulus_1 = stimulus_1_bucket[Math.random() * stimulus_1_bucket.length | 0];
this.state.stimulus_2 = stimulus_2_bucket[Math.random() * stimulus_2_bucket.length | 0];
this.state.stimulus_3 = stimulus_3_bucket[Math.random() * stimulus_3_bucket.length | 0];
this.state.stimulus_4 = stimulus_4_bucket[Math.random() * stimulus_4_bucket.length | 0];

this.parameters.stim_1 = this.state.stimulus_1
this.parameters.stim_2 = this.state.stimulus_2
this.parameters.stim_3 = this.state.stimulus_3
this.parameters.stim_4 = this.state.stimulus_4
this.parameters.q_stim_1 = this.state.stimulus_1
this.parameters.q_stim_2 = this.state.stimulus_2
this.parameters.q_stim_3 = this.state.stimulus_3
this.parameters.q_stim_4 = this.state.stimulus_4

}
          },
          "title": "trial_list_analogical ",
          "tardy": true,
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "trial_sequence",
            "content": [
              {
                "type": "lab.html.Frame",
                "context": "\u003Chead\u003E\n    \u003Cdiv id='countdown' class='timer_caption'\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Fhead\u003E\n\n\u003Cmain data-labjs-section=\"frame\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n  \u003Ccanvas\u002F\u003E\n\u003C\u002Fmain\u003E",
                "contextSelector": "[data-labjs-section=\"frame\"]",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
time_left = 30;

downloadTimer = setInterval(function(){
  if(time_left <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = "Resterende seconden: " + Math.trunc(time_left);
  }
  time_left -= 1;
}, 1000);


},
                  "after:end": function anonymous(
) {
clearInterval(downloadTimer);
}
                },
                "title": "timer",
                "tardy": true,
                "content": {
                  "type": "lab.canvas.Screen",
                  "content": [
                    {
                      "type": "i-text",
                      "left": 0,
                      "top": -50,
                      "angle": 0,
                      "width": 864.46,
                      "height": 27.12,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "black",
                      "text": "${this.parameters.stim_1} ${this.parameters.relation_1} ${this.parameters.stim_2}",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "24",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    },
                    {
                      "type": "i-text",
                      "left": 0,
                      "top": 150,
                      "angle": 0,
                      "width": 656.34,
                      "height": 90.04,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "black",
                      "text": "Is ${this.parameters.q_stim_1} to ${this.parameters.q_stim_2}\n${this.parameters.q_rel} \n${this.parameters.q_stim_3} to ${this.parameters.q_stim_4}?",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "24",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    },
                    {
                      "type": "aoi",
                      "left": -250,
                      "top": 250,
                      "angle": 0,
                      "width": 100,
                      "height": 75,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "rgba(0, 0, 0, 0.2)",
                      "label": "yes"
                    },
                    {
                      "type": "aoi",
                      "left": 250,
                      "top": 250,
                      "angle": 0,
                      "width": 100,
                      "height": 75,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "rgba(0, 0, 0, 0.2)",
                      "label": "no"
                    },
                    {
                      "type": "rect",
                      "left": -250,
                      "top": 250,
                      "angle": 0,
                      "width": 100,
                      "height": 75,
                      "stroke": "#000000",
                      "strokeWidth": 1,
                      "fill": "#a8ca09"
                    },
                    {
                      "type": "rect",
                      "left": 250,
                      "top": 250,
                      "angle": 0,
                      "width": 100,
                      "height": 75,
                      "stroke": "#000000",
                      "strokeWidth": 1,
                      "fill": "#d6341a"
                    },
                    {
                      "type": "i-text",
                      "left": -250,
                      "top": 250,
                      "angle": 0,
                      "width": 56.03,
                      "height": 31.64,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "#ffffff",
                      "text": "JA",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "28",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    },
                    {
                      "type": "i-text",
                      "left": 250,
                      "top": 250,
                      "angle": 0,
                      "width": 42,
                      "height": 31.64,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "#ffffff",
                      "text": "NEE",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "28",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    },
                    {
                      "type": "i-text",
                      "left": 0,
                      "top": 0,
                      "angle": 0,
                      "width": 864.46,
                      "height": 27.12,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "black",
                      "text": "${this.parameters.stim_3} ${this.parameters.relation_2} ${this.parameters.stim_4}",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "24",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    },
                    {
                      "type": "i-text",
                      "left": 0,
                      "top": -200,
                      "angle": 0,
                      "width": 381.98,
                      "height": 27.12,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "black",
                      "text": "Trial ${parameters.trial_num} of 128",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "24",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    }
                  ],
                  "viewport": [
                    800,
                    600
                  ],
                  "files": {},
                  "responses": {
                    "mousedown @yes": "yes",
                    "mousedown @no": "no"
                  },
                  "parameters": {},
                  "messageHandlers": {
                    "before:prepare": function anonymous(
) {
this.parameters.stim_1 = this.state.stimulus_1
this.parameters.stim_2 = this.state.stimulus_2
this.parameters.stim_3 = this.state.stimulus_3
this.parameters.stim_4 = this.state.stimulus_4
this.parameters.q_stim_1 = this.state.stimulus_1
this.parameters.q_stim_2 = this.state.stimulus_2
this.parameters.q_stim_3 = this.state.stimulus_3
this.parameters.q_stim_4 = this.state.stimulus_4

if (this.parameters.stim_1_id == 1) { 
  this.parameters.stim_1 = this.state.stimulus_1;
} else if (this.parameters.stim_3_id == 2) {
  this.parameters.stim_1 = this.state.stimulus_2;
};

if (this.parameters.stim_2_id == 1) { 
  this.parameters.stim_2 = this.state.stimulus_1;
} else if (this.parameters.stim_4_id == 2) {
  this.parameters.stim_2 = this.state.stimulus_2;
};

if (this.parameters.q_stim_1_id == 1) { 
  this.parameters.q_stim_1 = this.state.stimulus_1;
} else if (this.parameters.q_stim_1_id == 2) {
  this.parameters.q_stim_1 = this.state.stimulus_2;
};

if (this.parameters.q_stim_2_id == 1) { 
  this.parameters.q_stim_2 = this.state.stimulus_1;
} else if (this.parameters.q_stim_2_id == 2) {
  this.parameters.q_stim_2 = this.state.stimulus_2;
};


},
                    "after:end": function anonymous(
) {
// remove currently used stimuli from buckets
stimulus_1_bucket = stimulus_1_bucket.filter(item => item !== this.state.stimulus_1)
stimulus_2_bucket = stimulus_2_bucket.filter(item => item !== this.state.stimulus_2)
stimulus_3_bucket = stimulus_3_bucket.filter(item => item !== this.state.stimulus_3)
stimulus_4_bucket = stimulus_4_bucket.filter(item => item !== this.state.stimulus_4)

// select the new stimuli for the next trial //
this.state.stimulus_1 = stimulus_1_bucket[Math.random() * stimulus_1_bucket.length | 0];
this.state.stimulus_2 = stimulus_2_bucket[Math.random() * stimulus_2_bucket.length | 0];
this.state.stimulus_3 = stimulus_3_bucket[Math.random() * stimulus_3_bucket.length | 0];
this.state.stimulus_4 = stimulus_4_bucket[Math.random() * stimulus_4_bucket.length | 0];

if (this.state.correct == 1) {
  this.state.total_correct += 1
};
}
                  },
                  "title": "trial",
                  "correctResponse": "${parameters.correct_response}",
                  "tardy": true,
                  "timeout": "31000"
                }
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "iti",
                "timeout": "1000"
              }
            ]
          }
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "block": "7",
              "stim_1_id": "1",
              "relation_1_verb": "is",
              "relation_1_place": "hier",
              "relation_1_time": "",
              "stim_2_id": "2",
              "relation_2_verb": "is",
              "relation_2_place": "daar",
              "relation_2_time": "",
              "switch_1": "Als hier is daar en daar is hier",
              "switch_2_stim_1_id": "",
              "switch_2_verb": "",
              "switch_2_stim_2_id": "",
              "switch_2_and": "",
              "switch_2_if": "",
              "q_stim_1_id": "1",
              "q_rel_place": "daar",
              "q_rel_time": "",
              "correct_response": "yes",
              "trial_num": "97"
            },
            {
              "block": "7",
              "stim_1_id": "1",
              "relation_1_verb": "is",
              "relation_1_place": "hier",
              "relation_1_time": "",
              "stim_2_id": "2",
              "relation_2_verb": "is",
              "relation_2_place": "daar",
              "relation_2_time": "",
              "switch_1": "Als hier is daar en daar is hier",
              "switch_2_stim_1_id": "",
              "switch_2_verb": "",
              "switch_2_stim_2_id": "",
              "switch_2_and": "",
              "switch_2_if": "",
              "q_stim_1_id": "2",
              "q_rel_place": "hier",
              "q_rel_time": "",
              "correct_response": "yes",
              "trial_num": "98"
            },
            {
              "block": "7",
              "stim_1_id": "1",
              "relation_1_verb": "is",
              "relation_1_place": "hier",
              "relation_1_time": "nu",
              "stim_2_id": "2",
              "relation_2_verb": "was",
              "relation_2_place": "daar",
              "relation_2_time": "toen",
              "switch_1": "Als hier is daar en daar is hier",
              "switch_2_stim_1_id": "",
              "switch_2_verb": "",
              "switch_2_stim_2_id": "",
              "switch_2_and": "",
              "switch_2_if": "",
              "q_stim_1_id": "1",
              "q_rel_place": "hier",
              "q_rel_time": "nu",
              "correct_response": "no",
              "trial_num": "99"
            },
            {
              "block": "7",
              "stim_1_id": "1",
              "relation_1_verb": "is",
              "relation_1_place": "hier",
              "relation_1_time": "nu",
              "stim_2_id": "2",
              "relation_2_verb": "was",
              "relation_2_place": "daar",
              "relation_2_time": "toen",
              "switch_1": "Als hier is daar en daar is hier",
              "switch_2_stim_1_id": "",
              "switch_2_verb": "",
              "switch_2_stim_2_id": "",
              "switch_2_and": "",
              "switch_2_if": "",
              "q_stim_1_id": "1",
              "q_rel_place": "daar",
              "q_rel_time": "toen",
              "correct_response": "no",
              "trial_num": "100"
            },
            {
              "block": "7",
              "stim_1_id": "1",
              "relation_1_verb": "is",
              "relation_1_place": "hier",
              "relation_1_time": "nu",
              "stim_2_id": "2",
              "relation_2_verb": "was",
              "relation_2_place": "daar",
              "relation_2_time": "toen",
              "switch_1": "Als nu is toen en toen is nu",
              "switch_2_stim_1_id": "",
              "switch_2_verb": "",
              "switch_2_stim_2_id": "",
              "switch_2_and": "",
              "switch_2_if": "",
              "q_stim_1_id": "1",
              "q_rel_place": "hier",
              "q_rel_time": "toen",
              "correct_response": "yes",
              "trial_num": "101"
            },
            {
              "block": "7",
              "stim_1_id": "1",
              "relation_1_verb": "is",
              "relation_1_place": "hier",
              "relation_1_time": "nu",
              "stim_2_id": "2",
              "relation_2_verb": "was",
              "relation_2_place": "daar",
              "relation_2_time": "toen",
              "switch_1": "Als nu is toen en toen is nu",
              "switch_2_stim_1_id": "",
              "switch_2_verb": "",
              "switch_2_stim_2_id": "",
              "switch_2_and": "",
              "switch_2_if": "",
              "q_stim_1_id": "1",
              "q_rel_place": "daar",
              "q_rel_time": "nu",
              "correct_response": "no",
              "trial_num": "102"
            },
            {
              "block": "7",
              "stim_1_id": "1",
              "relation_1_verb": "is",
              "relation_1_place": "hier",
              "relation_1_time": "nu",
              "stim_2_id": "2",
              "relation_2_verb": "was",
              "relation_2_place": "daar",
              "relation_2_time": "toen",
              "switch_1": "Als hier is daar en daar is hier",
              "switch_2_stim_1_id": "1",
              "switch_2_verb": "is",
              "switch_2_stim_2_id": "2",
              "switch_2_and": "en",
              "switch_2_if": "als",
              "q_stim_1_id": "1",
              "q_rel_place": "hier",
              "q_rel_time": "toen",
              "correct_response": "yes",
              "trial_num": "103"
            },
            {
              "block": "7",
              "stim_1_id": "1",
              "relation_1_verb": "is",
              "relation_1_place": "hier",
              "relation_1_time": "nu",
              "stim_2_id": "2",
              "relation_2_verb": "was",
              "relation_2_place": "daar",
              "relation_2_time": "toen",
              "switch_1": "Als hier is daar en daar is hier",
              "switch_2_stim_1_id": "1",
              "switch_2_verb": "is",
              "switch_2_stim_2_id": "2",
              "switch_2_and": "en",
              "switch_2_if": "als",
              "q_stim_1_id": "1",
              "q_rel_place": "daar",
              "q_rel_time": "toen",
              "correct_response": "no",
              "trial_num": "104"
            },
            {
              "block": "7",
              "stim_1_id": "1",
              "relation_1_verb": "is",
              "relation_1_place": "hier",
              "relation_1_time": "nu",
              "stim_2_id": "2",
              "relation_2_verb": "was",
              "relation_2_place": "daar",
              "relation_2_time": "toen",
              "switch_1": "Als hier is daar en daar is hier",
              "switch_2_stim_1_id": "1",
              "switch_2_verb": "is",
              "switch_2_stim_2_id": "2",
              "switch_2_and": "en",
              "switch_2_if": "als",
              "q_stim_1_id": "2",
              "q_rel_place": "hier",
              "q_rel_time": "nu",
              "correct_response": "no",
              "trial_num": "105"
            },
            {
              "block": "7",
              "stim_1_id": "1",
              "relation_1_verb": "is",
              "relation_1_place": "hier",
              "relation_1_time": "nu",
              "stim_2_id": "2",
              "relation_2_verb": "was",
              "relation_2_place": "daar",
              "relation_2_time": "toen",
              "switch_1": "Als hier is daar en daar is hier",
              "switch_2_stim_1_id": "1",
              "switch_2_verb": "is",
              "switch_2_stim_2_id": "2",
              "switch_2_and": "en",
              "switch_2_if": "als",
              "q_stim_1_id": "2",
              "q_rel_place": "hier",
              "q_rel_time": "toen",
              "correct_response": "no",
              "trial_num": "106"
            },
            {
              "block": "7",
              "stim_1_id": "1",
              "relation_1_verb": "is",
              "relation_1_place": "hier",
              "relation_1_time": "nu",
              "stim_2_id": "2",
              "relation_2_verb": "was",
              "relation_2_place": "daar",
              "relation_2_time": "toen",
              "switch_1": "Als hier is daar en daar is hier",
              "switch_2_stim_1_id": "1",
              "switch_2_verb": "is",
              "switch_2_stim_2_id": "2",
              "switch_2_and": "en",
              "switch_2_if": "als",
              "q_stim_1_id": "2",
              "q_rel_place": "daar",
              "q_rel_time": "toen",
              "correct_response": "no",
              "trial_num": "107"
            },
            {
              "block": "7",
              "stim_1_id": "1",
              "relation_1_verb": "is",
              "relation_1_place": "hier",
              "relation_1_time": "nu",
              "stim_2_id": "2",
              "relation_2_verb": "was",
              "relation_2_place": "daar",
              "relation_2_time": "toen",
              "switch_1": "Als nu is toen en toen is nu",
              "switch_2_stim_1_id": "1",
              "switch_2_verb": "is",
              "switch_2_stim_2_id": "2",
              "switch_2_and": "en",
              "switch_2_if": "als",
              "q_stim_1_id": "1",
              "q_rel_place": "hier",
              "q_rel_time": "toen",
              "correct_response": "no",
              "trial_num": "108"
            },
            {
              "block": "7",
              "stim_1_id": "1",
              "relation_1_verb": "is",
              "relation_1_place": "hier",
              "relation_1_time": "nu",
              "stim_2_id": "2",
              "relation_2_verb": "was",
              "relation_2_place": "daar",
              "relation_2_time": "toen",
              "switch_1": "Als nu is toen en toen is nu",
              "switch_2_stim_1_id": "1",
              "switch_2_verb": "is",
              "switch_2_stim_2_id": "2",
              "switch_2_and": "en",
              "switch_2_if": "als",
              "q_stim_1_id": "1",
              "q_rel_place": "daar",
              "q_rel_time": "nu",
              "correct_response": "yes",
              "trial_num": "109"
            },
            {
              "block": "7",
              "stim_1_id": "1",
              "relation_1_verb": "is",
              "relation_1_place": "hier",
              "relation_1_time": "nu",
              "stim_2_id": "2",
              "relation_2_verb": "was",
              "relation_2_place": "daar",
              "relation_2_time": "toen",
              "switch_1": "Als nu is toen en toen is nu",
              "switch_2_stim_1_id": "1",
              "switch_2_verb": "is",
              "switch_2_stim_2_id": "2",
              "switch_2_and": "en",
              "switch_2_if": "als",
              "q_stim_1_id": "1",
              "q_rel_place": "daar",
              "q_rel_time": "toen",
              "correct_response": "no",
              "trial_num": "110"
            },
            {
              "block": "7",
              "stim_1_id": "1",
              "relation_1_verb": "is",
              "relation_1_place": "hier",
              "relation_1_time": "nu",
              "stim_2_id": "2",
              "relation_2_verb": "was",
              "relation_2_place": "daar",
              "relation_2_time": "toen",
              "switch_1": "Als nu is toen en toen is nu",
              "switch_2_stim_1_id": "1",
              "switch_2_verb": "is",
              "switch_2_stim_2_id": "2",
              "switch_2_and": "en",
              "switch_2_if": "als",
              "q_stim_1_id": "2",
              "q_rel_place": "hier",
              "q_rel_time": "toen",
              "correct_response": "yes",
              "trial_num": "111"
            },
            {
              "block": "7",
              "stim_1_id": "1",
              "relation_1_verb": "is",
              "relation_1_place": "hier",
              "relation_1_time": "nu",
              "stim_2_id": "2",
              "relation_2_verb": "was",
              "relation_2_place": "daar",
              "relation_2_time": "toen",
              "switch_1": "Als nu is toen en toen is nu",
              "switch_2_stim_1_id": "1",
              "switch_2_verb": "is",
              "switch_2_stim_2_id": "2",
              "switch_2_and": "en",
              "switch_2_if": "als",
              "q_stim_1_id": "2",
              "q_rel_place": "daar",
              "q_rel_time": "toen",
              "correct_response": "no",
              "trial_num": "112"
            }
          ],
          "sample": {
            "mode": "sequential",
            "n": ""
          },
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {

this.state.stimulus_1 = stimulus_1_bucket[Math.random() * stimulus_1_bucket.length | 0];
this.state.stimulus_2 = stimulus_2_bucket[Math.random() * stimulus_2_bucket.length | 0];
this.state.stimulus_3 = stimulus_3_bucket[Math.random() * stimulus_3_bucket.length | 0];
this.state.stimulus_4 = stimulus_4_bucket[Math.random() * stimulus_4_bucket.length | 0];

this.parameters.stim_1 = this.state.stimulus_1
this.parameters.stim_2 = this.state.stimulus_2
this.parameters.stim_3 = this.state.stimulus_3
this.parameters.stim_4 = this.state.stimulus_4
this.parameters.q_stim_1 = this.state.stimulus_1
this.parameters.q_stim_2 = this.state.stimulus_2
this.parameters.q_stim_3 = this.state.stimulus_3
this.parameters.q_stim_4 = this.state.stimulus_4

}
          },
          "title": "trial_list_deictic",
          "tardy": true,
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "trial_sequence",
            "content": [
              {
                "type": "lab.html.Frame",
                "context": "\u003Chead\u003E\n    \u003Cdiv id='countdown' class='timer_caption'\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Fhead\u003E\n\n\u003Cmain data-labjs-section=\"frame\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n  \u003Ccanvas\u002F\u003E\n\u003C\u002Fmain\u003E",
                "contextSelector": "[data-labjs-section=\"frame\"]",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
time_left = 30;

downloadTimer = setInterval(function(){
  if(time_left <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = "Resterende seconden: " + Math.trunc(time_left);
  }
  time_left -= 1;
}, 1000);


},
                  "after:end": function anonymous(
) {
clearInterval(downloadTimer);
}
                },
                "title": "timer",
                "tardy": true,
                "content": {
                  "type": "lab.canvas.Screen",
                  "content": [
                    {
                      "type": "i-text",
                      "left": 0,
                      "top": -75,
                      "angle": 0,
                      "width": 1402.15,
                      "height": 27.12,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "black",
                      "text": "${this.parameters.stim_1} ${this.parameters.relation_1_verb} ${this.parameters.relation_1_place} ${this.parameters.relation_1_time}",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "24",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    },
                    {
                      "type": "i-text",
                      "left": 0,
                      "top": 150,
                      "angle": 0,
                      "width": 989.88,
                      "height": 27.12,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "black",
                      "text": "Is ${this.parameters.q_stim_1} ${this.parameters.q_rel_place} ${this.parameters.q_rel_time}?",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "24",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    },
                    {
                      "type": "aoi",
                      "left": -250,
                      "top": 250,
                      "angle": 0,
                      "width": 100,
                      "height": 75,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "rgba(0, 0, 0, 0.2)",
                      "label": "yes"
                    },
                    {
                      "type": "aoi",
                      "left": 250,
                      "top": 250,
                      "angle": 0,
                      "width": 100,
                      "height": 75,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "rgba(0, 0, 0, 0.2)",
                      "label": "no"
                    },
                    {
                      "type": "rect",
                      "left": -250,
                      "top": 250,
                      "angle": 0,
                      "width": 100,
                      "height": 75,
                      "stroke": "#000000",
                      "strokeWidth": 1,
                      "fill": "#a8ca09"
                    },
                    {
                      "type": "rect",
                      "left": 250,
                      "top": 250,
                      "angle": 0,
                      "width": 100,
                      "height": 75,
                      "stroke": "#000000",
                      "strokeWidth": 1,
                      "fill": "#d6341a"
                    },
                    {
                      "type": "i-text",
                      "left": -250,
                      "top": 250,
                      "angle": 0,
                      "width": 56.03,
                      "height": 31.64,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "#ffffff",
                      "text": "JA",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "28",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    },
                    {
                      "type": "i-text",
                      "left": 250,
                      "top": 250,
                      "angle": 0,
                      "width": 42,
                      "height": 31.64,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "#ffffff",
                      "text": "NEE",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "28",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    },
                    {
                      "type": "i-text",
                      "left": 0,
                      "top": -25,
                      "angle": 0,
                      "width": 1402.15,
                      "height": 27.12,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "black",
                      "text": "${this.parameters.stim_2} ${this.parameters.relation_2_verb} ${this.parameters.relation_2_place} ${this.parameters.relation_2_time}",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "24",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    },
                    {
                      "type": "i-text",
                      "left": 0,
                      "top": -200,
                      "angle": 0,
                      "width": 381.98,
                      "height": 27.12,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "black",
                      "text": "Trial ${parameters.trial_num} of 128",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "24",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    },
                    {
                      "type": "i-text",
                      "left": 0,
                      "top": 35,
                      "angle": 0,
                      "width": 649.7,
                      "height": 27.12,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "black",
                      "text": "${this.parameters.switch_1} ${this.parameters.switch_2_and}",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "24",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    },
                    {
                      "type": "i-text",
                      "left": 0,
                      "top": 75,
                      "angle": 0,
                      "width": 2940.19,
                      "height": 27.12,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "black",
                      "text": "${this.parameters.switch_2_if} ${this.parameters.switch_2_stim_1} ${this.parameters.switch_2_verb} ${this.parameters.switch_2_stim_2} ${this.parameters.switch_2_and} ${this.parameters.switch_2_stim_2} ${this.parameters.switch_2_verb} ${this.parameters.switch_2_stim_1}",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "24",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    }
                  ],
                  "viewport": [
                    800,
                    600
                  ],
                  "files": {},
                  "responses": {
                    "mousedown @yes": "yes",
                    "mousedown @no": "no"
                  },
                  "parameters": {},
                  "messageHandlers": {
                    "before:prepare": function anonymous(
) {
this.parameters.stim_1 = this.state.stimulus_1
this.parameters.stim_2 = this.state.stimulus_2
this.parameters.stim_3 = this.state.stimulus_3
this.parameters.stim_4 = this.state.stimulus_4
this.parameters.q_stim_1 = this.state.stimulus_1
this.parameters.q_stim_2 = this.state.stimulus_2
this.parameters.q_stim_3 = this.state.stimulus_3
this.parameters.q_stim_4 = this.state.stimulus_4

if (this.parameters.stim_1_id == 1) { 
  this.parameters.stim_1 = this.state.stimulus_1;
} else if (this.parameters.stim_3_id == 2) {
  this.parameters.stim_1 = this.state.stimulus_2;
};

if (this.parameters.stim_2_id == 1) { 
  this.parameters.stim_2 = this.state.stimulus_1;
} else if (this.parameters.stim_4_id == 2) {
  this.parameters.stim_2 = this.state.stimulus_2;
};

// set values for the switch 2 stimuli
if (this.parameters.switch_2_stim_1_id == 1) { 
  this.parameters.switch_2_stim_1 = this.state.stimulus_1;
};
if (this.parameters.switch_2_stim_2_id == 2) { 
  this.parameters.switch_2_stim_2 = this.state.stimulus_2;
};

if (this.parameters.q_stim_1_id == 1) { 
  this.parameters.q_stim_1 = this.state.stimulus_1;
} else if (this.parameters.q_stim_1_id == 2) {
  this.parameters.q_stim_1 = this.state.stimulus_2;
};

if (this.parameters.q_stim_2_id == 1) { 
  this.parameters.q_stim_2 = this.state.stimulus_1;
} else if (this.parameters.q_stim_2_id == 2) {
  this.parameters.q_stim_2 = this.state.stimulus_2;
};


},
                    "after:end": function anonymous(
) {
// remove currently used stimuli from buckets
stimulus_1_bucket = stimulus_1_bucket.filter(item => item !== this.state.stimulus_1)
stimulus_2_bucket = stimulus_2_bucket.filter(item => item !== this.state.stimulus_2)
stimulus_3_bucket = stimulus_3_bucket.filter(item => item !== this.state.stimulus_3)
stimulus_4_bucket = stimulus_4_bucket.filter(item => item !== this.state.stimulus_4)

// select the new stimuli for the next trial //
this.state.stimulus_1 = stimulus_1_bucket[Math.random() * stimulus_1_bucket.length | 0];
this.state.stimulus_2 = stimulus_2_bucket[Math.random() * stimulus_2_bucket.length | 0];
this.state.stimulus_3 = stimulus_3_bucket[Math.random() * stimulus_3_bucket.length | 0];
this.state.stimulus_4 = stimulus_4_bucket[Math.random() * stimulus_4_bucket.length | 0];

if (this.state.correct == 1) {
  this.state.total_correct += 1
};
}
                  },
                  "title": "trial",
                  "correctResponse": "${parameters.correct_response}",
                  "tardy": true,
                  "timeout": "31000"
                }
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "iti",
                "timeout": "1000"
              }
            ]
          }
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "block": "8",
              "relation_1": "+",
              "meta_relation_1": "is hetzelfde als",
              "relation_2": "+",
              "meta_stim_1_id": "1",
              "meta_relation_2": "is meer dan",
              "meta_stim_2_id": "3",
              "q_stim_1_id": "2",
              "q_rel": "meer dan",
              "q_stim_2_id": "4",
              "correct_response": "no",
              "trial_num": "113"
            },
            {
              "block": "8",
              "relation_1": "+",
              "meta_relation_1": "is hetzelfde als",
              "relation_2": "+",
              "meta_stim_1_id": "1",
              "meta_relation_2": "is meer dan",
              "meta_stim_2_id": "3",
              "q_stim_1_id": "4",
              "q_rel": "minder dan",
              "q_stim_2_id": "2",
              "correct_response": "no",
              "trial_num": "114"
            },
            {
              "block": "8",
              "relation_1": "+",
              "meta_relation_1": "is hetzelfde als",
              "relation_2": "+",
              "meta_stim_1_id": "1",
              "meta_relation_2": "is minder dan",
              "meta_stim_2_id": "3",
              "q_stim_1_id": "2",
              "q_rel": "meer dan",
              "q_stim_2_id": "4",
              "correct_response": "yes",
              "trial_num": "115"
            },
            {
              "block": "8",
              "relation_1": "+",
              "meta_relation_1": "is hetzelfde als",
              "relation_2": "+",
              "meta_stim_1_id": "1",
              "meta_relation_2": "is minder dan",
              "meta_stim_2_id": "3",
              "q_stim_1_id": "4",
              "q_rel": "minder dan",
              "q_stim_2_id": "2",
              "correct_response": "yes",
              "trial_num": "116"
            },
            {
              "block": "8",
              "relation_1": "-",
              "meta_relation_1": "is hetzelfde als",
              "relation_2": "-",
              "meta_stim_1_id": "1",
              "meta_relation_2": "is meer dan",
              "meta_stim_2_id": "3",
              "q_stim_1_id": "2",
              "q_rel": "minder dan",
              "q_stim_2_id": "4",
              "correct_response": "no",
              "trial_num": "117"
            },
            {
              "block": "8",
              "relation_1": "-",
              "meta_relation_1": "is hetzelfde als",
              "relation_2": "-",
              "meta_stim_1_id": "1",
              "meta_relation_2": "is meer dan",
              "meta_stim_2_id": "3",
              "q_stim_1_id": "4",
              "q_rel": "meer dan",
              "q_stim_2_id": "2",
              "correct_response": "no",
              "trial_num": "118"
            },
            {
              "block": "8",
              "relation_1": "-",
              "meta_relation_1": "is hetzelfde als",
              "relation_2": "-",
              "meta_stim_1_id": "1",
              "meta_relation_2": "is minder dan",
              "meta_stim_2_id": "3",
              "q_stim_1_id": "2",
              "q_rel": "minder dan",
              "q_stim_2_id": "4",
              "correct_response": "yes",
              "trial_num": "119"
            },
            {
              "block": "8",
              "relation_1": "-",
              "meta_relation_1": "is hetzelfde als",
              "relation_2": "-",
              "meta_stim_1_id": "1",
              "meta_relation_2": "is minder dan",
              "meta_stim_2_id": "3",
              "q_stim_1_id": "4",
              "q_rel": "meer dan",
              "q_stim_2_id": "2",
              "correct_response": "yes",
              "trial_num": "120"
            },
            {
              "block": "9",
              "relation_1": "+",
              "meta_relation_1": "is meer dan",
              "relation_2": "+",
              "meta_stim_1_id": "1",
              "meta_relation_2": "is hetzelfde als",
              "meta_stim_2_id": "3",
              "q_stim_1_id": "2",
              "q_rel": "minder dan",
              "q_stim_2_id": "4",
              "correct_response": "no",
              "trial_num": "121"
            },
            {
              "block": "9",
              "relation_1": "+",
              "meta_relation_1": "is meer dan",
              "relation_2": "+",
              "meta_stim_1_id": "1",
              "meta_relation_2": "is hetzelfde als",
              "meta_stim_2_id": "3",
              "q_stim_1_id": "4",
              "q_rel": "meer dan",
              "q_stim_2_id": "2",
              "correct_response": "no",
              "trial_num": "122"
            },
            {
              "block": "9",
              "relation_1": "-",
              "meta_relation_1": "is meer dan",
              "relation_2": "-",
              "meta_stim_1_id": "1",
              "meta_relation_2": "is hetzelfde als",
              "meta_stim_2_id": "3",
              "q_stim_1_id": "2",
              "q_rel": "minder dan",
              "q_stim_2_id": "4",
              "correct_response": "yes",
              "trial_num": "123"
            },
            {
              "block": "9",
              "relation_1": "-",
              "meta_relation_1": "is meer dan",
              "relation_2": "-",
              "meta_stim_1_id": "1",
              "meta_relation_2": "is hetzelfde als",
              "meta_stim_2_id": "3",
              "q_stim_1_id": "4",
              "q_rel": "meer dan",
              "q_stim_2_id": "2",
              "correct_response": "yes",
              "trial_num": "124"
            },
            {
              "block": "9",
              "relation_1": "+",
              "meta_relation_1": "is minder dan",
              "relation_2": "+",
              "meta_stim_1_id": "2",
              "meta_relation_2": "is hetzelfde als",
              "meta_stim_2_id": "4",
              "q_stim_1_id": "1",
              "q_rel": "meer dan",
              "q_stim_2_id": "3",
              "correct_response": "no",
              "trial_num": "125"
            },
            {
              "block": "9",
              "relation_1": "+",
              "meta_relation_1": "is minder dan",
              "relation_2": "+",
              "meta_stim_1_id": "2",
              "meta_relation_2": "is hetzelfde als",
              "meta_stim_2_id": "4",
              "q_stim_1_id": "3",
              "q_rel": "minder dan",
              "q_stim_2_id": "1",
              "correct_response": "no",
              "trial_num": "126"
            },
            {
              "block": "9",
              "relation_1": "-",
              "meta_relation_1": "is minder dan",
              "relation_2": "-",
              "meta_stim_1_id": "2",
              "meta_relation_2": "is hetzelfde als",
              "meta_stim_2_id": "4",
              "q_stim_1_id": "1",
              "q_rel": "meer dan",
              "q_stim_2_id": "3",
              "correct_response": "no",
              "trial_num": "127"
            },
            {
              "block": "9",
              "relation_1": "-",
              "meta_relation_1": "is minder dan",
              "relation_2": "-",
              "meta_stim_1_id": "2",
              "meta_relation_2": "is hetzelfde als",
              "meta_stim_2_id": "4",
              "q_stim_1_id": "3",
              "q_rel": "minder dan",
              "q_stim_2_id": "1",
              "correct_response": "no",
              "trial_num": "128"
            }
          ],
          "sample": {
            "mode": "sequential",
            "n": ""
          },
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {

this.state.stimulus_1 = stimulus_1_bucket[Math.random() * stimulus_1_bucket.length | 0];
this.state.stimulus_2 = stimulus_2_bucket[Math.random() * stimulus_2_bucket.length | 0];
this.state.stimulus_3 = stimulus_3_bucket[Math.random() * stimulus_3_bucket.length | 0];
this.state.stimulus_4 = stimulus_4_bucket[Math.random() * stimulus_4_bucket.length | 0];

this.parameters.stim_1 = this.state.stimulus_1
this.parameters.stim_2 = this.state.stimulus_2
this.parameters.stim_3 = this.state.stimulus_3
this.parameters.stim_4 = this.state.stimulus_4
this.parameters.q_stim_1 = this.state.stimulus_1
this.parameters.q_stim_2 = this.state.stimulus_2
this.parameters.q_stim_3 = this.state.stimulus_3
this.parameters.q_stim_4 = this.state.stimulus_4

}
          },
          "title": "trial_list_conjunction",
          "tardy": true,
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "trial_sequence",
            "content": [
              {
                "type": "lab.html.Frame",
                "context": "\u003Chead\u003E\n    \u003Cdiv id='countdown' class='timer_caption'\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Fhead\u003E\n\n\u003Cmain data-labjs-section=\"frame\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n  \u003Ccanvas\u002F\u003E\n\u003C\u002Fmain\u003E",
                "contextSelector": "[data-labjs-section=\"frame\"]",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
time_left = 30;

downloadTimer = setInterval(function(){
  if(time_left <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = "Resterende seconden: " + Math.trunc(time_left);
  }
  time_left -= 1;
}, 1000);


},
                  "after:end": function anonymous(
) {
clearInterval(downloadTimer);
}
                },
                "title": "timer",
                "tardy": true,
                "content": {
                  "type": "lab.canvas.Screen",
                  "content": [
                    {
                      "type": "i-text",
                      "left": 0,
                      "top": -100,
                      "angle": 0,
                      "width": 864.46,
                      "height": 27.12,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "black",
                      "text": "${this.parameters.stim_1} ${this.parameters.relation_1} ${this.parameters.stim_2}",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "24",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    },
                    {
                      "type": "i-text",
                      "left": 0,
                      "top": 150,
                      "angle": 0,
                      "width": 904.49,
                      "height": 27.12,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "black",
                      "text": "Is ${this.parameters.q_stim_1} ${this.parameters.q_rel} ${this.parameters.q_stim_2}?",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "24",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    },
                    {
                      "type": "aoi",
                      "left": -250,
                      "top": 250,
                      "angle": 0,
                      "width": 100,
                      "height": 75,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "rgba(0, 0, 0, 0.2)",
                      "label": "yes"
                    },
                    {
                      "type": "aoi",
                      "left": 250,
                      "top": 250,
                      "angle": 0,
                      "width": 100,
                      "height": 75,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "rgba(0, 0, 0, 0.2)",
                      "label": "no"
                    },
                    {
                      "type": "rect",
                      "left": -250,
                      "top": 250,
                      "angle": 0,
                      "width": 100,
                      "height": 75,
                      "stroke": "#000000",
                      "strokeWidth": 1,
                      "fill": "#a8ca09"
                    },
                    {
                      "type": "rect",
                      "left": 250,
                      "top": 250,
                      "angle": 0,
                      "width": 100,
                      "height": 75,
                      "stroke": "#000000",
                      "strokeWidth": 1,
                      "fill": "#d6341a"
                    },
                    {
                      "type": "i-text",
                      "left": -250,
                      "top": 250,
                      "angle": 0,
                      "width": 56.03,
                      "height": 31.64,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "#ffffff",
                      "text": "JA",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "28",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    },
                    {
                      "type": "i-text",
                      "left": 250,
                      "top": 250,
                      "angle": 0,
                      "width": 42,
                      "height": 31.64,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "#ffffff",
                      "text": "NEE",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "28",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    },
                    {
                      "type": "i-text",
                      "left": 0,
                      "top": -50,
                      "angle": 0,
                      "width": 373.56,
                      "height": 27.12,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "black",
                      "text": "${this.parameters.meta_relation_1}",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "24",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    },
                    {
                      "type": "i-text",
                      "left": 0,
                      "top": -200,
                      "angle": 0,
                      "width": 381.98,
                      "height": 27.12,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "black",
                      "text": "Trial ${parameters.trial_num} of 128",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "24",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    },
                    {
                      "type": "i-text",
                      "left": 0,
                      "top": 0,
                      "angle": 0,
                      "width": 864.46,
                      "height": 27.12,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "black",
                      "text": "${this.parameters.stim_3} ${this.parameters.relation_2} ${this.parameters.stim_4}",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "24",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    },
                    {
                      "type": "i-text",
                      "left": 0,
                      "top": 100,
                      "angle": 0,
                      "width": 1064.57,
                      "height": 27.12,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "black",
                      "text": "${this.parameters.meta_stim_1} ${this.parameters.meta_relation_2} ${this.parameters.meta_stim_2}",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "24",
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    }
                  ],
                  "viewport": [
                    800,
                    600
                  ],
                  "files": {},
                  "responses": {
                    "mousedown @yes": "yes",
                    "mousedown @no": "no"
                  },
                  "parameters": {},
                  "messageHandlers": {
                    "before:prepare": function anonymous(
) {
this.parameters.stim_1 = this.state.stimulus_1
this.parameters.stim_2 = this.state.stimulus_2
this.parameters.stim_3 = this.state.stimulus_3
this.parameters.stim_4 = this.state.stimulus_4
this.parameters.q_stim_1 = this.state.stimulus_1
this.parameters.q_stim_2 = this.state.stimulus_2
this.parameters.q_stim_3 = this.state.stimulus_3
this.parameters.q_stim_4 = this.state.stimulus_4

if (this.parameters.meta_stim_1_id == 1) { 
  this.parameters.meta_stim_1 = this.state.stimulus_1;
} else if (this.parameters.meta_stim_1_id == 2) {
  this.parameters.meta_stim_1 = this.state.stimulus_2;
} else if (this.parameters.meta_stim_1_id == 3) {
  this.parameters.meta_stim_1 = this.state.stimulus_3;
}  else if (this.parameters.meta_stim_1_id == 4) {
  this.parameters.meta_stim_1 = this.state.stimulus_4;
};

if (this.parameters.meta_stim_2_id == 1) { 
  this.parameters.meta_stim_2 = this.state.stimulus_1;
} else if (this.parameters.meta_stim_2_id == 2) {
  this.parameters.meta_stim_2 = this.state.stimulus_2;
} else if (this.parameters.meta_stim_2_id == 3) {
  this.parameters.meta_stim_2 = this.state.stimulus_3;
}  else if (this.parameters.meta_stim_2_id == 4) {
  this.parameters.meta_stim_2 = this.state.stimulus_4;
};


if (this.parameters.q_stim_1_id == 1) { 
  this.parameters.q_stim_1 = this.state.stimulus_1;
} else if (this.parameters.q_stim_1_id == 2) {
  this.parameters.q_stim_1 = this.state.stimulus_2;
} else if (this.parameters.q_stim_1_id == 3) {
  this.parameters.q_stim_1 = this.state.stimulus_3;
} else if (this.parameters.q_stim_1_id == 4) {
  this.parameters.q_stim_1 = this.state.stimulus_4;
};

if (this.parameters.q_stim_2_id == 1) { 
  this.parameters.q_stim_2 = this.state.stimulus_1;
} else if (this.parameters.q_stim_2_id == 2) {
  this.parameters.q_stim_2 = this.state.stimulus_2;
} else if (this.parameters.q_stim_2_id == 3) {
  this.parameters.q_stim_2 = this.state.stimulus_3;
} else if (this.parameters.q_stim_2_id == 4) {
  this.parameters.q_stim_2 = this.state.stimulus_4;
};


},
                    "after:end": function anonymous(
) {
// remove currently used stimuli from buckets
stimulus_1_bucket = stimulus_1_bucket.filter(item => item !== this.state.stimulus_1)
stimulus_2_bucket = stimulus_2_bucket.filter(item => item !== this.state.stimulus_2)
stimulus_3_bucket = stimulus_3_bucket.filter(item => item !== this.state.stimulus_3)
stimulus_4_bucket = stimulus_4_bucket.filter(item => item !== this.state.stimulus_4)

// select the new stimuli for the next trial //
this.state.stimulus_1 = stimulus_1_bucket[Math.random() * stimulus_1_bucket.length | 0];
this.state.stimulus_2 = stimulus_2_bucket[Math.random() * stimulus_2_bucket.length | 0];
this.state.stimulus_3 = stimulus_3_bucket[Math.random() * stimulus_3_bucket.length | 0];
this.state.stimulus_4 = stimulus_4_bucket[Math.random() * stimulus_4_bucket.length | 0];

if (this.state.correct == 1) {
  this.state.total_correct += 1
};
}
                  },
                  "title": "trial",
                  "correctResponse": "${parameters.correct_response}",
                  "tardy": true,
                  "timeout": "31000"
                }
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "iti",
                "timeout": "1000"
              }
            ]
          }
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "Bedankt!",
              "content": "Uw antwoorden zijn opgenomen. U kunt deze pagina nu sluiten."
            },
            {
              "required": true,
              "type": "text",
              "content": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Completion",
          "tardy": true
        }
      ]
    }
  ]
})

// Let's go!
study.run()