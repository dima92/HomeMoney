import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class UsersService {
  constructor(private http: Http) {
  }

  //getUserByEmail(email: string): Observable<User> {
  //  return this.http.get(`users?email=${email}`)
  //    .map((users: User[]) => users[0] ? users[0] : undefined);
  //}
}

