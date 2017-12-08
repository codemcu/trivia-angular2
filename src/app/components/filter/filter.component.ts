import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styles: []
})
export class FilterComponent implements OnInit {

  public listCategories: Array<any> = [];

  constructor( private _apis: ApiService) { }

  ngOnInit() {
    this.listCategories = [ ...this._apis.optionList];
    // console.log('this._apis.apis', this._apis.apis);
  }

  onChange (value: string) {
    this._apis.getApis(value).subscribe(
      res => {
        console.log(res);
      },
      error => {
        const errorCode = JSON.parse(error.json().errorMessage).code;
      }
    );
  }

}
