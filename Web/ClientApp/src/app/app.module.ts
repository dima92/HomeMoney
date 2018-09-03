import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { LoginComponent } from "./auth/login/login.component"
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoaderComponent } from "./components/loader/loader.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { HeaderComponent } from "./components/header/header.component";
import { SystemComponent } from "./system.component";
 
import {DropdownDirective} from "./directives/dropdown.directive";

import { AuthService } from "./services/auth.service"
import { UsersService } from "./services/users.service"




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    RegistrationComponent,
    LoaderComponent,
    NotFoundComponent,
    HeaderComponent,
    SystemComponent,
    DropdownDirective

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    UsersService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
