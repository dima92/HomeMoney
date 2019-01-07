import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { CategoryService } from "../services/category.service";
import { LocalStorage } from 'ngx-store';


@Component({
  selector: 'main-form-add-edit',
  templateUrl: './main-form-add-edit.component.html',
  styleUrls: ['./main-form-add-edit.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MainFormAddEdit {
  public active = false;
  @LocalStorage({ key: 'email' }) email: string;
  public editForm: FormGroup = new FormGroup({
    "Id": new FormControl(),
    "Name": new FormControl('', Validators.required),
    "Description": new FormControl('', Validators.required),
    "Summa": new FormControl('', Validators.required),
  });
  constructor(public router: Router,
    private categoryService: CategoryService) {

  }

  public Categorys: Array<{ Name: string, Id: number }> = [];

  SelectCategory: { Name: string, Id: number };
  openBlockaddCategory = false;



  @Input()
  public isNew = false;

  @Input()
  public set model(data: any) {
    debugger;
    this.editForm.reset(data);
    this.active = data !== undefined;
  }


  @Input() //fkag: true - приход , false - расход
  public set status(flag: boolean) {
    if (flag !== undefined) {
      this.getCategory(flag);
    }

  }

  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();

  public onSave(e: any, flag: string): void {
    debugger;
    e.preventDefault();
    this.editForm.value.Email = this.email;
    this.editForm.value.ProfitType = this.isNew;
    if (!this.openBlockaddCategory) {
      this.editForm.value.SelectCategoryId = this.SelectCategory.Id;
    }  
    this.save.emit(this.editForm.value);
    this.active = false;
  }

  public onCancel(e: any): void {
    e.preventDefault();
    this.closeForm();
  }

  private closeForm(): void {
    this.active = false;
    this.cancel.emit();
  }

  addNewCategory(flag) {
    if (flag) {
      this.openBlockaddCategory = true;
    } else {
      this.openBlockaddCategory = false;
    }

  }

  public getCategory(status: boolean) {
    this.categoryService.getAllCategotys(status)
      .subscribe((result: any) => {
        this.Categorys = result;
      },
        error => {
          alert(error.error.Message);
          for (var i = 0; i < error.error.ModelState.errorLogin.length; i++) {
            alert(error.error.ModelState.errorLogin[i]);
          }
        });
  }

}
