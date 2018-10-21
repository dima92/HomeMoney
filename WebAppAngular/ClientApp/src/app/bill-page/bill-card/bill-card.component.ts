import { Component, Input, OnInit } from '@angular/core';
import { Bill } from '../../models/bill.model';


@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.css']
})
export class BillCardComponent implements OnInit {

  @Input() bill: Bill;
  @Input() currency: any;

  dollar: number;
  euro: number;

  constructor() { }

  ngOnInit() {
    debugger;
    const { rates } = this.currency;
    this.dollar = undefined;// rates['USD'] * this.bill.value;
    this.euro = undefined; //rates['EUR'] * this.bill.value;
  }

}
