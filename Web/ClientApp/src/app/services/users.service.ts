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
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    const options = { headers: headers };
    return this.http.post(this.autorizUrl + 'api/SampleData/WeatherForecasts', options)
      .pipe(map(((httpResponse: any) => httpResponse)));
  }

  //addResponsibilityCenter(dataItem: any) {
  //  let data = dataItem;
  //  const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  //  const options = { headers: headers };
  //  return this.http.post(this.p03940Url + "/api/responsibilityCenter/add", data, options)
  //    .pipe((httpResponse: any) => httpResponse)
  //    .catch(error => this.globalAppService.handleError(error));
  //}
  //createNewUser(user: User): Observable<User> {
  //  return this.http.post('http://localhost:14907/users', user)
  //    .pipe(map((response: Response) => response.json()));
  //}
}
