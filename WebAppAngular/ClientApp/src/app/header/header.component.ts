import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from 'ngx-store';
import { AuthService } from "../services/auth.service";
import { UsersService } from "../services/users.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

  date: Date = new Date();
  user: any;
  @LocalStorage({ key: 'user' }) userName: string;

  constructor(private authService: AuthService,
    private router: Router,
    private usersService : UsersService) {
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
    debugger;
    delete this.userName[''];
    localStorage.removeItem("ngx_email");
    localStorage.removeItem("ngx_user");
    localStorage.removeItem("ngx_localStorageToken");
    this.usersService.updateStatusAus(false);
    this.router.navigate(['']);
  }

}
