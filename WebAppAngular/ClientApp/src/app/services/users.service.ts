import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { User } from '../models/user.model';

@Injectable()
export class UsersService {
  private autorizUrl: string;
  baseUrl: string;
  utorizUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, @Inject('AUTORIZ_URL') autorizUrl: string) {
    this.autorizUrl = autorizUrl;
    this.baseUrl = baseUrl;
  }

  getUserByEmail(formData: any) {
    let model = formData;
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    const options = { headers: headers };
    return this.http.post(this.autorizUrl + "/api/Account/LogIn", model, options)
      .pipe(map(((httpResponse: any) => httpResponse)));
  }

  register(dataItem: any) {
    let model = dataItem;
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    const options = { headers: headers };
    return this.http.post(this.autorizUrl + 'api/Account/Register',model, options)
      .pipe(map(((httpResponse: any) => httpResponse)));
  }

  //getResurs(token: string) {
  //  let model = token;
  //  debugger;
  //  let headers = new Headers();
  //  headers.append('Content-Type', 'application/json');
  //  headers.append({ 'Authorization': 'Bearer' + token });
  // // const headers = new HttpHeaders({ 'Authorization': 'Bearer' + token});
  //  const options = { headers: headers };
  //  return this.http.get(this.autorizUrl + 'api/Values/get', options)
  //    .pipe(map(((httpResponse: any) => httpResponse)));
  //}
//}

getResurs(token: string) {
  let model = token;
  debugger;
  let url = this.autorizUrl + 'api/Values/get';
  return Observable.create((observer: any) => {
    let xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader("Authorization", "Bearer " + token);
    xhr.responseType = 'json';

    xhr.onreadystatechange = function () {
      debugger;
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          //var contentType = 'application/vnd.ms-excel';
          //var blob = new Blob([xhr.response], { type: contentType });
          //observer.next(blob);
          //observer.complete();
          return xhr.response;

        } else {
          observer.error(xhr.response);
        }
      }
    }
    xhr.send();
  });
}}
