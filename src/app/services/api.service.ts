import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AppComponent } from '../app.component';
import 'rxjs/add/operator/map';

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
  }

  getApis(value: string) {

    const petition = AppComponent.API_ENDPOINT;

    const headers = new Headers();
    const paramsUrl = `${value}&type=multiple`;
    const url = `${petition}${paramsUrl}`;
    console.log('url ', url);

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
