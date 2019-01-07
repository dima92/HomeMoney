import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { State } from '@progress/kendo-data-query';
import { CategoryService } from "../services/category.service";


@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  @ViewChild('grid')
  public isOpenAddEditCalalogCfoModal: [boolean, string] = [false, ""];
  public isNew: boolean;
  public model: any;
  animate: false;
  popupClass: string = 'font-arial';
  status: boolean;
  public gridData: Array<any> = [];
  loading: boolean = false;
  openModalWindowCategory : boolean = false;

  constructor(private categoryService: CategoryService) {

  }

  public state: State = {
    skip: 0,
    take: 5,

    // Initial filter descriptor
    filter: {
      logic: 'and',
      filters: [{ field: 'CategoryDescription', operator: 'contains', value: 'Chef' }]
    }
  };

  public add(dataItem: any) {
    this.openModalWindowCategory = true;
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
    this.openModalWindowCategory = false;
  }

  public saveCategory(data: any) {
    this.cancel(true);
    this.categoryService.addCategory(data)
      .subscribe((result: any) => {
        alert("Запись успешно добавлена");
        this.getAllIncomeExpenses();
        },
        error => {
          alert(error.error.Message);
          for (var i = 0; i < error.error.ModelState.errorLogin.length; i++) {
            alert(error.error.ModelState.errorLogin[i]);
          }
        });
  }
  

  public getAllIncomeExpenses() {
    this.loading = true;
    this.categoryService.getAllIncomeExpenses(null)
      .subscribe((result: any) => {
          for (var i = 0; i < result.length; i++) {
            result[i].ProfitType = result[i].Category.ProfitType ? "+ Приход" : " - Расход";
            result[i].CategoryDescription = result[i].Category.Description;
            result[i].CategoryDateCreate = (new Date(result[i].DateСreate)).toLocaleDateString();
            result[i].ApplicationUser = result[i].ApplicationUser.Name + ' (' + result[i].ApplicationUser.Email + ')';
          }
        this.gridData = result;
        this.loading = false;
        },
        error => {
          alert(error.error.Message);
          for (var i = 0; i < error.error.ModelState.errorLogin.length; i++) {
            alert(error.error.ModelState.errorLogin[i]);
          }
        });
  }


  ngOnInit() {
    debugger;
    this.getAllIncomeExpenses();
  }
}
