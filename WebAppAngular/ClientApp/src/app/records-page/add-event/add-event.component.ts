import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';


import { Event } from '../../models/event.model';
import { Subscription } from 'rxjs/Subscription';
import { Bill } from '../../models/bill.model';
import { BillService } from '../../services/bill.service';
import { EventsService } from '../../services/events.service';
import { Message } from '../../models/message';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit, OnDestroy {

  sub1: Subscription;
  sub2: Subscription;
  @Input() categories: Category[] = [];

  types = [
    {type: 'income', label: 'Доход'},
    {type: 'outcome', label: 'Расход'}
  ];

  message: Message;

  constructor(private eventsService: EventsService,
              private billService: BillService) {
  }

  ngOnInit() {
    this.message = new Message('danger', '');
  }

  private showMessage(text: string) {
    this.message.text = text;
    window.setTimeout(() => this.message.text = '', 5000);
  }

  onSubmit(form: NgForm) {
    let {amount, description, category, type} = form.value;
    if (amount < 0) amount *= -1;

    const event = new Event(
      type, amount, +category,
      moment().format('DD.MM.YYYY HH:mm:ss'), description
    );

    this.sub1 = this.billService.getBill()
      .subscribe((bill: Bill) => {
        let value = 0;
        if (type === 'outcome') {
          if (amount > bill.value) {
            this.showMessage(`На счету недостаточно средств. Вам нехватает ${amount - bill.value}`);
            return;
          } else {
            value = bill.value - amount;
          }
        } else {
          value = bill.value + amount;
        }

        this.sub2 = this.billService.updateBill({value, currency: bill.currency})
          .mergeMap(() => this.eventsService.addEvent(event))
          .subscribe(() => {
            form.setValue({
              amount: 0,
              description: ' ',
              category: 1,
              type: 'outcome'
            });
          });
      });
  }

  ngOnDestroy() {
    if (this.sub1) this.sub1.unsubscribe();
    if (this.sub2) this.sub2.unsubscribe();
  }

}
