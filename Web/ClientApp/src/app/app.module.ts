import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
//import { NavMenuComponent } from './nav-menu/nav-menu.component';
//import { HomeComponent } from './home/home.component';
//import { CounterComponent } from './counter/counter.component';
//import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from "./auth/login/login.component"
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoaderComponent } from "./components/loader/loader.component";
import { NotFoundComponent } from "./components/not-found/NotFoundComponent.component";
//import { SystemComponent } from './system.component';
import { HeaderComponent } from "./components/header/header.component";

import { DropdownDirective } from './directives/dropdown.directive';

import { AuthService } from "./services/auth.service"
import { UsersService } from "./services/users.service"

import { WebStorageModule } from 'ngx-store';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    //NavMenuComponent,
    //HomeComponent,
    //CounterComponent,
    //FetchDataComponent,
    LoginComponent,
    RegistrationComponent,
    LoaderComponent,
    NotFoundComponent,
    //SystemComponent,
    HeaderComponent,
    DropdownDirective
  
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    WebStorageModule,
    AppRoutingModule
    //RouterModule.forRoot([
    //  //{ path: '', component: HomeComponent, pathMatch: 'full' },
    //  //{ path: 'counter', component: CounterComponent },
    //  //{ path: 'fetch-data', component: FetchDataComponent },
    //  { path: 'login', component: LoginComponent, pathMatch: 'full' },
    //  { path: 'registration', component: RegistrationComponent }
    //])
  ],
  providers: [
    AuthService,
    UsersService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
