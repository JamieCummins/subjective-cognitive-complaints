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
  "messageHandlers": {},
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "input",
          "label": "Wat is uw email?",
          "attributes": {
            "type": "email"
          },
          "name": "email"
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
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Hallo en welkom!",
          "content": "U maakt nu een IQ-test. In deze test krijg u afbeeldingen te zien die met een bepaald patroon aan elkaar zijn gekoppeld. Een van deze afbeeldingen zal ontbreken in het patroon. U krijgt verschillende opties te zien om deze afbeeldingen te voltooien. Het is uw taak om de optie te selecteren die het patroon voltooit.\u003Cbr\u003EEnkele belangrijke opmerkingen:\u003Cbr\u003E \u003Cbr\u003E\n\n\u003Cb\u003E1.\u003C\u002Fb\u003E Er is slechts \u003Cu\u003Eéén\u003C\u002Fu\u003E juist antwoord voor elke vraag.\u003Cbr\u003E\n\u003Cb\u003E2.\u003C\u002Fb\u003E Er zijn in totaal 60 patronen en u heeft 45 minuten om alle patronen te beantwoorden. Boven aan het scherm wordt een timer weergegeven om u te laten zien hoeveel tijd u nog heeft.\u003Cbr\u003E\n\u003Cb\u003E3.\u003C\u002Fb\u003E U hoeft NIET alle vragen te beantwoorden. Als u een vraag wilt overslaan, klikt u op \"verzenden\" zonder een optie te selecteren. \u003Cbr\u003E\n\u003Cb\u003E4.\u003C\u002Fb\u003E Als u eenmaal op een optie hebt geklikt en op \"verzenden\" hebt geklikt, krijgt u onmiddellijk het volgende patroon te zien. U kunt uw antwoord niet meer wijzigen naar het vorige patroon.\u003Cbr\u003E"
        },
        {
          "required": true,
          "type": "text",
          "title": "Als u klaar bent, klikt u op \"Start IQ-test\" om te beginnen."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Start IQ test",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Introduction"
    },
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
        "run": function anonymous(
) {
time_left = 2759;
minutes_left = (time_left / 60)

downloadTimer = setInterval(function(){
  if(time_left <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = Math.trunc(minutes_left) + " minuten resterend";
  }
  time_left -= 1;
  minutes_left = (time_left / 60);
}, 1000);

},
        "after:end": function anonymous(
) {
this.state.time_remaining_after_task = time_left
this.state.minutes_remaining_after_task = minutes_left
this.state.minutes_taken = Math.trunc(45 - this.state.minutes_remaining_after_task)


// estimates based on approximate percentiles of IQ and Raven's performance (by age) //
// I have added approximations for all ages //
if (52 >= this.state.age) {
  if (35 >= this.state.total_correct) {
    this.state.estimated_iq = 75;
  }
  else if (41 >= this.state.total_correct) {
    this.state.estimated_iq = 81;
  }
  else if (47 >= this.state.total_correct) {
    this.state.estimated_iq = 90;
  }
  else if (51 >= this.state.total_correct) {
    this.state.estimated_iq = 100;
  }
  else if (56 >= this.state.total_correct) {
    this.state.estimated_iq = 110;
  }
  else if (58 >= this.state.total_correct) {
    this.state.estimated_iq = 119;
  }
  else if (this.state.total_correct > 58) {
    this.state.estimated_iq = 125;
  }
}
else if (57 >= this.state.age) {
  if (31 >= this.state.total_correct) {
    this.state.estimated_iq = 75;
  }
  else if (39 >= this.state.total_correct) {
    this.state.estimated_iq = 81;
  }
  else if (45 >= this.state.total_correct) {
    this.state.estimated_iq = 90;
  }
  else if (50 >= this.state.total_correct) {
    this.state.estimated_iq = 100;
  }
  else if (55 >= this.state.total_correct) {
    this.state.estimated_iq = 110;
  }
  else if (57 >= this.state.total_correct) {
    this.state.estimated_iq = 119;
  }
  else if (this.state.total_correct > 57) {
    this.state.estimated_iq = 125;
  }
}
else if (62 >= this.state.age) {
  if (27 >= this.state.total_correct) {
    this.state.estimated_iq = 75;
  }
  else if (35 >= this.state.total_correct) {
    this.state.estimated_iq = 81;
  }
  else if (43 >= this.state.total_correct) {
    this.state.estimated_iq = 90;
  }
  else if (49 >= this.state.total_correct) {
    this.state.estimated_iq = 100;
  }
  else if (54 >= this.state.total_correct) {
    this.state.estimated_iq = 110;
  }
  else if (56 >= this.state.total_correct) {
    this.state.estimated_iq = 119;
  }
  else if (this.state.total_correct > 56) {
    this.state.estimated_iq = 125;
  }
}
else if (67 >= this.state.age) {
  if (23 >= this.state.total_correct) {
    this.state.estimated_iq = 75;
  }
  else if (31 >= this.state.total_correct) {
    this.state.estimated_iq = 81;
  }
  else if (39 >= this.state.total_correct) {
    this.state.estimated_iq = 90;
  }
  else if (47 >= this.state.total_correct) {
    this.state.estimated_iq = 100;
  }
  else if (53 >= this.state.total_correct) {
    this.state.estimated_iq = 110;
  }
  else if (55 >= this.state.total_correct) {
    this.state.estimated_iq = 119;
  }
  else if (this.state.total_correct > 55) {
    this.state.estimated_iq = 125;
  }
}
else if (this.state.age > 67) {
  if (18 >= this.state.total_correct) {
    this.state.estimated_iq = 75;
  }
  else if (27 >= this.state.total_correct) {
    this.state.estimated_iq = 81;
  }
  else if (35 >= this.state.total_correct) {
    this.state.estimated_iq = 90;
  }
  else if (45 >= this.state.total_correct) {
    this.state.estimated_iq = 100;
  }
  else if (51 >= this.state.total_correct) {
    this.state.estimated_iq = 110;
  }
  else if (53 >= this.state.total_correct) {
    this.state.estimated_iq = 119;
  }
  else if (this.state.total_correct > 54) {
    this.state.estimated_iq = 125;
  }
}


}
      },
      "title": "Frame",
      "timeout": "2700000",
      "tardy": true,
      "content": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {
          "before:prepare": function anonymous(
) {
this.state.total_correct = 0
this.state.estimated_iq = 0
}
        },
        "title": "RPM",
        "content": [
          {
            "type": "lab.flow.Loop",
            "templateParameters": [
              {
                "main_image": "static\u002FA1_00.jpg",
                "option_1": "static\u002FA1_01.jpg",
                "option_2": "static\u002FA1_02.jpg",
                "option_3": "static\u002FA1_03.jpg",
                "option_4": "static\u002FA1_04.jpg",
                "option_5": "static\u002FA1_05.jpg",
                "option_6": "static\u002FA1_06.jpg",
                "option_7": "",
                "option_8": "",
                "trial_num": "1",
                "correct_answer": "4"
              },
              {
                "main_image": "static\u002FA2_00.jpg",
                "option_1": "static\u002FA2_01.jpg",
                "option_2": "static\u002FA2_02.jpg",
                "option_3": "static\u002FA2_03.jpg",
                "option_4": "static\u002FA2_04.jpg",
                "option_5": "static\u002FA2_05.jpg",
                "option_6": "static\u002FA2_06.jpg",
                "option_7": "",
                "option_8": "",
                "trial_num": "2",
                "correct_answer": "5"
              },
              {
                "main_image": "static\u002FA3_00.jpg",
                "option_1": "static\u002FA3_01.jpg",
                "option_2": "static\u002FA3_02.jpg",
                "option_3": "static\u002FA3_03.jpg",
                "option_4": "static\u002FA3_04.jpg",
                "option_5": "static\u002FA3_05.jpg",
                "option_6": "static\u002FA3_06.jpg",
                "option_7": "",
                "option_8": "",
                "trial_num": "3",
                "correct_answer": "1"
              },
              {
                "main_image": "static\u002FA4_00.jpg",
                "option_1": "static\u002FA4_01.jpg",
                "option_2": "static\u002FA4_02.jpg",
                "option_3": "static\u002FA4_03.jpg",
                "option_4": "static\u002FA4_04.jpg",
                "option_5": "static\u002FA4_05.jpg",
                "option_6": "static\u002FA4_06.jpg",
                "option_7": "",
                "option_8": "",
                "trial_num": "4",
                "correct_answer": "2"
              },
              {
                "main_image": "static\u002FA5_00.jpg",
                "option_1": "static\u002FA5_01.jpg",
                "option_2": "static\u002FA5_02.jpg",
                "option_3": "static\u002FA5_03.jpg",
                "option_4": "static\u002FA5_04.jpg",
                "option_5": "static\u002FA5_05.jpg",
                "option_6": "static\u002FA5_06.jpg",
                "option_7": "",
                "option_8": "",
                "trial_num": "5",
                "correct_answer": "6"
              },
              {
                "main_image": "static\u002FA6_00.jpg",
                "option_1": "static\u002FA6_01.jpg",
                "option_2": "static\u002FA6_02.jpg",
                "option_3": "static\u002FA6_03.jpg",
                "option_4": "static\u002FA6_04.jpg",
                "option_5": "static\u002FA6_05.jpg",
                "option_6": "static\u002FA6_06.jpg",
                "option_7": "",
                "option_8": "",
                "trial_num": "6",
                "correct_answer": "3"
              },
              {
                "main_image": "static\u002FA7_00.jpg",
                "option_1": "static\u002FA7_01.jpg",
                "option_2": "static\u002FA7_02.jpg",
                "option_3": "static\u002FA7_03.jpg",
                "option_4": "static\u002FA7_04.jpg",
                "option_5": "static\u002FA7_05.jpg",
                "option_6": "static\u002FA7_06.jpg",
                "option_7": "",
                "option_8": "",
                "trial_num": "7",
                "correct_answer": "6"
              },
              {
                "main_image": "static\u002FA8_00.jpg",
                "option_1": "static\u002FA8_01.jpg",
                "option_2": "static\u002FA8_02.jpg",
                "option_3": "static\u002FA8_03.jpg",
                "option_4": "static\u002FA8_04.jpg",
                "option_5": "static\u002FA8_05.jpg",
                "option_6": "static\u002FA8_06.jpg",
                "option_7": "",
                "option_8": "",
                "trial_num": "8",
                "correct_answer": "2"
              },
              {
                "main_image": "static\u002FA9_00.jpg",
                "option_1": "static\u002FA9_01.jpg",
                "option_2": "static\u002FA9_02.jpg",
                "option_3": "static\u002FA9_03.jpg",
                "option_4": "static\u002FA9_04.jpg",
                "option_5": "static\u002FA9_05.jpg",
                "option_6": "static\u002FA9_06.jpg",
                "option_7": "",
                "option_8": "",
                "trial_num": "9",
                "correct_answer": "1"
              },
              {
                "main_image": "static\u002FA10_00.jpg",
                "option_1": "static\u002FA10_01.jpg",
                "option_2": "static\u002FA10_02.jpg",
                "option_3": "static\u002FA10_03.jpg",
                "option_4": "static\u002FA10_04.jpg",
                "option_5": "static\u002FA10_05.jpg",
                "option_6": "static\u002FA10_06.jpg",
                "option_7": "",
                "option_8": "",
                "trial_num": "10",
                "correct_answer": "3"
              },
              {
                "main_image": "static\u002FA11_00.jpg",
                "option_1": "static\u002FA11_01.jpg",
                "option_2": "static\u002FA11_02.jpg",
                "option_3": "static\u002FA11_03.jpg",
                "option_4": "static\u002FA11_04.jpg",
                "option_5": "static\u002FA11_05.jpg",
                "option_6": "static\u002FA11_06.jpg",
                "option_7": "",
                "option_8": "",
                "trial_num": "11",
                "correct_answer": "4"
              },
              {
                "main_image": "static\u002FA12_00.jpg",
                "option_1": "static\u002FA12_01.jpg",
                "option_2": "static\u002FA12_02.jpg",
                "option_3": "static\u002FA12_03.jpg",
                "option_4": "static\u002FA12_04.jpg",
                "option_5": "static\u002FA12_05.jpg",
                "option_6": "static\u002FA12_06.jpg",
                "option_7": "",
                "option_8": "",
                "trial_num": "12",
                "correct_answer": "5"
              }
            ],
            "sample": {
              "mode": "sequential",
              "n": ""
            },
            "files": {
              "_00.jpg": "embedded\u002F4124fa530db7df6ff19d0c42ffb7d4ffcf3ae36606cd822c17a6edb290eed71e.jpg",
              "_01.jpg": "embedded\u002F10420f2d656f8f33bde4fa6ecb659cfb104635421a393c88fc812d2e1182b247.jpg",
              "_02.jpg": "embedded\u002F3b5db79af6baef019d4c2878aff4e93667f6604accdb2f895a650b6645eec3ac.jpg",
              "_03.jpg": "embedded\u002Fe03456c94e0d953d0869d8a6871462e2dc6954835220d31b835ce5f7bde4a390.jpg",
              "_04.jpg": "embedded\u002F8ceff0d7074f7dcfecdc23e4c4fc943f6cae35c5feb9084670f94233deea98cc.jpg",
              "_05.jpg": "embedded\u002F0c9953ec33efa3f8ec9b64f259ec3f99eb5bbfb0fdf053b41f46f0b32bdbcd18.jpg",
              "_06.jpg": "embedded\u002F4c5de24ec5960665cd55c4b912ad9744a970513cf543785cd844b6fa7cf0faa1.jpg"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "block1",
            "shuffleGroups": [],
            "template": {
              "type": "lab.html.Form",
              "content": "\n \u003Cmain\u003E\n   \n \u003Ch3\u003EMatrix ${parameters.trial_num}:\u003C\u002Fh3\u003E\n\n\u003Cimg src=\"${parameters.main_image}\"\u003E\n\u003Cbr\u003E\n\u003Cbr\u003E\n\n\u003Cform id=\"response\"\u003E\n\u003Cinput type=\"radio\" value=\"1\" id=\"resp_1\" name=\"response\"\u003E\n\u003Clabel for=\"resp_1\"\u003E \n  \u003Cimg src=\"${parameters.option_1}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n\u003C\u002Flabel\u003E\n\n\u003Cinput type=\"radio\" value=\"2\" id=\"resp_2\" name=\"response\"\u003E\n\u003Clabel for=\"resp_2\"\u003E  \n  \u003Cimg src=\"${parameters.option_2}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n  \u003C\u002Flabel\u003E\n\n\u003Cinput type=\"radio\" value=\"3\" id=\"resp_3\" name=\"response\"\u003E\n\u003Clabel for=\"resp_3\"\u003E\n    \u003Cimg src=\"${parameters.option_3}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n    \u003C\u002Flabel\u003E\u003Cbr\u003E\n\n\u003Cinput type=\"radio\" value=\"4\" id=\"resp_4\" name=\"response\"\u003E\n\u003Clabel for=\"resp_4\"\u003E\n    \u003Cimg src=\"${parameters.option_4}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n    \u003C\u002Flabel\u003E\n\n\u003Cinput type=\"radio\" value=\"5\" id=\"resp_5\" name=\"response\"\u003E\n\u003Clabel for=\"resp_5\"\u003E\n    \u003Cimg src=\"${parameters.option_5}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n    \u003C\u002Flabel\u003E\n\n\u003Cinput type=\"radio\" value=\"6\" id=\"resp_6\" name=\"response\"\u003E\n\u003Clabel for=\"resp_6\"\u003E  \u003Cimg src=\"${parameters.option_6}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n\u003C\u002Flabel\u003E\u003Cbr\u003E \n\u003C\u002Fform\u003E \n \u003C\u002Fmain\u003E\n\n \u003Cfooter\u003E\n\u003Cbutton type=\"submit\" form=\"response\"\u003ESubmit\u003C\u002Fbutton\u003E\n \u003C\u002Ffooter\u003E\n   ",
              "scrollTop": true,
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "after:end": function anonymous(
) {
if(this.state.response === this.state.correct_answer) {
  this.state.total_correct += 1
}

this.state.response = "0"
}
              },
              "title": "trials"
            }
          },
          {
            "type": "lab.flow.Loop",
            "templateParameters": [
              {
                "main_image": "static\u002FB1_00.jpg",
                "option_1": "static\u002FB1_01.jpg",
                "option_2": "static\u002FB1_02.jpg",
                "option_3": "static\u002FB1_03.jpg",
                "option_4": "static\u002FB1_04.jpg",
                "option_5": "static\u002FB1_05.jpg",
                "option_6": "static\u002FB1_06.jpg",
                "option_7": "",
                "option_8": "",
                "trial_num": "13",
                "correct_answer": "2"
              },
              {
                "main_image": "static\u002FB2_00.jpg",
                "option_1": "static\u002FB2_01.jpg",
                "option_2": "static\u002FB2_02.jpg",
                "option_3": "static\u002FB2_03.jpg",
                "option_4": "static\u002FB2_04.jpg",
                "option_5": "static\u002FB2_05.jpg",
                "option_6": "static\u002FB2_06.jpg",
                "option_7": "",
                "option_8": "",
                "trial_num": "14",
                "correct_answer": "6"
              },
              {
                "main_image": "static\u002FB3_00.jpg",
                "option_1": "static\u002FB3_01.jpg",
                "option_2": "static\u002FB3_02.jpg",
                "option_3": "static\u002FB3_03.jpg",
                "option_4": "static\u002FB3_04.jpg",
                "option_5": "static\u002FB3_05.jpg",
                "option_6": "static\u002FB3_06.jpg",
                "option_7": "",
                "option_8": "",
                "trial_num": "15",
                "correct_answer": "1"
              },
              {
                "main_image": "static\u002FB4_00.jpg",
                "option_1": "static\u002FB4_01.jpg",
                "option_2": "static\u002FB4_02.jpg",
                "option_3": "static\u002FB4_03.jpg",
                "option_4": "static\u002FB4_04.jpg",
                "option_5": "static\u002FB4_05.jpg",
                "option_6": "static\u002FB4_06.jpg",
                "option_7": "",
                "option_8": "",
                "trial_num": "16",
                "correct_answer": "2"
              },
              {
                "main_image": "static\u002FB5_00.jpg",
                "option_1": "static\u002FB5_01.jpg",
                "option_2": "static\u002FB5_02.jpg",
                "option_3": "static\u002FB5_03.jpg",
                "option_4": "static\u002FB5_04.jpg",
                "option_5": "static\u002FB5_05.jpg",
                "option_6": "static\u002FB5_06.jpg",
                "option_7": "",
                "option_8": "",
                "trial_num": "17",
                "correct_answer": "1"
              },
              {
                "main_image": "static\u002FB6_00.jpg",
                "option_1": "static\u002FB6_01.jpg",
                "option_2": "static\u002FB6_02.jpg",
                "option_3": "static\u002FB6_03.jpg",
                "option_4": "static\u002FB6_04.jpg",
                "option_5": "static\u002FB6_05.jpg",
                "option_6": "static\u002FB6_06.jpg",
                "option_7": "",
                "option_8": "",
                "trial_num": "18",
                "correct_answer": "3"
              },
              {
                "main_image": "static\u002FB7_00.jpg",
                "option_1": "static\u002FB7_01.jpg",
                "option_2": "static\u002FB7_02.jpg",
                "option_3": "static\u002FB7_03.jpg",
                "option_4": "static\u002FB7_04.jpg",
                "option_5": "static\u002FB7_05.jpg",
                "option_6": "static\u002FB7_06.jpg",
                "option_7": "",
                "option_8": "",
                "trial_num": "19",
                "correct_answer": "5"
              },
              {
                "main_image": "static\u002FB8_00.jpg",
                "option_1": "static\u002FB8_01.jpg",
                "option_2": "static\u002FB8_02.jpg",
                "option_3": "static\u002FB8_03.jpg",
                "option_4": "static\u002FB8_04.jpg",
                "option_5": "static\u002FB8_05.jpg",
                "option_6": "static\u002FB8_06.jpg",
                "option_7": "",
                "option_8": "",
                "trial_num": "20",
                "correct_answer": "6"
              },
              {
                "main_image": "static\u002FB9_00.jpg",
                "option_1": "static\u002FB9_01.jpg",
                "option_2": "static\u002FB9_02.jpg",
                "option_3": "static\u002FB9_03.jpg",
                "option_4": "static\u002FB9_04.jpg",
                "option_5": "static\u002FB9_05.jpg",
                "option_6": "static\u002FB9_06.jpg",
                "option_7": "",
                "option_8": "",
                "trial_num": "21",
                "correct_answer": "4"
              },
              {
                "main_image": "static\u002FB10_00.jpg",
                "option_1": "static\u002FB10_01.jpg",
                "option_2": "static\u002FB10_02.jpg",
                "option_3": "static\u002FB10_03.jpg",
                "option_4": "static\u002FB10_04.jpg",
                "option_5": "static\u002FB10_05.jpg",
                "option_6": "static\u002FB10_06.jpg",
                "option_7": "",
                "option_8": "",
                "trial_num": "22",
                "correct_answer": "3"
              },
              {
                "main_image": "static\u002FB11_00.jpg",
                "option_1": "static\u002FB11_01.jpg",
                "option_2": "static\u002FB11_02.jpg",
                "option_3": "static\u002FB11_03.jpg",
                "option_4": "static\u002FB11_04.jpg",
                "option_5": "static\u002FB11_05.jpg",
                "option_6": "static\u002FB11_06.jpg",
                "option_7": "",
                "option_8": "",
                "trial_num": "23",
                "correct_answer": "4"
              },
              {
                "main_image": "static\u002FB12_00.jpg",
                "option_1": "static\u002FB12_01.jpg",
                "option_2": "static\u002FB12_02.jpg",
                "option_3": "static\u002FB12_03.jpg",
                "option_4": "static\u002FB12_04.jpg",
                "option_5": "static\u002FB12_05.jpg",
                "option_6": "static\u002FB12_06.jpg",
                "option_7": "",
                "option_8": "",
                "trial_num": "24",
                "correct_answer": "5"
              }
            ],
            "sample": {
              "mode": "sequential",
              "n": ""
            },
            "files": {
              "_00.jpg": "embedded\u002F4124fa530db7df6ff19d0c42ffb7d4ffcf3ae36606cd822c17a6edb290eed71e.jpg",
              "_01.jpg": "embedded\u002F10420f2d656f8f33bde4fa6ecb659cfb104635421a393c88fc812d2e1182b247.jpg",
              "_02.jpg": "embedded\u002F3b5db79af6baef019d4c2878aff4e93667f6604accdb2f895a650b6645eec3ac.jpg",
              "_03.jpg": "embedded\u002Fe03456c94e0d953d0869d8a6871462e2dc6954835220d31b835ce5f7bde4a390.jpg",
              "_04.jpg": "embedded\u002F8ceff0d7074f7dcfecdc23e4c4fc943f6cae35c5feb9084670f94233deea98cc.jpg",
              "_05.jpg": "embedded\u002F0c9953ec33efa3f8ec9b64f259ec3f99eb5bbfb0fdf053b41f46f0b32bdbcd18.jpg",
              "_06.jpg": "embedded\u002F4c5de24ec5960665cd55c4b912ad9744a970513cf543785cd844b6fa7cf0faa1.jpg"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "block2",
            "shuffleGroups": [],
            "template": {
              "type": "lab.html.Form",
              "content": "\n \u003Cmain\u003E\n   \n \u003Ch3\u003EMatrix ${parameters.trial_num}:\u003C\u002Fh3\u003E\n\n\u003Cimg src=\"${parameters.main_image}\"\u003E\n\u003Cbr\u003E\n\u003Cbr\u003E\n\n\u003Cform id=\"response\"\u003E\n\u003Cinput type=\"radio\" value=\"1\" id=\"resp_1\" name=\"response\"\u003E\n\u003Clabel for=\"resp_1\"\u003E \n  \u003Cimg src=\"${parameters.option_1}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n\u003C\u002Flabel\u003E\n\n\u003Cinput type=\"radio\" value=\"2\" id=\"resp_2\" name=\"response\"\u003E\n\u003Clabel for=\"resp_2\"\u003E  \n  \u003Cimg src=\"${parameters.option_2}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n  \u003C\u002Flabel\u003E\n\n\u003Cinput type=\"radio\" value=\"3\" id=\"resp_3\" name=\"response\"\u003E\n\u003Clabel for=\"resp_3\"\u003E\n    \u003Cimg src=\"${parameters.option_3}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n    \u003C\u002Flabel\u003E\u003Cbr\u003E\n\n\u003Cinput type=\"radio\" value=\"4\" id=\"resp_4\" name=\"response\"\u003E\n\u003Clabel for=\"resp_4\"\u003E\n    \u003Cimg src=\"${parameters.option_4}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n    \u003C\u002Flabel\u003E\n\n\u003Cinput type=\"radio\" value=\"5\" id=\"resp_5\" name=\"response\"\u003E\n\u003Clabel for=\"resp_5\"\u003E\n    \u003Cimg src=\"${parameters.option_5}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n    \u003C\u002Flabel\u003E\n\n\u003Cinput type=\"radio\" value=\"6\" id=\"resp_6\" name=\"response\"\u003E\n\u003Clabel for=\"resp_6\"\u003E  \u003Cimg src=\"${parameters.option_6}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n\u003C\u002Flabel\u003E\u003Cbr\u003E \n\u003C\u002Fform\u003E \n \u003C\u002Fmain\u003E\n\n \u003Cfooter\u003E\n\u003Cbutton type=\"submit\" form=\"response\"\u003ESubmit\u003C\u002Fbutton\u003E\n \u003C\u002Ffooter\u003E\n   ",
              "scrollTop": true,
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "after:end": function anonymous(
) {
if(this.state.response === this.state.correct_answer) {
  this.state.total_correct += 1
}


this.state.response = "0"
}
              },
              "title": "trials"
            }
          },
          {
            "type": "lab.flow.Loop",
            "templateParameters": [
              {
                "main_image": "static\u002FC1_00.jpg",
                "option_1": "static\u002FC1_01.jpg",
                "option_2": "static\u002FC1_02.jpg",
                "option_3": "static\u002FC1_03.jpg",
                "option_4": "static\u002FC1_04.jpg",
                "option_5": "static\u002FC1_05.jpg",
                "option_6": "static\u002FC1_06.jpg",
                "option_7": "static\u002FC1_07.jpg",
                "option_8": "static\u002FC1_08.jpg",
                "trial_num": "25",
                "correct_answer": "8"
              },
              {
                "main_image": "static\u002FC2_00.jpg",
                "option_1": "static\u002FC2_01.jpg",
                "option_2": "static\u002FC2_02.jpg",
                "option_3": "static\u002FC2_03.jpg",
                "option_4": "static\u002FC2_04.jpg",
                "option_5": "static\u002FC2_05.jpg",
                "option_6": "static\u002FC2_06.jpg",
                "option_7": "static\u002FC2_07.jpg",
                "option_8": "static\u002FC2_08.jpg",
                "trial_num": "26",
                "correct_answer": "2"
              },
              {
                "main_image": "static\u002FC3_00.jpg",
                "option_1": "static\u002FC3_01.jpg",
                "option_2": "static\u002FC3_02.jpg",
                "option_3": "static\u002FC3_03.jpg",
                "option_4": "static\u002FC3_04.jpg",
                "option_5": "static\u002FC3_05.jpg",
                "option_6": "static\u002FC3_06.jpg",
                "option_7": "static\u002FC3_07.jpg",
                "option_8": "static\u002FC3_08.jpg",
                "trial_num": "27",
                "correct_answer": "3"
              },
              {
                "main_image": "static\u002FC4_00.jpg",
                "option_1": "static\u002FC4_01.jpg",
                "option_2": "static\u002FC4_02.jpg",
                "option_3": "static\u002FC4_03.jpg",
                "option_4": "static\u002FC4_04.jpg",
                "option_5": "static\u002FC4_05.jpg",
                "option_6": "static\u002FC4_06.jpg",
                "option_7": "static\u002FC4_07.jpg",
                "option_8": "static\u002FC4_08.jpg",
                "trial_num": "28",
                "correct_answer": "8"
              },
              {
                "main_image": "static\u002FC5_00.jpg",
                "option_1": "static\u002FC5_01.jpg",
                "option_2": "static\u002FC5_02.jpg",
                "option_3": "static\u002FC5_03.jpg",
                "option_4": "static\u002FC5_04.jpg",
                "option_5": "static\u002FC5_05.jpg",
                "option_6": "static\u002FC5_06.jpg",
                "option_7": "static\u002FC5_07.jpg",
                "option_8": "static\u002FC5_08.jpg",
                "trial_num": "29",
                "correct_answer": "7"
              },
              {
                "main_image": "static\u002FC6_00.jpg",
                "option_1": "static\u002FC6_01.jpg",
                "option_2": "static\u002FC6_02.jpg",
                "option_3": "static\u002FC6_03.jpg",
                "option_4": "static\u002FC6_04.jpg",
                "option_5": "static\u002FC6_05.jpg",
                "option_6": "static\u002FC6_06.jpg",
                "option_7": "static\u002FC6_07.jpg",
                "option_8": "static\u002FC6_08.jpg",
                "trial_num": "30",
                "correct_answer": "4"
              },
              {
                "main_image": "static\u002FC7_00.jpg",
                "option_1": "static\u002FC7_01.jpg",
                "option_2": "static\u002FC7_02.jpg",
                "option_3": "static\u002FC7_03.jpg",
                "option_4": "static\u002FC7_04.jpg",
                "option_5": "static\u002FC7_05.jpg",
                "option_6": "static\u002FC7_06.jpg",
                "option_7": "static\u002FC7_07.jpg",
                "option_8": "static\u002FC7_08.jpg",
                "trial_num": "31",
                "correct_answer": "5"
              },
              {
                "main_image": "static\u002FC8_00.jpg",
                "option_1": "static\u002FC8_01.jpg",
                "option_2": "static\u002FC8_02.jpg",
                "option_3": "static\u002FC8_03.jpg",
                "option_4": "static\u002FC8_04.jpg",
                "option_5": "static\u002FC8_05.jpg",
                "option_6": "static\u002FC8_06.jpg",
                "option_7": "static\u002FC8_07.jpg",
                "option_8": "static\u002FC8_08.jpg",
                "trial_num": "32",
                "correct_answer": "1"
              },
              {
                "main_image": "static\u002FC9_00.jpg",
                "option_1": "static\u002FC9_01.jpg",
                "option_2": "static\u002FC9_02.jpg",
                "option_3": "static\u002FC9_03.jpg",
                "option_4": "static\u002FC9_04.jpg",
                "option_5": "static\u002FC9_05.jpg",
                "option_6": "static\u002FC9_06.jpg",
                "option_7": "static\u002FC9_07.jpg",
                "option_8": "static\u002FC9_08.jpg",
                "trial_num": "33",
                "correct_answer": "7"
              },
              {
                "main_image": "static\u002FC10_00.jpg",
                "option_1": "static\u002FC10_01.jpg",
                "option_2": "static\u002FC10_02.jpg",
                "option_3": "static\u002FC10_03.jpg",
                "option_4": "static\u002FC10_04.jpg",
                "option_5": "static\u002FC10_05.jpg",
                "option_6": "static\u002FC10_06.jpg",
                "option_7": "static\u002FC10_07.jpg",
                "option_8": "static\u002FC10_08.jpg",
                "trial_num": "34",
                "correct_answer": "6"
              },
              {
                "main_image": "static\u002FC11_00.jpg",
                "option_1": "static\u002FC11_01.jpg",
                "option_2": "static\u002FC11_02.jpg",
                "option_3": "static\u002FC11_03.jpg",
                "option_4": "static\u002FC11_04.jpg",
                "option_5": "static\u002FC11_05.jpg",
                "option_6": "static\u002FC11_06.jpg",
                "option_7": "static\u002FC11_07.jpg",
                "option_8": "static\u002FC11_08.jpg",
                "trial_num": "35",
                "correct_answer": "1"
              },
              {
                "main_image": "static\u002FC12_00.jpg",
                "option_1": "static\u002FC12_01.jpg",
                "option_2": "static\u002FC12_02.jpg",
                "option_3": "static\u002FC12_03.jpg",
                "option_4": "static\u002FC12_04.jpg",
                "option_5": "static\u002FC12_05.jpg",
                "option_6": "static\u002FC12_06.jpg",
                "option_7": "static\u002FC12_07.jpg",
                "option_8": "static\u002FC12_08.jpg",
                "trial_num": "36",
                "correct_answer": "2"
              }
            ],
            "sample": {
              "mode": "sequential",
              "n": ""
            },
            "files": {
              "_00.jpg": "embedded\u002F4124fa530db7df6ff19d0c42ffb7d4ffcf3ae36606cd822c17a6edb290eed71e.jpg",
              "_01.jpg": "embedded\u002F10420f2d656f8f33bde4fa6ecb659cfb104635421a393c88fc812d2e1182b247.jpg",
              "_02.jpg": "embedded\u002F3b5db79af6baef019d4c2878aff4e93667f6604accdb2f895a650b6645eec3ac.jpg",
              "_03.jpg": "embedded\u002Fe03456c94e0d953d0869d8a6871462e2dc6954835220d31b835ce5f7bde4a390.jpg",
              "_04.jpg": "embedded\u002F8ceff0d7074f7dcfecdc23e4c4fc943f6cae35c5feb9084670f94233deea98cc.jpg",
              "_05.jpg": "embedded\u002F0c9953ec33efa3f8ec9b64f259ec3f99eb5bbfb0fdf053b41f46f0b32bdbcd18.jpg",
              "_06.jpg": "embedded\u002F4c5de24ec5960665cd55c4b912ad9744a970513cf543785cd844b6fa7cf0faa1.jpg"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "block3",
            "shuffleGroups": [],
            "template": {
              "type": "lab.html.Form",
              "content": "\n \u003Cmain\u003E\n   \n \u003Ch3\u003EMatrix ${parameters.trial_num}:\u003C\u002Fh3\u003E\n\n\u003Cimg src=\"${parameters.main_image}\"\u003E\n\u003Cbr\u003E\n\u003Cbr\u003E\n\n\u003Cform id=\"response\"\u003E\n\u003Cinput type=\"radio\" value=\"1\" id=\"resp_1\" name=\"response\"\u003E\n\u003Clabel for=\"resp_1\"\u003E \n  \u003Cimg src=\"${parameters.option_1}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n\u003C\u002Flabel\u003E\n\n\u003Cinput type=\"radio\" value=\"2\" id=\"resp_2\" name=\"response\"\u003E\n\u003Clabel for=\"resp_2\"\u003E  \n  \u003Cimg src=\"${parameters.option_2}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n  \u003C\u002Flabel\u003E\n\n\u003Cinput type=\"radio\" value=\"3\" id=\"resp_3\" name=\"response\"\u003E\n\u003Clabel for=\"resp_3\"\u003E\n    \u003Cimg src=\"${parameters.option_3}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n    \u003C\u002Flabel\u003E\n\n\u003Cinput type=\"radio\" value=\"4\" id=\"resp_4\" name=\"response\"\u003E\n\u003Clabel for=\"resp_4\"\u003E\n    \u003Cimg src=\"${parameters.option_4}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n    \u003C\u002Flabel\u003E\u003Cbr\u003E\n\n\u003Cinput type=\"radio\" value=\"5\" id=\"resp_5\" name=\"response\"\u003E\n\u003Clabel for=\"resp_5\"\u003E\n    \u003Cimg src=\"${parameters.option_5}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n    \u003C\u002Flabel\u003E\n\n\u003Cinput type=\"radio\" value=\"6\" id=\"resp_6\" name=\"response\"\u003E\n\u003Clabel for=\"resp_6\"\u003E  \u003Cimg src=\"${parameters.option_6}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n\u003C\u002Flabel\u003E\n\n\u003Cinput type=\"radio\" value=\"7\" id=\"resp_7\" name=\"response\"\u003E\n\u003Clabel for=\"resp_7\"\u003E  \u003Cimg src=\"${parameters.option_7}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n\u003C\u002Flabel\u003E\n\n\u003Cinput type=\"radio\" value=\"8\" id=\"resp_8\" name=\"response\"\u003E\n\u003Clabel for=\"resp_8\"\u003E  \u003Cimg src=\"${parameters.option_8}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n\u003C\u002Flabel\u003E\u003Cbr\u003E \n\u003C\u002Fform\u003E \n \u003C\u002Fmain\u003E\n\n \u003Cfooter\u003E\n\u003Cbutton type=\"submit\" form=\"response\"\u003ESubmit\u003C\u002Fbutton\u003E\n \u003C\u002Ffooter\u003E\n   ",
              "scrollTop": true,
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "after:end": function anonymous(
) {
if(this.state.response === this.state.correct_answer) {
  this.state.total_correct += 1
}


this.state.response = "0"
}
              },
              "title": "trials"
            }
          },
          {
            "type": "lab.flow.Loop",
            "templateParameters": [
              {
                "main_image": "static\u002FD1_00.jpg",
                "option_1": "static\u002FD1_01.jpg",
                "option_2": "static\u002FD1_02.jpg",
                "option_3": "static\u002FD1_03.jpg",
                "option_4": "static\u002FD1_04.jpg",
                "option_5": "static\u002FD1_05.jpg",
                "option_6": "static\u002FD1_06.jpg",
                "option_7": "static\u002FD1_07.jpg",
                "option_8": "static\u002FD1_08.jpg",
                "trial_num": "37",
                "correct_answer": "3"
              },
              {
                "main_image": "static\u002FD2_00.jpg",
                "option_1": "static\u002FD2_01.jpg",
                "option_2": "static\u002FD2_02.jpg",
                "option_3": "static\u002FD2_03.jpg",
                "option_4": "static\u002FD2_04.jpg",
                "option_5": "static\u002FD2_05.jpg",
                "option_6": "static\u002FD2_06.jpg",
                "option_7": "static\u002FD2_07.jpg",
                "option_8": "static\u002FD2_08.jpg",
                "trial_num": "38",
                "correct_answer": "4"
              },
              {
                "main_image": "static\u002FD3_00.jpg",
                "option_1": "static\u002FD3_01.jpg",
                "option_2": "static\u002FD3_02.jpg",
                "option_3": "static\u002FD3_03.jpg",
                "option_4": "static\u002FD3_04.jpg",
                "option_5": "static\u002FD3_05.jpg",
                "option_6": "static\u002FD3_06.jpg",
                "option_7": "static\u002FD3_07.jpg",
                "option_8": "static\u002FD3_08.jpg",
                "trial_num": "39",
                "correct_answer": "3"
              },
              {
                "main_image": "static\u002FD4_00.jpg",
                "option_1": "static\u002FD4_01.jpg",
                "option_2": "static\u002FD4_02.jpg",
                "option_3": "static\u002FD4_03.jpg",
                "option_4": "static\u002FD4_04.jpg",
                "option_5": "static\u002FD4_05.jpg",
                "option_6": "static\u002FD4_06.jpg",
                "option_7": "static\u002FD4_07.jpg",
                "option_8": "static\u002FD4_08.jpg",
                "trial_num": "40",
                "correct_answer": "7"
              },
              {
                "main_image": "static\u002FD5_00.jpg",
                "option_1": "static\u002FD5_01.jpg",
                "option_2": "static\u002FD5_02.jpg",
                "option_3": "static\u002FD5_03.jpg",
                "option_4": "static\u002FD5_04.jpg",
                "option_5": "static\u002FD5_05.jpg",
                "option_6": "static\u002FD5_06.jpg",
                "option_7": "static\u002FD5_07.jpg",
                "option_8": "static\u002FD5_08.jpg",
                "trial_num": "41",
                "correct_answer": "8"
              },
              {
                "main_image": "static\u002FD6_00.jpg",
                "option_1": "static\u002FD6_01.jpg",
                "option_2": "static\u002FD6_02.jpg",
                "option_3": "static\u002FD6_03.jpg",
                "option_4": "static\u002FD6_04.jpg",
                "option_5": "static\u002FD6_05.jpg",
                "option_6": "static\u002FD6_06.jpg",
                "option_7": "static\u002FD6_07.jpg",
                "option_8": "static\u002FD6_08.jpg",
                "trial_num": "42",
                "correct_answer": "6"
              },
              {
                "main_image": "static\u002FD7_00.jpg",
                "option_1": "static\u002FD7_01.jpg",
                "option_2": "static\u002FD7_02.jpg",
                "option_3": "static\u002FD7_03.jpg",
                "option_4": "static\u002FD7_04.jpg",
                "option_5": "static\u002FD7_05.jpg",
                "option_6": "static\u002FD7_06.jpg",
                "option_7": "static\u002FD7_07.jpg",
                "option_8": "static\u002FD7_08.jpg",
                "trial_num": "43",
                "correct_answer": "5"
              },
              {
                "main_image": "static\u002FD8_00.jpg",
                "option_1": "static\u002FD8_01.jpg",
                "option_2": "static\u002FD8_02.jpg",
                "option_3": "static\u002FD8_03.jpg",
                "option_4": "static\u002FD8_04.jpg",
                "option_5": "static\u002FD8_05.jpg",
                "option_6": "static\u002FD8_06.jpg",
                "option_7": "static\u002FD8_07.jpg",
                "option_8": "static\u002FD8_08.jpg",
                "trial_num": "44",
                "correct_answer": "4"
              },
              {
                "main_image": "static\u002FD9_00.jpg",
                "option_1": "static\u002FD9_01.jpg",
                "option_2": "static\u002FD9_02.jpg",
                "option_3": "static\u002FD9_03.jpg",
                "option_4": "static\u002FD9_04.jpg",
                "option_5": "static\u002FD9_05.jpg",
                "option_6": "static\u002FD9_06.jpg",
                "option_7": "static\u002FD9_07.jpg",
                "option_8": "static\u002FD9_08.jpg",
                "trial_num": "45",
                "correct_answer": "1"
              },
              {
                "main_image": "static\u002FD10_00.jpg",
                "option_1": "static\u002FD10_01.jpg",
                "option_2": "static\u002FD10_02.jpg",
                "option_3": "static\u002FD10_03.jpg",
                "option_4": "static\u002FD10_04.jpg",
                "option_5": "static\u002FD10_05.jpg",
                "option_6": "static\u002FD10_06.jpg",
                "option_7": "static\u002FD10_07.jpg",
                "option_8": "static\u002FD10_08.jpg",
                "trial_num": "46",
                "correct_answer": "2"
              },
              {
                "main_image": "static\u002FD11_00.jpg",
                "option_1": "static\u002FD11_01.jpg",
                "option_2": "static\u002FD11_02.jpg",
                "option_3": "static\u002FD11_03.jpg",
                "option_4": "static\u002FD11_04.jpg",
                "option_5": "static\u002FD11_05.jpg",
                "option_6": "static\u002FD11_06.jpg",
                "option_7": "static\u002FD11_07.jpg",
                "option_8": "static\u002FD11_08.jpg",
                "trial_num": "47",
                "correct_answer": "5"
              },
              {
                "main_image": "static\u002FD12_00.jpg",
                "option_1": "static\u002FD12_01.jpg",
                "option_2": "static\u002FD12_02.jpg",
                "option_3": "static\u002FD12_03.jpg",
                "option_4": "static\u002FD12_04.jpg",
                "option_5": "static\u002FD12_05.jpg",
                "option_6": "static\u002FD12_06.jpg",
                "option_7": "static\u002FD12_07.jpg",
                "option_8": "static\u002FD12_08.jpg",
                "trial_num": "48",
                "correct_answer": "6"
              }
            ],
            "sample": {
              "mode": "sequential",
              "n": ""
            },
            "files": {
              "_00.jpg": "embedded\u002F4124fa530db7df6ff19d0c42ffb7d4ffcf3ae36606cd822c17a6edb290eed71e.jpg",
              "_01.jpg": "embedded\u002F10420f2d656f8f33bde4fa6ecb659cfb104635421a393c88fc812d2e1182b247.jpg",
              "_02.jpg": "embedded\u002F3b5db79af6baef019d4c2878aff4e93667f6604accdb2f895a650b6645eec3ac.jpg",
              "_03.jpg": "embedded\u002Fe03456c94e0d953d0869d8a6871462e2dc6954835220d31b835ce5f7bde4a390.jpg",
              "_04.jpg": "embedded\u002F8ceff0d7074f7dcfecdc23e4c4fc943f6cae35c5feb9084670f94233deea98cc.jpg",
              "_05.jpg": "embedded\u002F0c9953ec33efa3f8ec9b64f259ec3f99eb5bbfb0fdf053b41f46f0b32bdbcd18.jpg",
              "_06.jpg": "embedded\u002F4c5de24ec5960665cd55c4b912ad9744a970513cf543785cd844b6fa7cf0faa1.jpg"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "block4",
            "shuffleGroups": [],
            "template": {
              "type": "lab.html.Form",
              "content": "\n \u003Cmain\u003E\n   \n \u003Ch3\u003EMatrix ${parameters.trial_num}:\u003C\u002Fh3\u003E\n\n\u003Cimg src=\"${parameters.main_image}\"\u003E\n\u003Cbr\u003E\n\u003Cbr\u003E\n\n\u003Cform id=\"response\"\u003E\n\u003Cinput type=\"radio\" value=\"1\" id=\"resp_1\" name=\"response\"\u003E\n\u003Clabel for=\"resp_1\"\u003E \n  \u003Cimg src=\"${parameters.option_1}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n\u003C\u002Flabel\u003E\n\n\u003Cinput type=\"radio\" value=\"2\" id=\"resp_2\" name=\"response\"\u003E\n\u003Clabel for=\"resp_2\"\u003E  \n  \u003Cimg src=\"${parameters.option_2}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n  \u003C\u002Flabel\u003E\n\n\u003Cinput type=\"radio\" value=\"3\" id=\"resp_3\" name=\"response\"\u003E\n\u003Clabel for=\"resp_3\"\u003E\n    \u003Cimg src=\"${parameters.option_3}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n    \u003C\u002Flabel\u003E\n\n\u003Cinput type=\"radio\" value=\"4\" id=\"resp_4\" name=\"response\"\u003E\n\u003Clabel for=\"resp_4\"\u003E\n    \u003Cimg src=\"${parameters.option_4}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n    \u003C\u002Flabel\u003E\u003Cbr\u003E\n\n\u003Cinput type=\"radio\" value=\"5\" id=\"resp_5\" name=\"response\"\u003E\n\u003Clabel for=\"resp_5\"\u003E\n    \u003Cimg src=\"${parameters.option_5}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n    \u003C\u002Flabel\u003E\n\n\u003Cinput type=\"radio\" value=\"6\" id=\"resp_6\" name=\"response\"\u003E\n\u003Clabel for=\"resp_6\"\u003E  \u003Cimg src=\"${parameters.option_6}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n\u003C\u002Flabel\u003E\n\n\u003Cinput type=\"radio\" value=\"7\" id=\"resp_7\" name=\"response\"\u003E\n\u003Clabel for=\"resp_7\"\u003E  \u003Cimg src=\"${parameters.option_7}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n\u003C\u002Flabel\u003E\n\n\u003Cinput type=\"radio\" value=\"8\" id=\"resp_8\" name=\"response\"\u003E\n\u003Clabel for=\"resp_8\"\u003E  \u003Cimg src=\"${parameters.option_8}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n\u003C\u002Flabel\u003E\u003Cbr\u003E \n\u003C\u002Fform\u003E \n \u003C\u002Fmain\u003E\n\n \u003Cfooter\u003E\n\u003Cbutton type=\"submit\" form=\"response\"\u003ESubmit\u003C\u002Fbutton\u003E\n \u003C\u002Ffooter\u003E\n   ",
              "scrollTop": true,
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "after:end": function anonymous(
) {
if(this.state.response === this.state.correct_answer) {
  this.state.total_correct += 1
}


this.state.response = "0"
}
              },
              "title": "trials"
            }
          },
          {
            "type": "lab.flow.Loop",
            "templateParameters": [
              {
                "main_image": "static\u002FE1_00.jpg",
                "option_1": "static\u002FE1_01.jpg",
                "option_2": "static\u002FE1_02.jpg",
                "option_3": "static\u002FE1_03.jpg",
                "option_4": "static\u002FE1_04.jpg",
                "option_5": "static\u002FE1_05.jpg",
                "option_6": "static\u002FE1_06.jpg",
                "option_7": "static\u002FE1_07.jpg",
                "option_8": "static\u002FE1_08.jpg",
                "trial_num": "49",
                "correct_answer": "7"
              },
              {
                "main_image": "static\u002FE2_00.jpg",
                "option_1": "static\u002FE2_01.jpg",
                "option_2": "static\u002FE2_02.jpg",
                "option_3": "static\u002FE2_03.jpg",
                "option_4": "static\u002FE2_04.jpg",
                "option_5": "static\u002FE2_05.jpg",
                "option_6": "static\u002FE2_06.jpg",
                "option_7": "static\u002FE2_07.jpg",
                "option_8": "static\u002FE2_08.jpg",
                "trial_num": "50",
                "correct_answer": "6"
              },
              {
                "main_image": "static\u002FE3_00.jpg",
                "option_1": "static\u002FE3_01.jpg",
                "option_2": "static\u002FE3_02.jpg",
                "option_3": "static\u002FE3_03.jpg",
                "option_4": "static\u002FE3_04.jpg",
                "option_5": "static\u002FE3_05.jpg",
                "option_6": "static\u002FE3_06.jpg",
                "option_7": "static\u002FE3_07.jpg",
                "option_8": "static\u002FE3_08.jpg",
                "trial_num": "51",
                "correct_answer": "8"
              },
              {
                "main_image": "static\u002FE4_00.jpg",
                "option_1": "static\u002FE4_01.jpg",
                "option_2": "static\u002FE4_02.jpg",
                "option_3": "static\u002FE4_03.jpg",
                "option_4": "static\u002FE4_04.jpg",
                "option_5": "static\u002FE4_05.jpg",
                "option_6": "static\u002FE4_06.jpg",
                "option_7": "static\u002FE4_07.jpg",
                "option_8": "static\u002FE4_08.jpg",
                "trial_num": "52",
                "correct_answer": "2"
              },
              {
                "main_image": "static\u002FE5_00.jpg",
                "option_1": "static\u002FE5_01.jpg",
                "option_2": "static\u002FE5_02.jpg",
                "option_3": "static\u002FE5_03.jpg",
                "option_4": "static\u002FE5_04.jpg",
                "option_5": "static\u002FE5_05.jpg",
                "option_6": "static\u002FE5_06.jpg",
                "option_7": "static\u002FE5_07.jpg",
                "option_8": "static\u002FE5_08.jpg",
                "trial_num": "53",
                "correct_answer": "1"
              },
              {
                "main_image": "static\u002FE6_00.jpg",
                "option_1": "static\u002FE6_01.jpg",
                "option_2": "static\u002FE6_02.jpg",
                "option_3": "static\u002FE6_03.jpg",
                "option_4": "static\u002FE6_04.jpg",
                "option_5": "static\u002FE6_05.jpg",
                "option_6": "static\u002FE6_06.jpg",
                "option_7": "static\u002FE6_07.jpg",
                "option_8": "static\u002FE6_08.jpg",
                "trial_num": "54",
                "correct_answer": "5"
              },
              {
                "main_image": "static\u002FE7_00.jpg",
                "option_1": "static\u002FE7_01.jpg",
                "option_2": "static\u002FE7_02.jpg",
                "option_3": "static\u002FE7_03.jpg",
                "option_4": "static\u002FE7_04.jpg",
                "option_5": "static\u002FE7_05.jpg",
                "option_6": "static\u002FE7_06.jpg",
                "option_7": "static\u002FE7_07.jpg",
                "option_8": "static\u002FE7_08.jpg",
                "trial_num": "55",
                "correct_answer": "1"
              },
              {
                "main_image": "static\u002FE8_00.jpg",
                "option_1": "static\u002FE8_01.jpg",
                "option_2": "static\u002FE8_02.jpg",
                "option_3": "static\u002FE8_03.jpg",
                "option_4": "static\u002FE8_04.jpg",
                "option_5": "static\u002FE8_05.jpg",
                "option_6": "static\u002FE8_06.jpg",
                "option_7": "static\u002FE8_07.jpg",
                "option_8": "static\u002FE8_08.jpg",
                "trial_num": "56",
                "correct_answer": "6"
              },
              {
                "main_image": "static\u002FE9_00.jpg",
                "option_1": "static\u002FE9_01.jpg",
                "option_2": "static\u002FE9_02.jpg",
                "option_3": "static\u002FE9_03.jpg",
                "option_4": "static\u002FE9_04.jpg",
                "option_5": "static\u002FE9_05.jpg",
                "option_6": "static\u002FE9_06.jpg",
                "option_7": "static\u002FE9_07.jpg",
                "option_8": "static\u002FE9_08.jpg",
                "trial_num": "57",
                "correct_answer": "3"
              },
              {
                "main_image": "static\u002FE10_00.jpg",
                "option_1": "static\u002FE10_01.jpg",
                "option_2": "static\u002FE10_02.jpg",
                "option_3": "static\u002FE10_03.jpg",
                "option_4": "static\u002FE10_04.jpg",
                "option_5": "static\u002FE10_05.jpg",
                "option_6": "static\u002FE10_06.jpg",
                "option_7": "static\u002FE10_07.jpg",
                "option_8": "static\u002FE10_08.jpg",
                "trial_num": "58",
                "correct_answer": "2"
              },
              {
                "main_image": "static\u002FE11_00.jpg",
                "option_1": "static\u002FE11_01.jpg",
                "option_2": "static\u002FE11_02.jpg",
                "option_3": "static\u002FE11_03.jpg",
                "option_4": "static\u002FE11_04.jpg",
                "option_5": "static\u002FE11_05.jpg",
                "option_6": "static\u002FE11_06.jpg",
                "option_7": "static\u002FE11_07.jpg",
                "option_8": "static\u002FE11_08.jpg",
                "trial_num": "59",
                "correct_answer": "4"
              },
              {
                "main_image": "static\u002FE12_00.jpg",
                "option_1": "static\u002FE12_01.jpg",
                "option_2": "static\u002FE12_02.jpg",
                "option_3": "static\u002FE12_03.jpg",
                "option_4": "static\u002FE12_04.jpg",
                "option_5": "static\u002FE12_05.jpg",
                "option_6": "static\u002FE12_06.jpg",
                "option_7": "static\u002FE12_07.jpg",
                "option_8": "static\u002FE12_08.jpg",
                "trial_num": "60",
                "correct_answer": "5"
              }
            ],
            "sample": {
              "mode": "sequential",
              "n": ""
            },
            "files": {
              "_00.jpg": "embedded\u002F4124fa530db7df6ff19d0c42ffb7d4ffcf3ae36606cd822c17a6edb290eed71e.jpg",
              "_01.jpg": "embedded\u002F10420f2d656f8f33bde4fa6ecb659cfb104635421a393c88fc812d2e1182b247.jpg",
              "_02.jpg": "embedded\u002F3b5db79af6baef019d4c2878aff4e93667f6604accdb2f895a650b6645eec3ac.jpg",
              "_03.jpg": "embedded\u002Fe03456c94e0d953d0869d8a6871462e2dc6954835220d31b835ce5f7bde4a390.jpg",
              "_04.jpg": "embedded\u002F8ceff0d7074f7dcfecdc23e4c4fc943f6cae35c5feb9084670f94233deea98cc.jpg",
              "_05.jpg": "embedded\u002F0c9953ec33efa3f8ec9b64f259ec3f99eb5bbfb0fdf053b41f46f0b32bdbcd18.jpg",
              "_06.jpg": "embedded\u002F4c5de24ec5960665cd55c4b912ad9744a970513cf543785cd844b6fa7cf0faa1.jpg"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "block5",
            "shuffleGroups": [],
            "template": {
              "type": "lab.html.Form",
              "content": "\n \u003Cmain\u003E\n   \n \u003Ch3\u003EMatrix ${parameters.trial_num}:\u003C\u002Fh3\u003E\n\n\u003Cimg src=\"${parameters.main_image}\"\u003E\n\u003Cbr\u003E\n\u003Cbr\u003E\n\n\u003Cform id=\"response\"\u003E\n\u003Cinput type=\"radio\" value=\"1\" id=\"resp_1\" name=\"response\"\u003E\n\u003Clabel for=\"resp_1\"\u003E \n  \u003Cimg src=\"${parameters.option_1}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n\u003C\u002Flabel\u003E\n\n\u003Cinput type=\"radio\" value=\"2\" id=\"resp_2\" name=\"response\"\u003E\n\u003Clabel for=\"resp_2\"\u003E  \n  \u003Cimg src=\"${parameters.option_2}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n  \u003C\u002Flabel\u003E\n\n\u003Cinput type=\"radio\" value=\"3\" id=\"resp_3\" name=\"response\"\u003E\n\u003Clabel for=\"resp_3\"\u003E\n    \u003Cimg src=\"${parameters.option_3}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n    \u003C\u002Flabel\u003E\n\n\u003Cinput type=\"radio\" value=\"4\" id=\"resp_4\" name=\"response\"\u003E\n\u003Clabel for=\"resp_4\"\u003E\n    \u003Cimg src=\"${parameters.option_4}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n    \u003C\u002Flabel\u003E\u003Cbr\u003E\n\n\u003Cinput type=\"radio\" value=\"5\" id=\"resp_5\" name=\"response\"\u003E\n\u003Clabel for=\"resp_5\"\u003E\n    \u003Cimg src=\"${parameters.option_5}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n    \u003C\u002Flabel\u003E\n\n\u003Cinput type=\"radio\" value=\"6\" id=\"resp_6\" name=\"response\"\u003E\n\u003Clabel for=\"resp_6\"\u003E  \u003Cimg src=\"${parameters.option_6}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n\u003C\u002Flabel\u003E\n\n\u003Cinput type=\"radio\" value=\"7\" id=\"resp_7\" name=\"response\"\u003E\n\u003Clabel for=\"resp_7\"\u003E  \u003Cimg src=\"${parameters.option_7}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n\u003C\u002Flabel\u003E\n\n\u003Cinput type=\"radio\" value=\"8\" id=\"resp_8\" name=\"response\"\u003E\n\u003Clabel for=\"resp_8\"\u003E  \u003Cimg src=\"${parameters.option_8}\" alt=\"If image does not load please refresh page\" height = 100px width = 100px\u003E\n\u003C\u002Flabel\u003E\u003Cbr\u003E \n\u003C\u002Fform\u003E \n \u003C\u002Fmain\u003E\n\n \u003Cfooter\u003E\n\u003Cbutton type=\"submit\" form=\"response\"\u003ESubmit\u003C\u002Fbutton\u003E\n \u003C\u002Ffooter\u003E\n   ",
              "scrollTop": true,
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "after:end": function anonymous(
) {
if(this.state.response === this.state.correct_answer) {
  this.state.total_correct += 1
}


this.state.response = "0"
}
              },
              "title": "trials"
            }
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "title": "Bedankt voor uw deelname!",
          "content": "U kunt deze pagina nu afsluiten."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Voltooien",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "summary page",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()