import { Component, OnInit } from '@angular/core';
import * as Survey from 'survey-angular';

Survey
  .StylesManager
  .applyTheme('stone');

const myCss = {
  matrix: {
    root: 'table table-stripe'
  },
  navigationButton: 'button btn-lg'
};

const json = {
  pages: [
    {
      name: 'survey',
      elements: [
        {
          type: 'matrix',
          name: 'name',
          title: 'title',
          titleLocation: 'hidden',
          columns: [
            {
              value: 1,
              text: 'A Little Of The Time'
            }, {
              value: 2,
              text: 'Some Of The Time'
            }, {
              value: 3,
              text: 'Good Part Of The Time'
            }, {
              value: 4,
              text: 'Most Of The Time'
            }
          ],
          rows: [
            {
              value: '1',
              text: '1. I feel more nervous and anxious than usual.'
            }, {
              value: '2',
              text: '2. I feel afraid for no reason at all.'
            }, {
              value: '3',
              text: '3. I get upset easily or feel panicky.'
            }, {
              value: '4',
              text: '4. I feel like I’m falling apart and going to pieces.'
            }
            , {
              value: '5',
              text: '5. I feel that everything is all right and nothing bad will happen.	'
            }
            , {
              value: '6',
              text: '6. My arms and legs shake and tremble.	'
            }
            , {
              value: '7',
              text: '7. I am bothered by headaches neck and back pain.	'
            }
            , {
              value: '8',
              text: '8. I feel weak and get tired easily.	'
            }
            , {
              value: '9',
              text: '9. I feel calm and can sit still easily.	'
            }
            , {
              value: '10',
              text: '10. I can feel my heart beating fast.	'
            }
            , {
              value: '11',
              text: '11. I am bothered by dizzy spells.	'
            }
            , {
              value: '12',
              text: '12. I have fainting spells or feel like it.	'
            }
            , {
              value: '13',
              text: '13. I can breathe in and out easily.	'
            }
            , {
              value: '14',
              text: '14. I get numbness and tingling in my fingers and toes.	'
            }
            , {
              value: '15',
              text: '15. I am bothered by stomach aches or indigestion.	'
            }
            , {
              value: '16',
              text: '16. I have to empty my bladder often.	'
            }
            , {
              value: '17',
              text: '17. My hands are usually dry and warm.	'
            }
            , {
              value: '18',
              text: '18. My face gets hot and blushes.	'
            }
            , {
              value: '19',
              text: '19. I fall asleep easily and get a good night’s rest.	'
            }
            , {
              value: '20',
              text: '20. I have nightmares.	'
            }
          ]
        }
      ]
    }


  ],
  isSinglePage: true
};


@Component({
  selector: 'app-zung',
  templateUrl: './zung.component.html',
  styleUrls: ['./zung.component.css']
})
export class ZungComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var survey = new Survey.Model(json);
    Survey.SurveyNG.render('test_zung', { model: survey });
  }

}
