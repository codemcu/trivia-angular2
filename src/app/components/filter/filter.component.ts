import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styles: []
})
export class FilterComponent implements OnInit {

  public listApis: Array<any> = [];

  constructor( private _apis: ApiService) { }

  ngOnInit() {
    this.listApis = [ ...this._apis.optionList];
    // console.log('this._apis.apis', this._apis.apis);
  }

  onChange (value: any) {
    this._apis.getApis(value);
  }

}
