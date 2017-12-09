import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styles: []
})
export class QuestionsComponent implements OnInit {

  @Input() questions: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
