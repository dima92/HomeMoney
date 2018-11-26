import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../models/event.model';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-history-events',
  templateUrl: './history-events.component.html',
  styleUrls: ['./history-events.component.css']
})
export class HistoryEventsComponent implements OnInit {
  @Input() categories: Category[] = [];
  @Input() events: Event[] = [];
  searchValue = '';
  searchPlaceholder = 'Сумма';
  searchField = 'amount';

  constructor() { }

  ngOnInit() {
    this.events.forEach((e) => {
      e.catName = String(this.categories.indexOf((c => c.id === e.category) as any));
    });
  }

  getEventClass(e: Event) {
    return {
      'label': true,
      'label-danger': e.type === 'outcome',
      'label-success': e.type === 'income'
    };
  }

  changeCriteria(field: string) {
    const namesMap = {
      amount: 'Сумма',
      date: 'Дата',
      category: 'Категория',
      type: 'Тип'
    };
    this.searchPlaceholder = namesMap[field];
    this.searchField = field;
  }

}
