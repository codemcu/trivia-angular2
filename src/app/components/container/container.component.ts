import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styles: []
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getListResult(event: any) {
    console.log('event', event);
  }
}
