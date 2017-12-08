import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiService {

  public urlApi: string;
  public optionList: Array<any> = [];
  public questions: Array<any> = [];

  constructor( private _http: Http) {
    this.optionList = [
      {id: 29, category: 'comic'},
      {id: 30, category: 'gadgets'},
      {id: 31, category: 'anime'}
    ];

    this.urlApi = 'https://opentdb.com/api.php?amount=10&category=';
  }

  getApis(value: string) {
    const headers = new Headers();
    // const paramsUrl = `${value}&difficulty=easy&type=multiple`;
    const url = `${this.urlApi}${value}`;

    return this._http.get(url, {headers})
      .map(res => {
        this.questions = res.json().results;
        if (this.questions.length === 0) {
          return 'This category has no questions available';
        } else {
          return this.questions;
        }
      });
  }
}
