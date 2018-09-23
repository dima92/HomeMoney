import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { UsersService } from '../../services/users.service';
import { Message } from '../../models/message';
import { AuthService } from '../../services/auth.service';
import { CookieStorage, LocalStorage, SessionStorage, WebstorableArray } from 'ngx-store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;
  @LocalStorage("localStorageToken") acsestoken: string = '';
  @LocalStorage("user") user: string = '';

  constructor(private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  

  ngOnInit() {
    debugger;

    this.message = new Message('danger', '');

    this.route.queryParams
      .subscribe((params: Params) => {
        if (params['nowCanLogin']) {
          this.showMessage({
            text: 'Теперь вы можете зайти в систему',
            type: 'success'
          });
        }
      });

    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  private showMessage(message: Message) {
    this.message = message;

    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

  onSubmit() {
    const formData = this.form.value;

    this.usersService.getUserByEmail(formData)
      .subscribe((token: any) => {
          debugger;
        if (token !== null) {
          this.acsestoken = token.access_token;
          this.user = token.Name;
            this.router.navigate(['main']);
          }

        },
        error => {
          alert(error.error.Message);
          for (var i = 0; i < error.error.ModelState.errorLogin.length; i++) {
            alert(error.error.ModelState.errorLogin[i]);
          }
          
        });

  }

  testClick() {
    debugger;
    let token = this.acsestoken;
    this.usersService.getResurs(token)
      .subscribe((toren: any) => {
          debugger;      
        },
        error => {
          alert(error.error.Message);
          for (var i = 0; i < error.error.ModelState.errorLogin.length; i++) {
            alert(error.error.ModelState.errorLogin[i]);
          }

        });
  }

}
