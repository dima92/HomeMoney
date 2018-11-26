import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';
import { Category } from '../../models/category.model';
import { CategoriesService } from '../../services/categories.service';
import { Message } from '../../models/message';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit, OnDestroy {
  @Input() categories: Array<Category> = [];
  @Output() onCategoryEdit = new EventEmitter<Category>();

  currentCategoryId = 1;
  currentCategory: Category;
  message: Message;

  sub1: Subscription;

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.message = new Message('success', '');
    this.onCategoryChange();
  }

  onCategoryChange() {
    let index = this.categories.indexOf((c => c.id === this.currentCategoryId) as any);
    this.currentCategory = this.categories[index];
  }

  onSubmit(form: NgForm) {
    let {capacity, name} = form.value;
    if (capacity < 0) capacity *= -1;

    const category = new Category(name, capacity, +this.currentCategoryId);

    this.sub1 = this.categoriesService.updateCategory(category)
      .subscribe((category: Category) => {
        this.onCategoryEdit.emit(category);
        this.message.text = 'Категория успешно отредактирована.';
        window.setTimeout(() => this.message.text = '', 5000);
      });
  }

  ngOnDestroy() {
    if (this.sub1) this.sub1.unsubscribe();
  }

}
