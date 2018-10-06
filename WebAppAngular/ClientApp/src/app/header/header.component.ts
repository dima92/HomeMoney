import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from "../services/auth.service";
import { CookieStorage, LocalStorage, SessionStorage, WebstorableArray } from 'ngx-store';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

  date: Date = new Date();
  user: any;
  @LocalStorage({ key: 'user' }) userName: string;

  constructor(private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
    this.user = this.userName;
    if (this.user === null || this.user === undefined || this.user === "") {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['/main']);
    }
    //this.user = JSON.parse(window.localStorage.getItem('user'));
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
