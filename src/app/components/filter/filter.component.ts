import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styles: []
})
export class FilterComponent implements OnInit {

  @Output() listFiltered = new EventEmitter();

  public listCategories: Array<any> = [];
  public listResult: Array<any> = [];

  constructor( private _apis: ApiService) { }

  ngOnInit() {
    this.listCategories = [ ...this._apis.optionList];
  }

  onChange (value: any) {
    this._apis.getApis(value).subscribe(
      (res: any) => {
        this.listResult = res;
        console.log('this.listResult ', this.listResult);
        this.listFiltered.emit(this.listResult);
        // return this.listResult;
      },
      (error: any) => {
        const errorCode = JSON.parse(error.json().errorMessage).code;
      }
    );
  }

}
