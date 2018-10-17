import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from 'ngx-store';
import { AuthService } from "../services/auth.service";




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
   
  }

  onLogout() {
    this.authService.logout; 
    this.router.navigate(['/']);
  }

}
