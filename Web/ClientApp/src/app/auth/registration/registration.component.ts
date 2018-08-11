import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';

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
      .subscribe((data) => {
          debugger;
          if (data.IsRegisrer) {
            this.router.navigate(['']);
            // this.showMessage({
            // this.router.navigate([''];
            alert(data.Name + ' вы успешно зарегистрированы :)');
            //  type: 'danger'
            // });
          }
          //this.router.navigate([''], {
          //  queryParams: {
          //    nowCanLogin: true
          //  }
          //});
        },
      error => {
        debugger;
          alert(error.error.Message);
        for (var i = 0; i < error.error.ModelState.error.length; i++) {
          alert(error.error.ModelState.error[i]);
          }

        });
  }

  forbiddenEmails(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      //this.usersService.getUserByEmail(control.value)
      //  .subscribe((user: User) => {
      //    if (user) {
      //      resolve({ forbiddenEmail: true });
      //    } else {
      //      resolve(null);
      //    }
      //  });
    });
  }

}
