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
          "type": "text",
          "title": "Hallo, en welkom bij de training!"
        },
        {
          "required": true,
          "type": "input",
          "label": "Wat is uw email?",
          "name": "id",
          "attributes": {
            "type": "email"
          }
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
      "title": "Participant ID"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "radio",
          "label": "Is dit de eerste keer dat je deze training doet?",
          "options": [
            {
              "label": "Ja",
              "coding": "1"
            },
            {
              "label": "Nee",
              "coding": "0"
            }
          ],
          "name": "first_time"
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
      "title": "Introduction"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "radio",
          "label": "Heb je een geheugensteuntje nodig over hoe de training werkt?",
          "options": [
            {
              "label": "Ja",
              "coding": "1"
            },
            {
              "label": "Nee",
              "coding": "0"
            }
          ],
          "name": "reminder"
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
      "title": "Reminder",
      "tardy": true,
      "skip": "${this.state.first_time == 1}"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "practice",
      "content": [
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "instructions_screen": "static\u002Fdualnbackinstructions_start.gif"
            },
            {
              "instructions_screen": "static\u002Fdualnbackinstructions_squaren1.gif"
            },
            {
              "instructions_screen": "static\u002Fdualnbackinstructions_squaren2.gif"
            },
            {
              "instructions_screen": "static\u002Fdualnbackinstructions_squaren3.gif"
            },
            {
              "instructions_screen": "static\u002Fdualnbackinstructions_generaldual.gif"
            },
            {
              "instructions_screen": "static\u002Fdualnbackinstructions_generaldual1.gif"
            },
            {
              "instructions_screen": "static\u002Fdualnbackinstructions_generaldual2.gif"
            },
            {
              "instructions_screen": "static\u002Fdualnbackinstructions_practice.gif"
            },
            {
              "instructions_screen": "static\u002Fdualnbackinstructions_practice123.gif"
            }
          ],
          "sample": {
            "mode": "sequential"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "instructions",
          "tardy": true,
          "skip": "${ (this.state.first_time == 0) && (this.state.reminder == 0) }",
          "shuffleGroups": [],
          "template": {
            "type": "lab.html.Screen",
            "files": {
              "dualnbackinstructions_generaldual.png": "embedded\u002F18f704d97348ceb7c006bed8426e74da75776b1de975e616f1a9cf729b42521a.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "instructions screen",
            "content": "\u003Cdiv\u003E\n  \u003Cimg src=\"${parameters.instructions_screen}\" height=\"700\" width=\"1000\" class=\"instruction_images\"\u003E\n\u003C\u002Fdiv\u003E"
          }
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "OEFENING: 1-TERUG",
              "content": "In dit oefenblok doet u een \u003Cb\u003E1-terug\u003C\u002Fb\u003E. Druk op \u003Ckbd\u003EA\u003C\u002Fkbd\u003E als de positie van het vierkantje identiek is aan de positie van het vierkantje 1-proef eerder. Druk op \u003Ckbd\u003EL\u003C\u002Fkbd\u003E als de letter die u hoort identiek is aan de letter die u 1-proef eerder hoorde. Indien beide, druk dan op beide toetsen. Indien geen van beide, wacht dan op het volgende vakje\u002Fletter."
            },
            {
              "required": true,
              "type": "text",
              "title": "",
              "content": "Druk op de \u003Ckbd\u003EA\u003C\u002Fkbd\u003E of \u003Ckbd\u003EL\u003C\u002Fkbd\u003E toets om de 1-terug oefening te beginnen."
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "keypress(a, A)": "a",
            "keypress(l, L)": "l"
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.state.n_back_value = 1
}
          },
          "title": "1-back practice instruction",
          "tardy": true,
          "skip": "${ (this.state.first_time == 0) && (this.state.reminder == 0) }"
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "1-back practice",
          "tardy": true,
          "skip": "${ (this.state.first_time == 0) && (this.state.reminder == 0) }",
          "content": [
            {
              "type": "lab.html.Frame",
              "context": "\u003Cheader si\u003E\n\u003Ch1\u003E\u003Cb\u003E${this.state.n_back_value}-TERUG\u003C\u002Fh1\u003E\u003C\u002Fb\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain data-labjs-section=\"frame\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n\u003Cspan class=\"left-button\"\u003E\u003Ckbd id=\"kbd_square\"\u003EA = square\u003C\u002Fkbd\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"right-button\"\u003E\u003Ckbd id=\"kbd_letter\"\u003EL = letter\u003C\u002Fkbd\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Ffooter\u003E",
              "contextSelector": "[data-labjs-section=\"frame\"]",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
// reset a bunch of relevant values for the beginning of the block //
this.n_trials=0;
this.state.n_back_value = 1;
this.state.n_trials_this_block=20+this.state.n_back_value;
this.letters_proportion_correct=0;
this.squares_proportion_correct=0;
this.letters_correct_sum=0;
this.squares_correct_sum=0;

this.current_x_coord=0;
this.current_y_coord=0;
this.current_audio="";

this.one_back_y_coord=0;
this.one_back_x_coord=0;
this.one_back_audio="";

this.two_back_y_coord=0;
this.two_back_x_coord=0;
this.two_back_audio="";

this.three_back_y_coord=0;
this.three_back_x_coord=0;
this.three_back_audio="";

this.four_back_y_coord=0;
this.four_back_x_coord=0;
this.four_back_audio="";

this.five_back_y_coord=0;
this.five_back_x_coord=0;
this.five_back_audio="";

this.six_back_y_coord=0;
this.six_back_x_coord=0;
this.six_back_audio="";

this.seven_back_y_coord=0;
this.seven_back_x_coord=0;
this.seven_back_audio="";

this.eight_back_y_coord=0;
this.eight_back_x_coord=0;
this.eight_back_audio="";

this.nine_back_y_coord=0;
this.nine_back_x_coord=0;
this.nine_back_audio="";

this.ten_back_y_coord=0;
this.ten_back_x_coord=0;
this.ten_back_audio="";

this.eleven_back_y_coord=0;
this.eleven_back_x_coord=0;
this.eleven_back_audio="";

this.twelve_back_y_coord=0;
this.twelve_back_x_coord=0;
this.twelve_back_audio="";

// create array of values 1 to 20 to be used in deciding target trials
this.state.random_values = Array(20).join().split(',').map(function(a){return this.i++},{i:1});

this.state.letter_target = [1, 2, 3, 4, 5, 6]
this.state.square_target = [5, 6, 7, 8, 9, 10]
}
              },
              "title": "Frame",
              "tardy": true,
              "content": {
                "type": "lab.flow.Loop",
                "templateParameters": [
                  {
                    "x_coord": "140",
                    "y_coord": "140",
                    "audio": "a.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "140",
                    "audio": "b.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "140",
                    "audio": "c.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "140",
                    "audio": "d.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "140",
                    "audio": "e.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "140",
                    "audio": "f.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "140",
                    "audio": "g.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "140",
                    "audio": "h.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "140",
                    "audio": "a.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "140",
                    "audio": "b.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "140",
                    "audio": "c.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "140",
                    "audio": "d.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "140",
                    "audio": "e.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "140",
                    "audio": "f.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "140",
                    "audio": "g.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "140",
                    "audio": "h.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "140",
                    "audio": "a.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "140",
                    "audio": "b.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "140",
                    "audio": "c.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "140",
                    "audio": "d.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "140",
                    "audio": "e.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "140",
                    "audio": "f.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "140",
                    "audio": "g.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "140",
                    "audio": "h.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "0",
                    "audio": "a.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "0",
                    "audio": "b.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "0",
                    "audio": "c.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "0",
                    "audio": "d.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "0",
                    "audio": "e.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "0",
                    "audio": "f.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "0",
                    "audio": "g.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "0",
                    "audio": "h.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "0",
                    "audio": "a.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "0",
                    "audio": "b.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "0",
                    "audio": "c.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "0",
                    "audio": "d.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "0",
                    "audio": "e.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "0",
                    "audio": "f.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "0",
                    "audio": "g.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "0",
                    "audio": "h.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "-140",
                    "audio": "a.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "-140",
                    "audio": "b.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "-140",
                    "audio": "c.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "-140",
                    "audio": "d.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "-140",
                    "audio": "e.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "-140",
                    "audio": "f.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "-140",
                    "audio": "g.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "-140",
                    "audio": "h.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "-140",
                    "audio": "a.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "-140",
                    "audio": "b.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "-140",
                    "audio": "c.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "-140",
                    "audio": "d.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "-140",
                    "audio": "e.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "-140",
                    "audio": "f.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "-140",
                    "audio": "g.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "-140",
                    "audio": "h.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "-140",
                    "audio": "a.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "-140",
                    "audio": "b.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "-140",
                    "audio": "c.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "-140",
                    "audio": "d.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "-140",
                    "audio": "e.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "-140",
                    "audio": "f.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "-140",
                    "audio": "g.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "-140",
                    "audio": "h.wav"
                  }
                ],
                "sample": {
                  "mode": "draw-shuffle",
                  "n": "${this.state.n_trials_this_block}"
                },
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "after:end": function anonymous(
) {
this.state.letters_percentage_correct = (this.state.letters_correct_sum / (this.state.n_trials - this.state.n_back_value)) * 100
this.state.squares_percentage_correct = (this.state.squares_correct_sum / (this.state.n_trials - this.state.n_back_value)) * 100


// increase n back value if reach criteria //
if (3 > ((this.state.n_trials - this.state.n_back_value) - this.state.letters_correct_sum)) {
  if (3 > ((this.state.n_trials - this.state.n_back_value) - this.state.squares_correct_sum)) {
    this.state.n_back_value += 1;
} else {
  this.state.n_back_value = this.state.n_back_value;
}
};

// decrease n back value if reach criteria //
if (((this.state.n_trials - this.state.n_back_value)) - this.state.letters_correct_sum > 5 || ((this.state.n_trials - this.state.n_back_value) - this.state.squares_correct_sum > 5)) {
  this.state.n_back_value -= 1;
} else {
  this.state.n_back_value = this.state.n_back_value;
};
}
                },
                "title": "n-back stimuli",
                "tardy": true,
                "shuffleGroups": [],
                "template": {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {
                    "run": function anonymous(
) {
this.state.twelve_back_coords = this.state.eleven_back_coords;
this.state.twelve_back_audio = this.state.eleven_back_audio;

this.state.eleven_back_coords = this.state.ten_back_coords;
this.state.eleven_back_audio = this.state.ten_back_audio;

this.state.ten_back_coords = this.state.nine_back_coords;
this.state.ten_back_audio = this.state.nine_back_audio;

this.state.nine_back_coords = this.state.eight_back_coords;
this.state.nine_back_audio = this.state.eight_back_audio;

this.state.eight_back_coords = this.state.seven_back_coords;
this.state.eight_back_audio = this.state.seven_back_audio;

this.state.seven_back_coords = this.state.six_back_coords;
this.state.seven_back_audio = this.state.six_back_audio;

this.state.six_back_coords = this.state.five_back_coords;
this.state.six_back_audio = this.state.five_back_audio;

this.state.five_back_coords = this.state.four_back_coords;
this.state.five_back_audio = this.state.four_back_audio;

this.state.four_back_coords = this.state.three_back_coords;
this.state.four_back_audio = this.state.three_back_audio;

this.state.three_back_coords = this.state.two_back_coords;
this.state.three_back_audio = this.state.two_back_audio;

this.state.two_back_coords = this.state.one_back_coords;
this.state.two_back_audio = this.state.one_back_audio;

this.state.one_back_coords = this.state.current_coords;
this.state.one_back_audio = this.state.current_audio;

// select random value for this trial
if (this.state.n_trials >= this.state.n_back_value) {
  this.state.rand_val = this.state.random_values[Math.floor(Math.random() * this.state.random_values.length)];
};

},
                    "before:prepare": function anonymous(
) {
this.state.squares_correct_sum = 0;
this.state.letters_correct_sum = 0;
this.state.n_trials = 0;


}
                  },
                  "title": "n-back",
                  "content": [
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "line",
                          "left": -70,
                          "top": -12.25,
                          "angle": 270,
                          "width": 420,
                          "height": 0,
                          "stroke": "black",
                          "strokeWidth": 1,
                          "fill": "rgb(0,0,0)"
                        },
                        {
                          "type": "line",
                          "left": 70,
                          "top": -15,
                          "angle": 270,
                          "width": 420,
                          "height": 0,
                          "stroke": "black",
                          "strokeWidth": 1,
                          "fill": "rgb(0,0,0)"
                        },
                        {
                          "type": "line",
                          "left": 0,
                          "top": -70,
                          "angle": 360,
                          "width": 420,
                          "height": 0,
                          "stroke": "black",
                          "strokeWidth": 1,
                          "fill": "rgb(0,0,0)"
                        },
                        {
                          "type": "line",
                          "left": 0,
                          "top": 70,
                          "angle": 360,
                          "width": 420,
                          "height": 0,
                          "stroke": "black",
                          "strokeWidth": 1,
                          "fill": "rgb(0,0,0)"
                        },
                        {
                          "type": "image",
                          "left": "${parameters.x_position}",
                          "top": "${parameters.y_position}",
                          "angle": 0,
                          "width": 108,
                          "height": 108,
                          "stroke": null,
                          "strokeWidth": 0,
                          "fill": "black",
                          "src": "${ this.files[\"square.png\"] }",
                          "autoScale": false
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {
                        "square.png": "embedded\u002Fc79898e56aa340b5743127c9276f908ac27e4db898d2dd97a6f0e98511b3bd67.png",
                        "a.wav": "embedded\u002F7da371c443c0595e713952d3f64e21b5554ceff684fb79853ebfa1edb642382d.wav",
                        "b.wav": "embedded\u002F4dca9ac43ae0ccae23ee1dd8387e7a25d5c77dcda9010bd6c1d61fcd1765964a.wav",
                        "c.wav": "embedded\u002Feaf27af4bdb0ef63c3a8464b903881008333cbdac672d76f3dc010b1ea4d0fea.wav",
                        "d.wav": "embedded\u002F281423aa7957f6f67d4dd55c97ba4591afd8103d8ac97c4ea3aac3259d798d94.wav",
                        "e.wav": "embedded\u002F2d283b5ea4645929b6a54b8c20b7469c09d8be79acfe1900c4144a81f8d08b63.wav",
                        "f.wav": "embedded\u002Fd5cdb772654edf1b6110dddff2184b1c80bd947b01812f82b29acdf58df91f2b.wav",
                        "g.wav": "embedded\u002F3e39cca790e902bef482256bbf4eb6390192fe56faa2b701d065ee99cbe5ee41.wav",
                        "h.wav": "embedded\u002F596c166f5465db3b59fa71c3bda762ed2bec0c91388817fa7a8a3ffbc1d1f243.wav"
                      },
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {
                        "after:end": function anonymous(
) {
this.state.current_coords = this.parameters.x_position.concat(', ', this.parameters.y_position)
this.state.current_audio = this.state.audio;

// remove currently-selected random value 
if (this.state.n_trials >= this.state.n_back_value) {
this.state.random_values = this.state.random_values.filter(item => item !== this.state.rand_val)
};

},
                        "before:prepare": function anonymous(
) {
// Assign trials as target trials or not, based on random number generation

// Assign trial as square target based on random number
if (this.state.square_target.includes(this.state.rand_val) && this.state.n_trials >= this.state.n_back_value) {
  if (this.state.n_back_value === 1) {
    this.parameters.x_position = this.state.current_coords.split(',')[0];
    this.parameters.y_position = this.state.current_coords.split(', ')[1];
  } else if (this.state.n_back_value === 2) {
    this.parameters.x_position = this.state.one_back_coords.split(',')[0];
    this.parameters.y_position = this.state.one_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 3) {
    this.parameters.x_position = this.state.two_back_coords.split(',')[0];
    this.parameters.y_position = this.state.two_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 4) {
    this.parameters.x_position = this.state.three_back_coords.split(',')[0];
    this.parameters.y_position = this.state.three_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 5) {
    this.parameters.x_position = this.state.four_back_coords.split(',')[0];
    this.parameters.y_position = this.state.four_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 6) {
    this.parameters.x_position = this.state.five_back_coords.split(',')[0];
    this.parameters.y_position = this.state.five_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 7) {
    this.parameters.x_position = this.state.six_back_coords.split(',')[0];
    this.parameters.y_position = this.state.six_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 8) {
    this.parameters.x_position = this.state.seven_back_coords.split(',')[0];
    this.parameters.y_position = this.state.seven_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 9) {
    this.parameters.x_position = this.state.eight_back_coords.split(',')[0];
    this.parameters.y_position = this.state.eight_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 10) {
    this.parameters.x_position = this.state.nine_back_coords.split(',')[0];
    this.parameters.y_position = this.state.nine_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 11) {
    this.parameters.x_position = this.state.ten_back_coords.split(',')[0];
    this.parameters.y_position = this.state.ten_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 12) {
    this.parameters.x_position = this.state.eleven_back_coords.split(',')[0];
    this.parameters.y_position = this.state.eleven_back_coords.split(', ')[1];
  }
} else {
  this.parameters.x_position = this.parameters.x_coord;
  this.parameters.y_position = this.parameters.y_coord;
};


// Assign trial as letter target based on random number
if (this.state.letter_target.includes(this.state.rand_val) && this.state.n_trials >= this.state.n_back_value) {
  if (this.state.n_back_value === 1) {
    this.parameters.audio = this.state.current_audio;
  } else if (this.state.n_back_value === 2) {
    this.parameters.audio = this.state.one_back_audio;
  } else if (this.state.n_back_value === 3) {
    this.parameters.audio = this.state.two_back_audio;
  } else if (this.state.n_back_value === 4) {
    this.parameters.audio = this.state.three_back_audio;
  } else if (this.state.n_back_value === 5) {
    this.parameters.audio = this.state.four_back_audio;
  } else if (this.state.n_back_value === 6) {
    this.parameters.audio = this.state.five_back_audio;
  } else if (this.state.n_back_value === 7) {
    this.parameters.audio = this.state.six_back_audio;
  } else if (this.state.n_back_value === 8) {
    this.parameters.audio = this.state.seven_back_audio;
  } else if (this.state.n_back_value === 9) {
    this.parameters.audio = this.state.eight_back_audio;
  } else if (this.state.n_back_value === 10) {
    this.parameters.audio = this.state.nine_back_audio;
  } else if (this.state.n_back_value === 11) {
    this.parameters.audio = this.state.ten_back_audio;
  } else if (this.state.n_back_value === 12) {
    this.parameters.audio = this.state.eleven_back_audio;
  }
};


// add response columns to data 
this.data.response_a = "0"
this.data.response_l = "0"

// makes the response options change colour to signify correct/incorrect responses //
if (this.state.n_back_value === 1) {
  this.options.events['keypress(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.one_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keypress(L)'] = function() {
    this.data.response_l = "1";
    if (this.state.one_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keypress(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.one_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
  this.options.events['keypress(A)'] = function() {
  this.data.response_a = "1";
    if (this.state.one_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
} else if (this.state.n_back_value === 2) {
  this.options.events['keypress(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.two_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keypress(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.two_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  }
} else if (this.state.n_back_value === 3) {
  this.options.events['keypress(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.three_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keypress(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.three_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  }
} else if (this.state.n_back_value === 4) {
  this.options.events['keypress(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.four_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keypress(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.four_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  }
} else if (this.state.n_back_value === 5) {
  this.options.events['keypress(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.five_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keypress(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.five_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  }
} else if (this.state.n_back_value === 6) {
  this.options.events['keypress(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.six_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keypress(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.six_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  }
} else if (this.state.n_back_value === 7) {
  this.options.events['keypress(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.seven_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keypress(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.seven_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  }
} else if (this.state.n_back_value === 8) {
  this.options.events['keypress(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.eight_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keypress(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.eight_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  }
} else if (this.state.n_back_value === 9) {
  this.options.events['keypress(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.nine_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keypress(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.nine_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  }
} else if (this.state.n_back_value === 10) {
  this.options.events['keypress(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.ten_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keypress(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.ten_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  }
} else if (this.state.n_back_value === 11) {
  this.options.events['keypress(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.eleven_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keypress(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.eleven_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  }
} else if (this.state.n_back_value === 12) {
  this.options.events['keypress(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.twelve_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keypress(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.twelve_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  }
};

}
                      },
                      "title": "trial",
                      "timeout": "3000",
                      "timeline": [
                        {
                          "type": "sound",
                          "start": 0,
                          "stop": "3000",
                          "priority": 0,
                          "payload": {
                            "src": "${ this.files[parameters.audio] }"
                          }
                        }
                      ],
                      "tardy": true
                    },
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "line",
                          "left": -70,
                          "top": -12.25,
                          "angle": 270,
                          "width": 420,
                          "height": 0,
                          "stroke": "black",
                          "strokeWidth": 1,
                          "fill": "rgb(0,0,0)"
                        },
                        {
                          "type": "line",
                          "left": 70,
                          "top": -15,
                          "angle": 270,
                          "width": 420,
                          "height": 0,
                          "stroke": "black",
                          "strokeWidth": 1,
                          "fill": "rgb(0,0,0)"
                        },
                        {
                          "type": "line",
                          "left": 0,
                          "top": -70,
                          "angle": 360,
                          "width": 420,
                          "height": 0,
                          "stroke": "black",
                          "strokeWidth": 1,
                          "fill": "rgb(0,0,0)"
                        },
                        {
                          "type": "line",
                          "left": 0,
                          "top": 70,
                          "angle": 360,
                          "width": 420,
                          "height": 0,
                          "stroke": "black",
                          "strokeWidth": 1,
                          "fill": "rgb(0,0,0)"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {
                        "square.png": "embedded\u002Fc79898e56aa340b5743127c9276f908ac27e4db898d2dd97a6f0e98511b3bd67.png",
                        "on.mp3": "embedded\u002F7c4731a80f9c6f2124548c4124a4eaaef50f406b14f76aa2fda5ed67a5468474.mp3",
                        "off.mp3": "embedded\u002F3140b10c1f90d5779df27decbaf149db33cd435c99198ebf183d2592555a5fc4.mp3"
                      },
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "end": function anonymous(
) {
this.data.correct_letter = "0";
this.data.correct_square = "0";

if (this.state.n_trials >= this.state.n_back_value) {
  // For 1-back //
  if (this.state.n_back_value === 1) {
  // test if response was correct for audio //
  if (this.state.one_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.one_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.one_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.one_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};

// For 2-back //
if (this.state.n_back_value === 2) {
// test if response was correct for audio //
if (this.state.two_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.two_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.two_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.two_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};

// For 3-back //
if (this.state.n_back_value === 3) {
// test if response was correct for audio //
if (this.state.three_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.three_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.three_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.three_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};


// For 4-back //
if (this.state.n_back_value === 4) {
// test if response was correct for audio //
if (this.state.four_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.four_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.four_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.four_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};


// For 5-back //
if (this.state.n_back_value === 5) {
// test if response was correct for audio //
if (this.state.five_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.five_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.five_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.five_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};



// For 6-back //
if (this.state.n_back_value === 6) {
// test if response was correct for audio //
if (this.state.six_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.six_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.six_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.six_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};


// For 7-back //
if (this.state.n_back_value === 7) {
// test if response was correct for audio //
if (this.state.seven_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.seven_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.seven_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.seven_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};



// For 8-back //
if (this.state.n_back_value === 8) {
// test if response was correct for audio //
if (this.state.eight_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.eight_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.eight_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.eight_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};



// For 9-back //
if (this.state.n_back_value === 9) {
// test if response was correct for audio //
if (this.state.nine_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.nine_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.nine_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.nine_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};



// For 10-back //
if (this.state.n_back_value === 4) {
// test if response was correct for audio //
if (this.state.ten_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.ten_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.ten_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.ten_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};


// For 11-back //
if (this.state.n_back_value === 11) {
// test if response was correct for audio //
if (this.state.eleven_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.eleven_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.eleven_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.eleven_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};


// For 12-back //
if (this.state.n_back_value === 12) {
// test if response was correct for audio //
if (this.state.twelve_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.twelve_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.twelve_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.twelve_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
}
};
},
                        "after:end": function anonymous(
) {
document.getElementById("kbd_letter").className = "right-button";
document.getElementById("kbd_square").className = "left-button";

// if correct response for letters or squares, then tally this //
if (this.state.correct_letter == "1") {
  this.state.letters_correct_sum += 1;
};

if (this.state.correct_square == "1") {
  this.state.squares_correct_sum += 1;
};

this.state.n_trials += 1

}
                      },
                      "title": "iti",
                      "timeout": "500",
                      "timeline": []
                    }
                  ]
                }
              }
            }
          ]
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "OEFENING: 2-BACK",
              "content": "Goed! U gaat nu een \u003Cb\u003E2-terug\u003C\u002Fb\u003E oefenen. Druk op \u003Ckbd\u003EA\u003C\u002Fkbd\u003E als de positie van het vierkantje identiek is aan de positie van het vierkantje \u003Ci\u003E2-trials\u003C\u002Fi\u003E eerder. Druk op \u003Ckbd\u003EL\u003C\u002Fkbd\u003E als de letter die je hoort identiek is aan de letter die je \u003Ci\u003E2-trials\u003C\u002Fi\u003E eerder hoorde. Indien beide, druk op beide toetsen. Indien geen van beide, gewoon wachten op het volgende vakje\u002Fletter."
            },
            {
              "required": true,
              "type": "text",
              "title": "",
              "content": "Druk op de \u003Ckbd\u003EA\u003C\u002Fkbd\u003E of \u003Ckbd\u003EL\u003C\u002Fkbd\u003E toets om de 2-terug oefening te beginnen."
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "keypress(a, A)": "a",
            "keypress(l, L)": "l"
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.state.n_back_value = 2
}
          },
          "title": "2-back practice instruction",
          "tardy": true,
          "skip": "${ (this.state.first_time == 0) && (this.state.reminder == 0) }"
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "2-back practice",
          "skip": "${ (this.state.first_time == 0) && (this.state.reminder == 0) }",
          "tardy": true,
          "content": [
            {
              "type": "lab.html.Frame",
              "context": "\u003Cheader si\u003E\n\u003Ch1\u003E\u003Cb\u003E${this.state.n_back_value}-TERUG\u003C\u002Fh1\u003E\u003C\u002Fb\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain data-labjs-section=\"frame\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n\u003Cspan class=\"left-button\"\u003E\u003Ckbd id=\"kbd_square\"\u003EA = square\u003C\u002Fkbd\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"right-button\"\u003E\u003Ckbd id=\"kbd_letter\"\u003EL = letter\u003C\u002Fkbd\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Ffooter\u003E",
              "contextSelector": "[data-labjs-section=\"frame\"]",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
// reset a bunch of relevant values for the beginning of the block //
this.n_trials=0;
this.state.n_back_value = 2;
this.state.n_trials_this_block=20+this.state.n_back_value;
this.letters_proportion_correct=0;
this.squares_proportion_correct=0;
this.letters_correct_sum=0;
this.squares_correct_sum=0;

this.current_x_coord=0;
this.current_y_coord=0;
this.current_audio="";

this.one_back_y_coord=0;
this.one_back_x_coord=0;
this.one_back_audio="";

this.two_back_y_coord=0;
this.two_back_x_coord=0;
this.two_back_audio="";

this.three_back_y_coord=0;
this.three_back_x_coord=0;
this.three_back_audio="";

this.four_back_y_coord=0;
this.four_back_x_coord=0;
this.four_back_audio="";

this.five_back_y_coord=0;
this.five_back_x_coord=0;
this.five_back_audio="";

this.six_back_y_coord=0;
this.six_back_x_coord=0;
this.six_back_audio="";

this.seven_back_y_coord=0;
this.seven_back_x_coord=0;
this.seven_back_audio="";

this.eight_back_y_coord=0;
this.eight_back_x_coord=0;
this.eight_back_audio="";

this.nine_back_y_coord=0;
this.nine_back_x_coord=0;
this.nine_back_audio="";

this.ten_back_y_coord=0;
this.ten_back_x_coord=0;
this.ten_back_audio="";

this.eleven_back_y_coord=0;
this.eleven_back_x_coord=0;
this.eleven_back_audio="";

this.twelve_back_y_coord=0;
this.twelve_back_x_coord=0;
this.twelve_back_audio="";

// create array of values 1 to 20 to be used in deciding target trials
this.state.random_values = Array(20).join().split(',').map(function(a){return this.i++},{i:1});

this.state.letter_target = [1, 2, 3, 4, 5, 6]
this.state.square_target = [5, 6, 7, 8, 9, 10]
}
              },
              "title": "Frame",
              "tardy": true,
              "content": {
                "type": "lab.flow.Loop",
                "templateParameters": [
                  {
                    "x_coord": "140",
                    "y_coord": "140",
                    "audio": "a.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "140",
                    "audio": "b.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "140",
                    "audio": "c.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "140",
                    "audio": "d.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "140",
                    "audio": "e.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "140",
                    "audio": "f.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "140",
                    "audio": "g.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "140",
                    "audio": "h.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "140",
                    "audio": "a.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "140",
                    "audio": "b.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "140",
                    "audio": "c.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "140",
                    "audio": "d.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "140",
                    "audio": "e.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "140",
                    "audio": "f.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "140",
                    "audio": "g.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "140",
                    "audio": "h.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "140",
                    "audio": "a.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "140",
                    "audio": "b.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "140",
                    "audio": "c.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "140",
                    "audio": "d.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "140",
                    "audio": "e.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "140",
                    "audio": "f.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "140",
                    "audio": "g.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "140",
                    "audio": "h.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "0",
                    "audio": "a.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "0",
                    "audio": "b.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "0",
                    "audio": "c.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "0",
                    "audio": "d.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "0",
                    "audio": "e.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "0",
                    "audio": "f.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "0",
                    "audio": "g.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "0",
                    "audio": "h.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "0",
                    "audio": "a.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "0",
                    "audio": "b.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "0",
                    "audio": "c.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "0",
                    "audio": "d.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "0",
                    "audio": "e.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "0",
                    "audio": "f.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "0",
                    "audio": "g.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "0",
                    "audio": "h.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "-140",
                    "audio": "a.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "-140",
                    "audio": "b.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "-140",
                    "audio": "c.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "-140",
                    "audio": "d.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "-140",
                    "audio": "e.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "-140",
                    "audio": "f.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "-140",
                    "audio": "g.wav"
                  },
                  {
                    "x_coord": "140",
                    "y_coord": "-140",
                    "audio": "h.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "-140",
                    "audio": "a.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "-140",
                    "audio": "b.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "-140",
                    "audio": "c.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "-140",
                    "audio": "d.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "-140",
                    "audio": "e.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "-140",
                    "audio": "f.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "-140",
                    "audio": "g.wav"
                  },
                  {
                    "x_coord": "0",
                    "y_coord": "-140",
                    "audio": "h.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "-140",
                    "audio": "a.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "-140",
                    "audio": "b.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "-140",
                    "audio": "c.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "-140",
                    "audio": "d.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "-140",
                    "audio": "e.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "-140",
                    "audio": "f.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "-140",
                    "audio": "g.wav"
                  },
                  {
                    "x_coord": "-140",
                    "y_coord": "-140",
                    "audio": "h.wav"
                  }
                ],
                "sample": {
                  "mode": "draw-shuffle",
                  "n": "${this.state.n_trials_this_block}"
                },
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "after:end": function anonymous(
) {
this.state.letters_percentage_correct = (this.state.letters_correct_sum / (this.state.n_trials - this.state.n_back_value)) * 100
this.state.squares_percentage_correct = (this.state.squares_correct_sum / (this.state.n_trials - this.state.n_back_value)) * 100


// increase n back value if reach criteria //
if (3 > ((this.state.n_trials - this.state.n_back_value) - this.state.letters_correct_sum)) {
  if (3 > ((this.state.n_trials - this.state.n_back_value) - this.state.squares_correct_sum)) {
    this.state.n_back_value += 1;
} else {
  this.state.n_back_value = this.state.n_back_value;
}
};

// decrease n back value if reach criteria //
if (((this.state.n_trials - this.state.n_back_value)) - this.state.letters_correct_sum > 5 || ((this.state.n_trials - this.state.n_back_value) - this.state.squares_correct_sum > 5)) {
  this.state.n_back_value -= 1;
} else {
  this.state.n_back_value = this.state.n_back_value;
};
}
                },
                "title": "n-back stimuli",
                "tardy": true,
                "shuffleGroups": [],
                "template": {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {
                    "run": function anonymous(
) {
this.state.twelve_back_coords = this.state.eleven_back_coords;
this.state.twelve_back_audio = this.state.eleven_back_audio;

this.state.eleven_back_coords = this.state.ten_back_coords;
this.state.eleven_back_audio = this.state.ten_back_audio;

this.state.ten_back_coords = this.state.nine_back_coords;
this.state.ten_back_audio = this.state.nine_back_audio;

this.state.nine_back_coords = this.state.eight_back_coords;
this.state.nine_back_audio = this.state.eight_back_audio;

this.state.eight_back_coords = this.state.seven_back_coords;
this.state.eight_back_audio = this.state.seven_back_audio;

this.state.seven_back_coords = this.state.six_back_coords;
this.state.seven_back_audio = this.state.six_back_audio;

this.state.six_back_coords = this.state.five_back_coords;
this.state.six_back_audio = this.state.five_back_audio;

this.state.five_back_coords = this.state.four_back_coords;
this.state.five_back_audio = this.state.four_back_audio;

this.state.four_back_coords = this.state.three_back_coords;
this.state.four_back_audio = this.state.three_back_audio;

this.state.three_back_coords = this.state.two_back_coords;
this.state.three_back_audio = this.state.two_back_audio;

this.state.two_back_coords = this.state.one_back_coords;
this.state.two_back_audio = this.state.one_back_audio;

this.state.one_back_coords = this.state.current_coords;
this.state.one_back_audio = this.state.current_audio;

// select random value for this trial
if (this.state.n_trials >= this.state.n_back_value) {
  this.state.rand_val = this.state.random_values[Math.floor(Math.random() * this.state.random_values.length)];
};

},
                    "before:prepare": function anonymous(
) {
this.state.squares_correct_sum = 0;
this.state.letters_correct_sum = 0;
this.state.n_trials = 0;


}
                  },
                  "title": "n-back",
                  "content": [
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "line",
                          "left": -70,
                          "top": -12.25,
                          "angle": 270,
                          "width": 420,
                          "height": 0,
                          "stroke": "black",
                          "strokeWidth": 1,
                          "fill": "rgb(0,0,0)"
                        },
                        {
                          "type": "line",
                          "left": 70,
                          "top": -15,
                          "angle": 270,
                          "width": 420,
                          "height": 0,
                          "stroke": "black",
                          "strokeWidth": 1,
                          "fill": "rgb(0,0,0)"
                        },
                        {
                          "type": "line",
                          "left": 0,
                          "top": -70,
                          "angle": 360,
                          "width": 420,
                          "height": 0,
                          "stroke": "black",
                          "strokeWidth": 1,
                          "fill": "rgb(0,0,0)"
                        },
                        {
                          "type": "line",
                          "left": 0,
                          "top": 70,
                          "angle": 360,
                          "width": 420,
                          "height": 0,
                          "stroke": "black",
                          "strokeWidth": 1,
                          "fill": "rgb(0,0,0)"
                        },
                        {
                          "type": "image",
                          "left": "${parameters.x_position}",
                          "top": "${parameters.y_position}",
                          "angle": 0,
                          "width": 108,
                          "height": 108,
                          "stroke": null,
                          "strokeWidth": 0,
                          "fill": "black",
                          "src": "${ this.files[\"square.png\"] }",
                          "autoScale": false
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {
                        "square.png": "embedded\u002Fc79898e56aa340b5743127c9276f908ac27e4db898d2dd97a6f0e98511b3bd67.png",
                        "a.wav": "embedded\u002F7da371c443c0595e713952d3f64e21b5554ceff684fb79853ebfa1edb642382d.wav",
                        "b.wav": "embedded\u002F4dca9ac43ae0ccae23ee1dd8387e7a25d5c77dcda9010bd6c1d61fcd1765964a.wav",
                        "c.wav": "embedded\u002Feaf27af4bdb0ef63c3a8464b903881008333cbdac672d76f3dc010b1ea4d0fea.wav",
                        "d.wav": "embedded\u002F281423aa7957f6f67d4dd55c97ba4591afd8103d8ac97c4ea3aac3259d798d94.wav",
                        "e.wav": "embedded\u002F2d283b5ea4645929b6a54b8c20b7469c09d8be79acfe1900c4144a81f8d08b63.wav",
                        "f.wav": "embedded\u002Fd5cdb772654edf1b6110dddff2184b1c80bd947b01812f82b29acdf58df91f2b.wav",
                        "g.wav": "embedded\u002F3e39cca790e902bef482256bbf4eb6390192fe56faa2b701d065ee99cbe5ee41.wav",
                        "h.wav": "embedded\u002F596c166f5465db3b59fa71c3bda762ed2bec0c91388817fa7a8a3ffbc1d1f243.wav"
                      },
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {
                        "after:end": function anonymous(
) {
this.state.current_coords = this.parameters.x_position.concat(', ', this.parameters.y_position)
this.state.current_audio = this.state.audio;

// remove currently-selected random value 
if (this.state.n_trials >= this.state.n_back_value) {
this.state.random_values = this.state.random_values.filter(item => item !== this.state.rand_val)
};

},
                        "before:prepare": function anonymous(
) {
// Assign trials as target trials or not, based on random number generation

// Assign trial as square target based on random number
if (this.state.square_target.includes(this.state.rand_val) && this.state.n_trials >= this.state.n_back_value) {
  if (this.state.n_back_value === 1) {
    this.parameters.x_position = this.state.current_coords.split(',')[0];
    this.parameters.y_position = this.state.current_coords.split(', ')[1];
  } else if (this.state.n_back_value === 2) {
    this.parameters.x_position = this.state.one_back_coords.split(',')[0];
    this.parameters.y_position = this.state.one_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 3) {
    this.parameters.x_position = this.state.two_back_coords.split(',')[0];
    this.parameters.y_position = this.state.two_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 4) {
    this.parameters.x_position = this.state.three_back_coords.split(',')[0];
    this.parameters.y_position = this.state.three_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 5) {
    this.parameters.x_position = this.state.four_back_coords.split(',')[0];
    this.parameters.y_position = this.state.four_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 6) {
    this.parameters.x_position = this.state.five_back_coords.split(',')[0];
    this.parameters.y_position = this.state.five_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 7) {
    this.parameters.x_position = this.state.six_back_coords.split(',')[0];
    this.parameters.y_position = this.state.six_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 8) {
    this.parameters.x_position = this.state.seven_back_coords.split(',')[0];
    this.parameters.y_position = this.state.seven_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 9) {
    this.parameters.x_position = this.state.eight_back_coords.split(',')[0];
    this.parameters.y_position = this.state.eight_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 10) {
    this.parameters.x_position = this.state.nine_back_coords.split(',')[0];
    this.parameters.y_position = this.state.nine_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 11) {
    this.parameters.x_position = this.state.ten_back_coords.split(',')[0];
    this.parameters.y_position = this.state.ten_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 12) {
    this.parameters.x_position = this.state.eleven_back_coords.split(',')[0];
    this.parameters.y_position = this.state.eleven_back_coords.split(', ')[1];
  }
} else {
  this.parameters.x_position = this.parameters.x_coord;
  this.parameters.y_position = this.parameters.y_coord;
};


// Assign trial as letter target based on random number
if (this.state.letter_target.includes(this.state.rand_val) && this.state.n_trials >= this.state.n_back_value) {
  if (this.state.n_back_value === 1) {
    this.parameters.audio = this.state.current_audio;
  } else if (this.state.n_back_value === 2) {
    this.parameters.audio = this.state.one_back_audio;
  } else if (this.state.n_back_value === 3) {
    this.parameters.audio = this.state.two_back_audio;
  } else if (this.state.n_back_value === 4) {
    this.parameters.audio = this.state.three_back_audio;
  } else if (this.state.n_back_value === 5) {
    this.parameters.audio = this.state.four_back_audio;
  } else if (this.state.n_back_value === 6) {
    this.parameters.audio = this.state.five_back_audio;
  } else if (this.state.n_back_value === 7) {
    this.parameters.audio = this.state.six_back_audio;
  } else if (this.state.n_back_value === 8) {
    this.parameters.audio = this.state.seven_back_audio;
  } else if (this.state.n_back_value === 9) {
    this.parameters.audio = this.state.eight_back_audio;
  } else if (this.state.n_back_value === 10) {
    this.parameters.audio = this.state.nine_back_audio;
  } else if (this.state.n_back_value === 11) {
    this.parameters.audio = this.state.ten_back_audio;
  } else if (this.state.n_back_value === 12) {
    this.parameters.audio = this.state.eleven_back_audio;
  }
};


// add response columns to data 
this.data.response_a = "0"
this.data.response_l = "0"

// makes the response options change colour to signify correct/incorrect responses //
if (this.state.n_back_value === 1) {
  this.options.events['keypress(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.one_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keypress(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.one_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  }
} else if (this.state.n_back_value === 2) {
  this.options.events['keypress(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.two_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keypress(L)'] = function() {
    this.data.response_l = "1";
    if (this.state.two_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keypress(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.two_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
  this.options.events['keypress(A)'] = function() {
  this.data.response_a = "1";
    if (this.state.two_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
} else if (this.state.n_back_value === 3) {
  this.options.events['keypress(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.three_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keypress(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.three_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  }
} else if (this.state.n_back_value === 4) {
  this.options.events['keypress(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.four_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keypress(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.four_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  }
} else if (this.state.n_back_value === 5) {
  this.options.events['keypress(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.five_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keypress(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.five_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  }
} else if (this.state.n_back_value === 6) {
  this.options.events['keypress(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.six_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keypress(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.six_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  }
} else if (this.state.n_back_value === 7) {
  this.options.events['keypress(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.seven_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keypress(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.seven_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  }
} else if (this.state.n_back_value === 8) {
  this.options.events['keypress(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.eight_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keypress(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.eight_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  }
} else if (this.state.n_back_value === 9) {
  this.options.events['keypress(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.nine_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keypress(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.nine_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  }
} else if (this.state.n_back_value === 10) {
  this.options.events['keypress(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.ten_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keypress(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.ten_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  }
} else if (this.state.n_back_value === 11) {
  this.options.events['keypress(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.eleven_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keypress(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.eleven_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  }
} else if (this.state.n_back_value === 12) {
  this.options.events['keypress(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.twelve_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keypress(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.twelve_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  }
};

}
                      },
                      "title": "trial",
                      "timeout": "3000",
                      "timeline": [
                        {
                          "type": "sound",
                          "start": 0,
                          "stop": "3000",
                          "priority": 0,
                          "payload": {
                            "src": "${ this.files[parameters.audio] }"
                          }
                        }
                      ],
                      "tardy": true
                    },
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "line",
                          "left": -70,
                          "top": -12.25,
                          "angle": 270,
                          "width": 420,
                          "height": 0,
                          "stroke": "black",
                          "strokeWidth": 1,
                          "fill": "rgb(0,0,0)"
                        },
                        {
                          "type": "line",
                          "left": 70,
                          "top": -15,
                          "angle": 270,
                          "width": 420,
                          "height": 0,
                          "stroke": "black",
                          "strokeWidth": 1,
                          "fill": "rgb(0,0,0)"
                        },
                        {
                          "type": "line",
                          "left": 0,
                          "top": -70,
                          "angle": 360,
                          "width": 420,
                          "height": 0,
                          "stroke": "black",
                          "strokeWidth": 1,
                          "fill": "rgb(0,0,0)"
                        },
                        {
                          "type": "line",
                          "left": 0,
                          "top": 70,
                          "angle": 360,
                          "width": 420,
                          "height": 0,
                          "stroke": "black",
                          "strokeWidth": 1,
                          "fill": "rgb(0,0,0)"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {
                        "square.png": "embedded\u002Fc79898e56aa340b5743127c9276f908ac27e4db898d2dd97a6f0e98511b3bd67.png",
                        "on.mp3": "embedded\u002F7c4731a80f9c6f2124548c4124a4eaaef50f406b14f76aa2fda5ed67a5468474.mp3",
                        "off.mp3": "embedded\u002F3140b10c1f90d5779df27decbaf149db33cd435c99198ebf183d2592555a5fc4.mp3"
                      },
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "end": function anonymous(
) {
this.data.correct_letter = "0";
this.data.correct_square = "0";

if (this.state.n_trials >= this.state.n_back_value) {
  // For 1-back //
  if (this.state.n_back_value === 1) {
  // test if response was correct for audio //
  if (this.state.one_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.one_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.one_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.one_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};

// For 2-back //
if (this.state.n_back_value === 2) {
// test if response was correct for audio //
if (this.state.two_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.two_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.two_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.two_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};

// For 3-back //
if (this.state.n_back_value === 3) {
// test if response was correct for audio //
if (this.state.three_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.three_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.three_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.three_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};


// For 4-back //
if (this.state.n_back_value === 4) {
// test if response was correct for audio //
if (this.state.four_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.four_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.four_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.four_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};


// For 5-back //
if (this.state.n_back_value === 5) {
// test if response was correct for audio //
if (this.state.five_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.five_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.five_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.five_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};



// For 6-back //
if (this.state.n_back_value === 6) {
// test if response was correct for audio //
if (this.state.six_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.six_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.six_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.six_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};


// For 7-back //
if (this.state.n_back_value === 7) {
// test if response was correct for audio //
if (this.state.seven_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.seven_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.seven_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.seven_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};



// For 8-back //
if (this.state.n_back_value === 8) {
// test if response was correct for audio //
if (this.state.eight_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.eight_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.eight_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.eight_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};



// For 9-back //
if (this.state.n_back_value === 9) {
// test if response was correct for audio //
if (this.state.nine_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.nine_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.nine_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.nine_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};



// For 10-back //
if (this.state.n_back_value === 4) {
// test if response was correct for audio //
if (this.state.ten_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.ten_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.ten_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.ten_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};


// For 11-back //
if (this.state.n_back_value === 11) {
// test if response was correct for audio //
if (this.state.eleven_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.eleven_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.eleven_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.eleven_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};


// For 12-back //
if (this.state.n_back_value === 12) {
// test if response was correct for audio //
if (this.state.twelve_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.twelve_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.twelve_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.twelve_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
}
};
},
                        "after:end": function anonymous(
) {
document.getElementById("kbd_letter").className = "right-button";
document.getElementById("kbd_square").className = "left-button";

// if correct response for letters or squares, then tally this //
if (this.state.correct_letter == "1") {
  this.state.letters_correct_sum += 1;
};

if (this.state.correct_square == "1") {
  this.state.squares_correct_sum += 1;
};

this.state.n_trials += 1

}
                      },
                      "title": "iti",
                      "timeout": "500",
                      "timeline": []
                    }
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "U begint nu met de training.",
          "content": "U begint met het voltooien van een 1-terug blok. \u003Cu\u003EZorg ervoor dat het geluid van uw computer aan staat en dat u zich volledig op de training kunt concentreren.\u003C\u002Fu\u003E\u003Cbr\u003E\u003Cbr\u003EKlik op \"begin\" om met de training te beginnen."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Begin →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "after:end": function anonymous(
) {
this.state.n_back_value = 1;
}
      },
      "title": "first_block_intro"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "block_number": "1"
        },
        {
          "block_number": "2"
        },
        {
          "block_number": "3"
        },
        {
          "block_number": "4"
        },
        {
          "block_number": "5"
        },
        {
          "block_number": "6"
        },
        {
          "block_number": "7"
        },
        {
          "block_number": "8"
        },
        {
          "block_number": "9"
        },
        {
          "block_number": "10"
        },
        {
          "block_number": "11"
        },
        {
          "block_number": "12"
        },
        {
          "block_number": "13"
        },
        {
          "block_number": "14"
        },
        {
          "block_number": "15"
        },
        {
          "block_number": "16"
        },
        {
          "block_number": "17"
        },
        {
          "block_number": "18"
        },
        {
          "block_number": "19"
        },
        {
          "block_number": "20"
        }
      ],
      "sample": {
        "mode": "sequential",
        "n": ""
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.state.n_back_value = 1;
}
      },
      "title": "n-back loop",
      "timeout": "1800000",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "block",
        "content": [
          {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "n-back block",
            "content": [
              {
                "type": "lab.html.Frame",
                "context": "\u003Cheader si\u003E\n\u003Ch1\u003E\u003Cb\u003E${this.state.n_back_value}-TERUG\u003C\u002Fh1\u003E\u003C\u002Fb\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain data-labjs-section=\"frame\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n\u003Cspan class=\"left-button\"\u003E\u003Ckbd id=\"kbd_square\"\u003EA = square\u003C\u002Fkbd\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"right-button\"\u003E\u003Ckbd id=\"kbd_letter\"\u003EL = letter\u003C\u002Fkbd\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Ffooter\u003E",
                "contextSelector": "[data-labjs-section=\"frame\"]",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
// reset a bunch of relevant values for the beginning of the block //
this.n_trials=0;
this.state.n_trials_this_block=20+this.state.n_back_value;
this.letters_proportion_correct=0;
this.squares_proportion_correct=0;
this.letters_correct_sum=0;
this.squares_correct_sum=0;

this.current_x_coord=0;
this.current_y_coord=0;
this.current_audio="";

this.one_back_y_coord=0;
this.one_back_x_coord=0;
this.one_back_audio="";

this.two_back_y_coord=0;
this.two_back_x_coord=0;
this.two_back_audio="";

this.three_back_y_coord=0;
this.three_back_x_coord=0;
this.three_back_audio="";

this.four_back_y_coord=0;
this.four_back_x_coord=0;
this.four_back_audio="";

this.five_back_y_coord=0;
this.five_back_x_coord=0;
this.five_back_audio="";

this.six_back_y_coord=0;
this.six_back_x_coord=0;
this.six_back_audio="";

this.seven_back_y_coord=0;
this.seven_back_x_coord=0;
this.seven_back_audio="";

this.eight_back_y_coord=0;
this.eight_back_x_coord=0;
this.eight_back_audio="";

this.nine_back_y_coord=0;
this.nine_back_x_coord=0;
this.nine_back_audio="";

this.ten_back_y_coord=0;
this.ten_back_x_coord=0;
this.ten_back_audio="";

this.eleven_back_y_coord=0;
this.eleven_back_x_coord=0;
this.eleven_back_audio="";

this.twelve_back_y_coord=0;
this.twelve_back_x_coord=0;
this.twelve_back_audio="";

// create array of values 1 to 20 to be used in deciding target trials
this.state.random_values = Array(20).join().split(',').map(function(a){return this.i++},{i:1});

this.state.letter_target = [1, 2, 3, 4, 5, 6]
this.state.square_target = [5, 6, 7, 8, 9, 10]
}
                },
                "title": "Frame",
                "tardy": true,
                "content": {
                  "type": "lab.flow.Loop",
                  "templateParameters": [
                    {
                      "x_coord": "140",
                      "y_coord": "140",
                      "audio": "a.wav"
                    },
                    {
                      "x_coord": "140",
                      "y_coord": "140",
                      "audio": "b.wav"
                    },
                    {
                      "x_coord": "140",
                      "y_coord": "140",
                      "audio": "c.wav"
                    },
                    {
                      "x_coord": "140",
                      "y_coord": "140",
                      "audio": "d.wav"
                    },
                    {
                      "x_coord": "140",
                      "y_coord": "140",
                      "audio": "e.wav"
                    },
                    {
                      "x_coord": "140",
                      "y_coord": "140",
                      "audio": "f.wav"
                    },
                    {
                      "x_coord": "140",
                      "y_coord": "140",
                      "audio": "g.wav"
                    },
                    {
                      "x_coord": "140",
                      "y_coord": "140",
                      "audio": "h.wav"
                    },
                    {
                      "x_coord": "0",
                      "y_coord": "140",
                      "audio": "a.wav"
                    },
                    {
                      "x_coord": "0",
                      "y_coord": "140",
                      "audio": "b.wav"
                    },
                    {
                      "x_coord": "0",
                      "y_coord": "140",
                      "audio": "c.wav"
                    },
                    {
                      "x_coord": "0",
                      "y_coord": "140",
                      "audio": "d.wav"
                    },
                    {
                      "x_coord": "0",
                      "y_coord": "140",
                      "audio": "e.wav"
                    },
                    {
                      "x_coord": "0",
                      "y_coord": "140",
                      "audio": "f.wav"
                    },
                    {
                      "x_coord": "0",
                      "y_coord": "140",
                      "audio": "g.wav"
                    },
                    {
                      "x_coord": "0",
                      "y_coord": "140",
                      "audio": "h.wav"
                    },
                    {
                      "x_coord": "-140",
                      "y_coord": "140",
                      "audio": "a.wav"
                    },
                    {
                      "x_coord": "-140",
                      "y_coord": "140",
                      "audio": "b.wav"
                    },
                    {
                      "x_coord": "-140",
                      "y_coord": "140",
                      "audio": "c.wav"
                    },
                    {
                      "x_coord": "-140",
                      "y_coord": "140",
                      "audio": "d.wav"
                    },
                    {
                      "x_coord": "-140",
                      "y_coord": "140",
                      "audio": "e.wav"
                    },
                    {
                      "x_coord": "-140",
                      "y_coord": "140",
                      "audio": "f.wav"
                    },
                    {
                      "x_coord": "-140",
                      "y_coord": "140",
                      "audio": "g.wav"
                    },
                    {
                      "x_coord": "-140",
                      "y_coord": "140",
                      "audio": "h.wav"
                    },
                    {
                      "x_coord": "140",
                      "y_coord": "0",
                      "audio": "a.wav"
                    },
                    {
                      "x_coord": "140",
                      "y_coord": "0",
                      "audio": "b.wav"
                    },
                    {
                      "x_coord": "140",
                      "y_coord": "0",
                      "audio": "c.wav"
                    },
                    {
                      "x_coord": "140",
                      "y_coord": "0",
                      "audio": "d.wav"
                    },
                    {
                      "x_coord": "140",
                      "y_coord": "0",
                      "audio": "e.wav"
                    },
                    {
                      "x_coord": "140",
                      "y_coord": "0",
                      "audio": "f.wav"
                    },
                    {
                      "x_coord": "140",
                      "y_coord": "0",
                      "audio": "g.wav"
                    },
                    {
                      "x_coord": "140",
                      "y_coord": "0",
                      "audio": "h.wav"
                    },
                    {
                      "x_coord": "-140",
                      "y_coord": "0",
                      "audio": "a.wav"
                    },
                    {
                      "x_coord": "-140",
                      "y_coord": "0",
                      "audio": "b.wav"
                    },
                    {
                      "x_coord": "-140",
                      "y_coord": "0",
                      "audio": "c.wav"
                    },
                    {
                      "x_coord": "-140",
                      "y_coord": "0",
                      "audio": "d.wav"
                    },
                    {
                      "x_coord": "-140",
                      "y_coord": "0",
                      "audio": "e.wav"
                    },
                    {
                      "x_coord": "-140",
                      "y_coord": "0",
                      "audio": "f.wav"
                    },
                    {
                      "x_coord": "-140",
                      "y_coord": "0",
                      "audio": "g.wav"
                    },
                    {
                      "x_coord": "-140",
                      "y_coord": "0",
                      "audio": "h.wav"
                    },
                    {
                      "x_coord": "140",
                      "y_coord": "-140",
                      "audio": "a.wav"
                    },
                    {
                      "x_coord": "140",
                      "y_coord": "-140",
                      "audio": "b.wav"
                    },
                    {
                      "x_coord": "140",
                      "y_coord": "-140",
                      "audio": "c.wav"
                    },
                    {
                      "x_coord": "140",
                      "y_coord": "-140",
                      "audio": "d.wav"
                    },
                    {
                      "x_coord": "140",
                      "y_coord": "-140",
                      "audio": "e.wav"
                    },
                    {
                      "x_coord": "140",
                      "y_coord": "-140",
                      "audio": "f.wav"
                    },
                    {
                      "x_coord": "140",
                      "y_coord": "-140",
                      "audio": "g.wav"
                    },
                    {
                      "x_coord": "140",
                      "y_coord": "-140",
                      "audio": "h.wav"
                    },
                    {
                      "x_coord": "0",
                      "y_coord": "-140",
                      "audio": "a.wav"
                    },
                    {
                      "x_coord": "0",
                      "y_coord": "-140",
                      "audio": "b.wav"
                    },
                    {
                      "x_coord": "0",
                      "y_coord": "-140",
                      "audio": "c.wav"
                    },
                    {
                      "x_coord": "0",
                      "y_coord": "-140",
                      "audio": "d.wav"
                    },
                    {
                      "x_coord": "0",
                      "y_coord": "-140",
                      "audio": "e.wav"
                    },
                    {
                      "x_coord": "0",
                      "y_coord": "-140",
                      "audio": "f.wav"
                    },
                    {
                      "x_coord": "0",
                      "y_coord": "-140",
                      "audio": "g.wav"
                    },
                    {
                      "x_coord": "0",
                      "y_coord": "-140",
                      "audio": "h.wav"
                    },
                    {
                      "x_coord": "-140",
                      "y_coord": "-140",
                      "audio": "a.wav"
                    },
                    {
                      "x_coord": "-140",
                      "y_coord": "-140",
                      "audio": "b.wav"
                    },
                    {
                      "x_coord": "-140",
                      "y_coord": "-140",
                      "audio": "c.wav"
                    },
                    {
                      "x_coord": "-140",
                      "y_coord": "-140",
                      "audio": "d.wav"
                    },
                    {
                      "x_coord": "-140",
                      "y_coord": "-140",
                      "audio": "e.wav"
                    },
                    {
                      "x_coord": "-140",
                      "y_coord": "-140",
                      "audio": "f.wav"
                    },
                    {
                      "x_coord": "-140",
                      "y_coord": "-140",
                      "audio": "g.wav"
                    },
                    {
                      "x_coord": "-140",
                      "y_coord": "-140",
                      "audio": "h.wav"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "${this.state.n_trials_this_block}"
                  },
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {
                    "after:end": function anonymous(
) {
this.state.letters_percentage_correct = (this.state.letters_correct_sum / (this.state.n_trials - this.state.n_back_value)) * 100
this.state.squares_percentage_correct = (this.state.squares_correct_sum / (this.state.n_trials - this.state.n_back_value)) * 100


// increase n back value if reach criteria //
if ((3 > ((this.state.n_trials - this.state.n_back_value) - this.state.letters_correct_sum)) && (3 > ((this.state.n_trials - this.state.n_back_value) - this.state.squares_correct_sum))) {
    this.state.n_back_value += 1;
} else {
  this.state.n_back_value = this.state.n_back_value;
};

// decrease n back value if reach criteria //
if (((this.state.n_trials - this.state.n_back_value)) - this.state.letters_correct_sum > 5 || ((this.state.n_trials - this.state.n_back_value) - this.state.squares_correct_sum > 5)) {
  if (this.state.n_back_value > 1) {
    this.state.n_back_value -= 1;
  } else {
  this.state.n_back_value = this.state.n_back_value;
  }
};
}
                  },
                  "title": "n-back stimuli",
                  "tardy": true,
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.flow.Sequence",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {
                      "run": function anonymous(
) {
this.state.twelve_back_coords = this.state.eleven_back_coords;
this.state.twelve_back_audio = this.state.eleven_back_audio;

this.state.eleven_back_coords = this.state.ten_back_coords;
this.state.eleven_back_audio = this.state.ten_back_audio;

this.state.ten_back_coords = this.state.nine_back_coords;
this.state.ten_back_audio = this.state.nine_back_audio;

this.state.nine_back_coords = this.state.eight_back_coords;
this.state.nine_back_audio = this.state.eight_back_audio;

this.state.eight_back_coords = this.state.seven_back_coords;
this.state.eight_back_audio = this.state.seven_back_audio;

this.state.seven_back_coords = this.state.six_back_coords;
this.state.seven_back_audio = this.state.six_back_audio;

this.state.six_back_coords = this.state.five_back_coords;
this.state.six_back_audio = this.state.five_back_audio;

this.state.five_back_coords = this.state.four_back_coords;
this.state.five_back_audio = this.state.four_back_audio;

this.state.four_back_coords = this.state.three_back_coords;
this.state.four_back_audio = this.state.three_back_audio;

this.state.three_back_coords = this.state.two_back_coords;
this.state.three_back_audio = this.state.two_back_audio;

this.state.two_back_coords = this.state.one_back_coords;
this.state.two_back_audio = this.state.one_back_audio;

this.state.one_back_coords = this.state.current_coords;
this.state.one_back_audio = this.state.current_audio;

// select random value for this trial
if (this.state.n_trials >= this.state.n_back_value) {
  this.state.rand_val = this.state.random_values[Math.floor(Math.random() * this.state.random_values.length)];
};

},
                      "before:prepare": function anonymous(
) {
this.state.squares_correct_sum = 0;
this.state.letters_correct_sum = 0;
this.state.n_trials = 0;


}
                    },
                    "title": "n-back",
                    "content": [
                      {
                        "type": "lab.canvas.Screen",
                        "content": [
                          {
                            "type": "line",
                            "left": -70,
                            "top": -12.25,
                            "angle": 270,
                            "width": 420,
                            "height": 0,
                            "stroke": "black",
                            "strokeWidth": 1,
                            "fill": "rgb(0,0,0)"
                          },
                          {
                            "type": "line",
                            "left": 70,
                            "top": -15,
                            "angle": 270,
                            "width": 420,
                            "height": 0,
                            "stroke": "black",
                            "strokeWidth": 1,
                            "fill": "rgb(0,0,0)"
                          },
                          {
                            "type": "line",
                            "left": 0,
                            "top": -70,
                            "angle": 360,
                            "width": 420,
                            "height": 0,
                            "stroke": "black",
                            "strokeWidth": 1,
                            "fill": "rgb(0,0,0)"
                          },
                          {
                            "type": "line",
                            "left": 0,
                            "top": 70,
                            "angle": 360,
                            "width": 420,
                            "height": 0,
                            "stroke": "black",
                            "strokeWidth": 1,
                            "fill": "rgb(0,0,0)"
                          },
                          {
                            "type": "image",
                            "left": "${parameters.x_position}",
                            "top": "${parameters.y_position}",
                            "angle": 0,
                            "width": 108,
                            "height": 108,
                            "stroke": null,
                            "strokeWidth": 0,
                            "fill": "black",
                            "src": "${ this.files[\"square.png\"] }",
                            "autoScale": false
                          }
                        ],
                        "viewport": [
                          800,
                          600
                        ],
                        "files": {
                          "square.png": "embedded\u002Fc79898e56aa340b5743127c9276f908ac27e4db898d2dd97a6f0e98511b3bd67.png",
                          "a.wav": "embedded\u002F7da371c443c0595e713952d3f64e21b5554ceff684fb79853ebfa1edb642382d.wav",
                          "b.wav": "embedded\u002F4dca9ac43ae0ccae23ee1dd8387e7a25d5c77dcda9010bd6c1d61fcd1765964a.wav",
                          "c.wav": "embedded\u002Feaf27af4bdb0ef63c3a8464b903881008333cbdac672d76f3dc010b1ea4d0fea.wav",
                          "d.wav": "embedded\u002F281423aa7957f6f67d4dd55c97ba4591afd8103d8ac97c4ea3aac3259d798d94.wav",
                          "e.wav": "embedded\u002F2d283b5ea4645929b6a54b8c20b7469c09d8be79acfe1900c4144a81f8d08b63.wav",
                          "f.wav": "embedded\u002Fd5cdb772654edf1b6110dddff2184b1c80bd947b01812f82b29acdf58df91f2b.wav",
                          "g.wav": "embedded\u002F3e39cca790e902bef482256bbf4eb6390192fe56faa2b701d065ee99cbe5ee41.wav",
                          "h.wav": "embedded\u002F596c166f5465db3b59fa71c3bda762ed2bec0c91388817fa7a8a3ffbc1d1f243.wav"
                        },
                        "responses": {},
                        "parameters": {},
                        "messageHandlers": {
                          "after:end": function anonymous(
) {
this.state.current_coords = this.parameters.x_position.concat(', ', this.parameters.y_position)
this.state.current_audio = this.state.audio;

// remove currently-selected random value 
if (this.state.n_trials >= this.state.n_back_value) {
this.state.random_values = this.state.random_values.filter(item => item !== this.state.rand_val)
};

},
                          "before:prepare": function anonymous(
) {
// Assign trials as target trials or not, based on random number generation

// Assign trial as square target based on random number
if (this.state.square_target.includes(this.state.rand_val) && this.state.n_trials >= this.state.n_back_value) {
  if (this.state.n_back_value === 1) {
    this.parameters.x_position = this.state.current_coords.split(',')[0];
    this.parameters.y_position = this.state.current_coords.split(', ')[1];
  } else if (this.state.n_back_value === 2) {
    this.parameters.x_position = this.state.one_back_coords.split(',')[0];
    this.parameters.y_position = this.state.one_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 3) {
    this.parameters.x_position = this.state.two_back_coords.split(',')[0];
    this.parameters.y_position = this.state.two_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 4) {
    this.parameters.x_position = this.state.three_back_coords.split(',')[0];
    this.parameters.y_position = this.state.three_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 5) {
    this.parameters.x_position = this.state.four_back_coords.split(',')[0];
    this.parameters.y_position = this.state.four_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 6) {
    this.parameters.x_position = this.state.five_back_coords.split(',')[0];
    this.parameters.y_position = this.state.five_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 7) {
    this.parameters.x_position = this.state.six_back_coords.split(',')[0];
    this.parameters.y_position = this.state.six_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 8) {
    this.parameters.x_position = this.state.seven_back_coords.split(',')[0];
    this.parameters.y_position = this.state.seven_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 9) {
    this.parameters.x_position = this.state.eight_back_coords.split(',')[0];
    this.parameters.y_position = this.state.eight_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 10) {
    this.parameters.x_position = this.state.nine_back_coords.split(',')[0];
    this.parameters.y_position = this.state.nine_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 11) {
    this.parameters.x_position = this.state.ten_back_coords.split(',')[0];
    this.parameters.y_position = this.state.ten_back_coords.split(', ')[1];
  } else if (this.state.n_back_value === 12) {
    this.parameters.x_position = this.state.eleven_back_coords.split(',')[0];
    this.parameters.y_position = this.state.eleven_back_coords.split(', ')[1];
  }
} else {
  this.parameters.x_position = this.parameters.x_coord;
  this.parameters.y_position = this.parameters.y_coord;
};


// Assign trial as letter target based on random number
if (this.state.letter_target.includes(this.state.rand_val) && this.state.n_trials >= this.state.n_back_value) {
  if (this.state.n_back_value === 1) {
    this.parameters.audio = this.state.current_audio;
  } else if (this.state.n_back_value === 2) {
    this.parameters.audio = this.state.one_back_audio;
  } else if (this.state.n_back_value === 3) {
    this.parameters.audio = this.state.two_back_audio;
  } else if (this.state.n_back_value === 4) {
    this.parameters.audio = this.state.three_back_audio;
  } else if (this.state.n_back_value === 5) {
    this.parameters.audio = this.state.four_back_audio;
  } else if (this.state.n_back_value === 6) {
    this.parameters.audio = this.state.five_back_audio;
  } else if (this.state.n_back_value === 7) {
    this.parameters.audio = this.state.six_back_audio;
  } else if (this.state.n_back_value === 8) {
    this.parameters.audio = this.state.seven_back_audio;
  } else if (this.state.n_back_value === 9) {
    this.parameters.audio = this.state.eight_back_audio;
  } else if (this.state.n_back_value === 10) {
    this.parameters.audio = this.state.nine_back_audio;
  } else if (this.state.n_back_value === 11) {
    this.parameters.audio = this.state.ten_back_audio;
  } else if (this.state.n_back_value === 12) {
    this.parameters.audio = this.state.eleven_back_audio;
  }
};


// add response columns to data 
this.data.response_a = "0"
this.data.response_l = "0"

// makes the response options change colour to signify correct/incorrect responses //
if (this.state.n_back_value === 1) {
  this.options.events['keydown(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.one_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keydown(L)'] = function() {
    this.data.response_l = "1";
    if (this.state.one_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keydown(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.one_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
  this.options.events['keydown(A)'] = function() {
  this.data.response_a = "1";
    if (this.state.one_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
} else if (this.state.n_back_value === 2) {
  this.options.events['keydown(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.two_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keydown(L)'] = function() {
    this.data.response_l = "1";
    if (this.state.two_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keydown(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.two_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
  this.options.events['keydown(A)'] = function() {
  this.data.response_a = "1";
    if (this.state.two_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
} else if (this.state.n_back_value === 3) {
  this.options.events['keydown(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.three_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keydown(L)'] = function() {
    this.data.response_l = "1";
    if (this.state.three_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keydown(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.three_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
  this.options.events['keydown(A)'] = function() {
  this.data.response_a = "1";
    if (this.state.three_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
} else if (this.state.n_back_value === 4) {
  this.options.events['keydown(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.four_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keydown(L)'] = function() {
    this.data.response_l = "1";
    if (this.state.four_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keydown(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.four_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
  this.options.events['keydown(A)'] = function() {
  this.data.response_a = "1";
    if (this.state.four_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
} else if (this.state.n_back_value === 5) {
  this.options.events['keydown(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.five_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keydown(L)'] = function() {
    this.data.response_l = "1";
    if (this.state.five_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keydown(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.five_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
  this.options.events['keydown(A)'] = function() {
  this.data.response_a = "1";
    if (this.state.five_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
} else if (this.state.n_back_value === 6) {
  this.options.events['keydown(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.six_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keydown(L)'] = function() {
    this.data.response_l = "1";
    if (this.state.six_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keydown(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.six_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
  this.options.events['keydown(A)'] = function() {
  this.data.response_a = "1";
    if (this.state.six_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
} else if (this.state.n_back_value === 7) {
  this.options.events['keydown(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.seven_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keydown(L)'] = function() {
    this.data.response_l = "1";
    if (this.state.seven_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keydown(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.seven_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
  this.options.events['keydown(A)'] = function() {
  this.data.response_a = "1";
    if (this.state.seven_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
} else if (this.state.n_back_value === 8) {
  this.options.events['keydown(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.eight_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keydown(L)'] = function() {
    this.data.response_l = "1";
    if (this.state.eight_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keydown(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.eight_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
  this.options.events['keydown(A)'] = function() {
  this.data.response_a = "1";
    if (this.state.eight_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
} else if (this.state.n_back_value === 9) {
  this.options.events['keydown(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.nine_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keydown(L)'] = function() {
    this.data.response_l = "1";
    if (this.state.nine_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keydown(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.nine_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
  this.options.events['keydown(A)'] = function() {
  this.data.response_a = "1";
    if (this.state.nine_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
} else if (this.state.n_back_value === 10) {
  this.options.events['keydown(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.ten_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keydown(L)'] = function() {
    this.data.response_l = "1";
    if (this.state.ten_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keydown(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.ten_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
  this.options.events['keydown(A)'] = function() {
  this.data.response_a = "1";
    if (this.state.ten_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
} else if (this.state.n_back_value === 11) {
  this.options.events['keydown(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.eleven_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keydown(L)'] = function() {
    this.data.response_l = "1";
    if (this.state.eleven_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keydown(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.eleven_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
  this.options.events['keydown(A)'] = function() {
  this.data.response_a = "1";
    if (this.state.eleven_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
} else if (this.state.n_back_value === 12) {
  this.options.events['keydown(l)'] = function() {
    this.data.response_l = "1";
    if (this.state.twelve_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keydown(L)'] = function() {
    this.data.response_l = "1";
    if (this.state.twelve_back_audio === this.parameters.audio) {
       document.getElementById("kbd_letter").className = "right-button-correct";
    } else {
       document.getElementById("kbd_letter").className = "right-button-wrong";
   }
  };
  this.options.events['keydown(a)'] = function() {
  this.data.response_a = "1";
    if (this.state.twelve_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
  this.options.events['keydown(A)'] = function() {
  this.data.response_a = "1";
    if (this.state.twelve_back_coords === this.parameters.x_position.concat(', ', this.parameters.y_position)) {
       document.getElementById("kbd_square").className = "left-button-correct";
    } else {
        document.getElementById("kbd_square").className = "left-button-wrong";
   }
  };
};

}
                        },
                        "title": "trial",
                        "timeout": "3000",
                        "timeline": [
                          {
                            "type": "sound",
                            "start": 0,
                            "stop": "3000",
                            "priority": 0,
                            "payload": {
                              "src": "${ this.files[parameters.audio] }"
                            }
                          }
                        ],
                        "tardy": true
                      },
                      {
                        "type": "lab.canvas.Screen",
                        "content": [
                          {
                            "type": "line",
                            "left": -70,
                            "top": -12.25,
                            "angle": 270,
                            "width": 420,
                            "height": 0,
                            "stroke": "black",
                            "strokeWidth": 1,
                            "fill": "rgb(0,0,0)"
                          },
                          {
                            "type": "line",
                            "left": 70,
                            "top": -15,
                            "angle": 270,
                            "width": 420,
                            "height": 0,
                            "stroke": "black",
                            "strokeWidth": 1,
                            "fill": "rgb(0,0,0)"
                          },
                          {
                            "type": "line",
                            "left": 0,
                            "top": -70,
                            "angle": 360,
                            "width": 420,
                            "height": 0,
                            "stroke": "black",
                            "strokeWidth": 1,
                            "fill": "rgb(0,0,0)"
                          },
                          {
                            "type": "line",
                            "left": 0,
                            "top": 70,
                            "angle": 360,
                            "width": 420,
                            "height": 0,
                            "stroke": "black",
                            "strokeWidth": 1,
                            "fill": "rgb(0,0,0)"
                          }
                        ],
                        "viewport": [
                          800,
                          600
                        ],
                        "files": {
                          "square.png": "embedded\u002Fc79898e56aa340b5743127c9276f908ac27e4db898d2dd97a6f0e98511b3bd67.png",
                          "on.mp3": "embedded\u002F7c4731a80f9c6f2124548c4124a4eaaef50f406b14f76aa2fda5ed67a5468474.mp3",
                          "off.mp3": "embedded\u002F3140b10c1f90d5779df27decbaf149db33cd435c99198ebf183d2592555a5fc4.mp3"
                        },
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {
                          "end": function anonymous(
) {
this.data.correct_letter = "0";
this.data.correct_square = "0";

if (this.state.n_trials >= this.state.n_back_value) {
  // For 1-back //
  if (this.state.n_back_value === 1) {
  // test if response was correct for audio //
  if (this.state.one_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.one_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.one_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.one_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};

// For 2-back //
if (this.state.n_back_value === 2) {
// test if response was correct for audio //
if (this.state.two_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.two_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.two_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.two_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};

// For 3-back //
if (this.state.n_back_value === 3) {
// test if response was correct for audio //
if (this.state.three_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.three_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.three_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.three_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};


// For 4-back //
if (this.state.n_back_value === 4) {
// test if response was correct for audio //
if (this.state.four_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.four_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.four_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.four_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};


// For 5-back //
if (this.state.n_back_value === 5) {
// test if response was correct for audio //
if (this.state.five_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.five_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.five_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.five_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};



// For 6-back //
if (this.state.n_back_value === 6) {
// test if response was correct for audio //
if (this.state.six_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.six_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.six_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.six_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};


// For 7-back //
if (this.state.n_back_value === 7) {
// test if response was correct for audio //
if (this.state.seven_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.seven_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.seven_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.seven_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};



// For 8-back //
if (this.state.n_back_value === 8) {
// test if response was correct for audio //
if (this.state.eight_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.eight_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.eight_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.eight_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};



// For 9-back //
if (this.state.n_back_value === 9) {
// test if response was correct for audio //
if (this.state.nine_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.nine_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.nine_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.nine_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};



// For 10-back //
if (this.state.n_back_value === 4) {
// test if response was correct for audio //
if (this.state.ten_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.ten_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.ten_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.ten_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};


// For 11-back //
if (this.state.n_back_value === 11) {
// test if response was correct for audio //
if (this.state.eleven_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.eleven_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.eleven_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.eleven_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
};


// For 12-back //
if (this.state.n_back_value === 12) {
// test if response was correct for audio //
if (this.state.twelve_back_audio === this.state.current_audio) {
  if (this.state.response_l === "1") {
    this.data.correct_letter = "1";
  } else { 
    this.data.correct_letter = "0";
  }
} else {
  if (this.state.twelve_back_audio !== this.state.current_audio) {
    if (this.state.response_l === "0") {
      this.data.correct_letter = "1";
  } else {
    this.data.correct_letter = "0";
  }
}
};

// test if response was correct for squares //
if (this.state.twelve_back_coords === this.state.current_coords) {
  if (this.state.response_a === "1") {
    this.data.correct_square = "1";
  } else { 
    this.data.correct_square = "0";
  }
} else {
  if (this.state.twelve_back_coords !== this.state.current_coords) {
    if (this.state.response_a === "0") {
      this.data.correct_square = "1";
  } else {
    this.data.correct_square = "0";
  }
}
}
}
};
},
                          "after:end": function anonymous(
) {
document.getElementById("kbd_letter").className = "right-button";
document.getElementById("kbd_square").className = "left-button";

// if correct response for letters or squares, then tally this //
if (this.state.correct_letter == "1") {
  this.state.letters_correct_sum += 1;
};

if (this.state.correct_square == "1") {
  this.state.squares_correct_sum += 1;
};

this.state.n_trials += 1

}
                        },
                        "title": "iti",
                        "timeout": "500",
                        "timeline": []
                      }
                    ]
                  }
                }
              }
            ]
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "content": "In het laatste blok, had u ${Math.round(this.state.squares_percentage_correct)}% van de vierkanten juist, en \n${Math.round(this.state.letters_percentage_correct)}% van de letters juist. Dit betekent dat u bij het volgende blok een ${this.state.n_back_value}-terug blok zult voltooien. "
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
            "messageHandlers": {
              "after:end": function anonymous(
) {
// reset a bunch of relevant values for the beginning of the block //
// THIS WORKS! //
this.state.n_trials=0;
this.state.letters_proportion_correct=0;
this.state.squares_proportion_correct=0;
this.state.letters_correct_sum=0;
this.state.squares_correct_sum=0;

this.state.current_x_coord=0;
this.state.current_y_coord=0;
this.state.current_audio="";

this.state.one_back_y_coord=0;
this.state.one_back_x_coord=0;
this.state.one_back_audio="";

this.state.two_back_y_coord=0;
this.state.two_back_x_coord=0;
this.state.two_back_audio="";
}
            },
            "title": "feedback",
            "tardy": true,
            "skip": "${this.state.block_number == 10}"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Dank u voor de training vandaag!",
          "content": "Deze sessie is nu voltooid. Uw gegevens zijn opgeslagen, en u kunt dit venster veilig sluiten.\u003Cbr\u003E\u003Cbr\u003ETot de volgende keer! "
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
      "title": "Finish"
    }
  ]
})

// Let's go!
study.run()