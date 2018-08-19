import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from "../../models/user.model";
import { AuthService } from "../../services/auth.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

  date: Date = new Date();
  user: User;

  constructor(private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
