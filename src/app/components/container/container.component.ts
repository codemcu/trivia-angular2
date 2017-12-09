import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styles: []
})
export class ContainerComponent implements OnInit {

  @Input() questions: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  getListResult(event: Array<any>) {
    this.questions = [ ...event ];
    // debugger;
    console.log('this.questions', this.questions);
  }
}
