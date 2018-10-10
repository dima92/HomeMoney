import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';
import { CookieStorage, LocalStorage, SessionStorage, WebstorableArray } from 'ngx-store';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor(private usersService: UsersService,
    private router: Router) {
  }

  @LocalStorage("localStorageToken") acsestoken: string = '';
  @LocalStorage("user") user: string = '';
 

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'name': new FormControl(null, [Validators.required]),
      'agree': new FormControl(false, [Validators.requiredTrue])
    });
  }

  onSubmit() {
    debugger;
    const { email, password, name } = this.form.value;
    const user = new User(email, password, name);

    this.usersService.register(user)
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

  forbiddenEmails(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.usersService.getUserByEmail(control.value)
        .subscribe((user: User) => {
          if (user) {
            resolve({ forbiddenEmail: true });
          } else {
            resolve(null);
          }
        });
    });
  }

}
