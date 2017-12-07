import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  public apis: Array<any> = [];
  public optionList: Array<any> = [];

  constructor() {
    this.optionList = [
      {id: 29, category: 'comic'},
      {id: 30, category: 'gadgets'},
      {id: 31, category: 'anime'}
    ];

    this.apis = [
      'https://opentdb.com/api.php?amount=10&category=29&difficulty=easy&type=multiple',
      'https://opentdb.com/api.php?amount=10&category=30&difficulty=easy&type=multiple',
      'https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple'
    ];
  }

  getApis(value: any) {
    const selected = this.apis[value];
    console.log(selected);
  }
}
