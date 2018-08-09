import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import "rxjs/operators/add/map";
import { User } from '../models/user.model';

@Injectable()
export class UsersService {
  constructor(private http: Http) {
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get(`http://localhost:14907/users?email=${email}`)
      .pipe(map((response: Response) => response.json())
      .map((user: User[]) => user[0] ? user[0] : undefined));
  }

  createNewUser(user: User): Observable<User> {
    return this.http.post('http://localhost:14907/users', user)
      .pipe(map((response: Response) => response.json()));
  }
}
