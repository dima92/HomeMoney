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
import { MainFormAddEdit} from "./main-form-add-edit/main-form-add-edit.component"
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { NotFoundComponent } from "./not-found/NotFoundComponent.component";
import { LoginComponent } from "./auth/login/login.component"
import { RegistrationComponent } from './auth/registration/registration.component';
import { HeaderComponent } from "./header/header.component";

import { AuthService } from "./services/auth.service";
import { UsersService } from "./services/users.service";
import { CategoryService } from "./services/category.service";

import { WebStorageModule } from 'ngx-store';
import { DropdownDirective } from './directives/dropdown.directive';

import { GridModule } from '@progress/kendo-angular-grid';
import { WindowModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogModule, WindowRef } from '@progress/kendo-angular-dialog';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { PopupModule } from '@progress/kendo-angular-popup';
import { ResizeSensorModule } from '@progress/kendo-angular-resize-sensor/dist/es2015';
//import { ClickOutsideModule } from 'ng4-click-outside';
import { InputsModule } from '@progress/kendo-angular-inputs';

import { TreeViewModule } from '@progress/kendo-angular-treeview';
import '@progress/kendo-angular-intl/locales/ru/all';
//import { KendoMessageService } from "../../../shared/services/kendo-message.service"
import { MessageService } from '@progress/kendo-angular-l10n';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    DropdownDirective,
    MainFormAddEdit
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    WebStorageModule,
    GridModule,
    WindowModule,
    ButtonsModule,
    DialogModule,
    ChartsModule,
    DropDownsModule,
    TooltipModule,
    LayoutModule,
    DateInputsModule,
    InputsModule,
    BrowserAnimationsModule,
    TreeViewModule,
    PopupModule,
    ResizeSensorModule,
    
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
    UsersService,
    CategoryService,
    WindowRef,
    MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
