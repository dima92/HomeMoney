import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { State } from '@progress/kendo-data-query';


@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public isOpenAddEditCalalogCfoModal: [boolean, string] = [false, ""];
  public isNew: boolean;
  public model: any;
  animate: false;
  popupClass: string = 'font-arial';
  status: boolean;

  public add(dataItem: any) {
    this.model = "";
    this.isNew = dataItem;
    this.status = dataItem;
  }

  data: Array<any> = [{
    text: 'Приход',
    click: (dataItem) => {
      this.add(true);
    }
  }, {
      text: 'Расход',
      click: (dataItem) => {
        this.add(false);
      }
    }];

  public cancel(e: any) {
    this.model = undefined;
  }

  public testMas = [{ Name: "www", Cat: 22 }, { Name: "eee", Cat: 2223 }];
  public gridData: any[] = this.testMas;




  ngOnInit() {
  }
}
