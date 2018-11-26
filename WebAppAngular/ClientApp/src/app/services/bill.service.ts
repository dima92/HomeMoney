import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Bill } from '../models/bill.model';



@Injectable()
export class BillService{
  constructor(public http: Http) {  
  }

  date: Date = new Date();
  getBill(): Observable<Bill> {
    return this.http.get(`http://www.nbrb.by/API/ExRates/Rates?onDate=${this.date}&Periodicity=0`)
      .pipe
        (map((response: Response) => response.json())
      );
  }

  updateBill(bill: Bill): Observable<Bill> {
    return this.http.put('bill', bill)
      .pipe
        (map((response: Response) => response.json())
      );
  }

  getCurrency(): Observable<any> {
    return this.http.get(`http://www.nbrb.by/API/ExRates/Rates?onDate=${this.date}&Periodicity=0`)
      .pipe
        (map((response: Response) => response.json())
      );
  }

}
