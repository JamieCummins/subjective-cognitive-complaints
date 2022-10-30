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
          "type": "text",
          "title": "Hallo!",
          "content": "Bedankt voor je interesse in onze studie. Vooraleer we kunnen starten met de studie, willen we graag dat u een korte vragenlijst invult."
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
      "title": "introduction"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "input",
          "attributes": {
            "type": "email"
          },
          "label": "Wat is uw e-mailadres?",
          "name": "email"
        },
        {
          "required": true,
          "type": "input",
          "label": "Wat is uw leeftijd?",
          "name": "age",
          "attributes": {
            "type": "number",
            "min": "18"
          }
        },
        {
          "required": true,
          "type": "textarea",
          "label": "Welke cognitieve klachten heeft u?",
          "name": "complaints"
        },
        {
          "required": true,
          "type": "input",
          "label": "Sinds wanneer ervaart u deze cognitieve klachten?",
          "help": "",
          "name": "complaints_duration"
        },
        {
          "required": true,
          "type": "textarea",
          "label": "Hebt u een bepaalde neurologische of psychiatrische diagnose?",
          "help": "Als ja, welke?",
          "name": "preexisting_condition"
        },
        {
          "required": true,
          "type": "input",
          "label": "Hebt u ooit een hersenletsel gehad?",
          "name": "brain_injury"
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
      "title": "questions"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Bedankt!",
          "content": "We houden je op de hoogte over het verdere verloop van de studie. Je kan deze pagina nu sluiten."
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
      "title": "thank you"
    }
  ]
})

// Let's go!
study.run()