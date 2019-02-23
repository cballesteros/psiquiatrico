import { Component, OnInit } from '@angular/core';
import * as Survey from 'survey-angular';
//import * as widgets from 'surveyjs-widgets';

Survey
    .StylesManager
    .applyTheme("bootstrap");

var myCss = {
    matrix: {
        root: "table table-striped"
    },
    navigationButton: "button btn-lg"
};

var json = {
  questions: [
      {
          type: "matrix",
          name: "Quality",
          title: "Please indicate if you agree or disagree with the following statements",
          columns: [
              {
                  value: 1,
                  text: "Poco \ntiempo"
              }, {
                  value: 2,
                  text: "Algo de tiempo"
              }, {
                  value: 3,
                  text: "Una buena parte del tiempo"
              }, {
                  value: 4,
                  text: "La mayor parte del tiempo"
              }
          ],
          rows: [
              {
                  value: "affordable",
                  text: "Product is affordable"
              }, {
                  value: "does what it claims",
                  text: "Product does what it claims"
              }, {
                  value: "better then others",
                  text: "Product is better than other products on the market"
              }, {
                  value: "easy to use",
                  text: "Product is easy to use"
              }
          ]
      }
  ]
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
      //survey.onComplete.add(sendDataToServer);
      Survey.SurveyNG.render("test_zung", {model:survey});
  }

}

/* window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });

function onAngularComponentInit() {
    Survey
        .SurveyNG
        .render("surveyElement", {
            model: survey,
            css: myCss

        });
}
var HelloApp = ng
    .core
    .Component({selector: 'ng-app', template: '<div id="surveyContainer" class="survey-container contentcontainer codecontainer"><div id="surveyElement"></div></div> '})
    .Class({
        constructor: function () {},
        ngOnInit: function () {
            onAngularComponentInit();
        }
    });
document.addEventListener('DOMContentLoaded', function () {
    ng
        .platformBrowserDynamic
        .bootstrap(HelloApp);
}); */