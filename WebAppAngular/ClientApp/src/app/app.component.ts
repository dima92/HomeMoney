import { Component } from '@angular/core';
import { UsersService } from "./services/users.service";
import { LocalStorage } from 'ngx-store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isAutoriz = false;
  user: any;
  @LocalStorage({ key: 'user' }) userName: string;
  constructor(private usersService: UsersService,
    private router: Router) {
    this.usersService.onClick.subscribe(cnt => this.isAutoriz = cnt);
  }

  ngOnInit() {
    this.user = this.userName;
    if (this.user === null || this.user === undefined || this.user === "") {
      this.isAutoriz = false;
      this.router.navigate(['']);
    } else {
      debugger;
      this.isAutoriz = true;
      this.usersService.updateStatusAus(this.isAutoriz);
    }

  }
}
