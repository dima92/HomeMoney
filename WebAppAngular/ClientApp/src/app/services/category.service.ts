import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Inject, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class CategoryService {
  private autorizUrl: string;
  baseUrl: string;
  utorizUrl: string;


  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, @Inject('AUTORIZ_URL') autorizUrl: string) {
    this.autorizUrl = autorizUrl;
    this.baseUrl = baseUrl;
  }

  getAllCategotys(flag:boolean) { // true - приход , false - расход
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    const options = { headers: headers };
    return this.http.get(this.autorizUrl + "/api/categoty/getAllCategotys?status=" + flag, options)
      .pipe(map(((httpResponse: any) => httpResponse)));
  }


}

