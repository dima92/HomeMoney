import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';
import { Bill } from '../models/bill.model';
import { BillService } from '../services/bill.service';


@Component({
  selector: 'app-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.css']
})
export class BillPageComponent implements OnInit, OnDestroy {
  sub1: Subscription;
  sub2: Subscription;

  currency: Array<any> = [];
  bill: Bill;

  isLoaded = false;

  constructor(private billService: BillService) { }

  ngOnInit() {
    this.sub1 = Observable.combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency()
    ).subscribe((data: [Bill, any]) => {
      [this.bill, this.currency] = data;
      this.filterCurrency();
      this.isLoaded = true;
    });
  }

  filterCurrency() {
    this.currency = this.currency.filter(c => c.Cur_ID === 145 || c.Cur_ID === 292 || c.Cur_ID === 298);

  }

  onRefresh() {
    this.isLoaded = false;
    this.sub2 = this.billService.getCurrency()    
      .subscribe((currency: any) => {
        this.currency = currency;
        this.filterCurrency();
        this.isLoaded = true;
      });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    if (this.sub2) {
      this.sub2.unsubscribe();
    }
  }

}
