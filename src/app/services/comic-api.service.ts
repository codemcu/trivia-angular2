import { Injectable } from '@angular/core';

@Injectable()
export class ComicApiService {

  public url: string;

  constructor() {
    this.url = 'https://opentdb.com/api.php?amount=10&category=29&difficulty=easy&type=multiple';
  }

  getComicApi () {

  }

}
