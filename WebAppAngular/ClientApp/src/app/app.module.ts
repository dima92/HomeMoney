import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SidebarComponent } from "./sidebar/sidebar.component";
//import { HomeComponent } from './home/home.component';
import { MainPageComponent } from "./main-page/main-page.component";
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { NotFoundComponent } from "./not-found/NotFoundComponent.component";
import { LoginComponent } from "./auth/login/login.component"
import { RegistrationComponent } from './auth/registration/registration.component';
import { HeaderComponent } from "./header/header.component";

import { AuthService } from "./services/auth.service";
import { UsersService } from "./services/users.service";

import { WebStorageModule } from 'ngx-store';
import { DropdownDirective } from './directives/dropdown.directive';

import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
  declarations: [
    AppComponent,
    //NavMenuComponent,
    SidebarComponent,
    MainPageComponent,
    CounterComponent,
    FetchDataComponent,
    HeaderComponent,
    NotFoundComponent,
    LoginComponent,
    RegistrationComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    WebStorageModule,
    GridModule,
    
    RouterModule.forRoot([
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: "registration", component: RegistrationComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: "main", component: MainPageComponent },
      { path: "**", component: NotFoundComponent }
    ])
  ],
  providers: [
    AuthService,
    UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
