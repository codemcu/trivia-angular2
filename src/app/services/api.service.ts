import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AppComponent} from '../app.component';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  public optionList: Array<any> = [];
  public questions: Array<any> = [];

  constructor(private _http: Http) {
    this.optionList = [
      {id: 29, category: 'comic'},
      {id: 30, category: 'gadgets'},
      {id: 31, category: 'anime'}
    ];
  }

  getApis(value: string) {

    const petition = AppComponent.API_ENDPOINT;

    const headers = new Headers();
    const paramsUrl = `${value}&type=multiple`;
    const url = `${petition}${paramsUrl}`;
    console.log('url ', url);

    return this._http.get(url, {headers})
      .map(res => {
        const arrayQuestions = res.json().results;
        if (arrayQuestions.length === 0) {
          return 'This category has no questions available';
        } else {
          this.sortedAnswersAndQuestions(arrayQuestions);
          return this.questions;
        }
      });
  }

  sortedAnswersAndQuestions(arrayQuestions) {
    if (arrayQuestions) {
      const correctedQuestions = [];
      for (let i = 0; i < arrayQuestions.length; i++) {
        const location = Math.floor(Math.random() * arrayQuestions[0].incorrect_answers.length + 1);
        arrayQuestions[i].incorrect_answers.splice(location, 0, arrayQuestions[i].correct_answer);
        correctedQuestions.push(
          {question: arrayQuestions[i].question, answers: arrayQuestions[i].incorrect_answers, correctAnswer: location, nameInput: 'nameInput_' + (i + 1)}
        );
      }
      this.questions = [ ...correctedQuestions ];
    }
  }
}
