import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebStorageModule } from 'ngx-store';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { NotFoundComponent } from "./not-found/NotFoundComponent.component";
import { LoginComponent } from "./auth/login/login.component"
import { RegistrationComponent } from './auth/registration/registration.component';
import { HeaderComponent } from "./header/header.component";
import { BillPageComponent } from './bill-page/bill-page.component';
import { BillCardComponent } from './bill-page/bill-card/bill-card.component';
import { CurrencyCardComponent } from './bill-page/currency-card/currency-card.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import { AddCategoryComponent } from './records-page/add-category/add-category.component';
import { AddEventComponent } from './records-page/add-event/add-event.component';
import { EditCategoryComponent } from './records-page/edit-category/edit-category.component';
import { HistoryChartComponent } from './history-chart/history-chart.component';
import { HistoryEventsComponent } from './history-events/history-events.component';
import { HistoryDetailComponent } from './history-detail/history-detail.component';
import { HistoryFilterComponent } from './history-filter/history-filter.component';
import { LoaderComponent } from './loader/loader.component';

import { AuthService } from "./services/auth.service";
import { UsersService } from "./services/users.service";
import { BillService } from './services/bill.service';
import { CategoriesService } from './services/categories.service';
import { EventsService } from './services/events.service';

import { DropdownDirective } from './directives/dropdown.directive';

import { MomentPipe } from './pipes/moment.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainPageComponent,
    CounterComponent,
    FetchDataComponent,
    HeaderComponent,
    NotFoundComponent,
    LoginComponent,
    RegistrationComponent,
    BillPageComponent,
    BillCardComponent,
    CurrencyCardComponent,
    RecordsPageComponent,
    AddCategoryComponent,
    AddEventComponent,
    EditCategoryComponent,
    LoaderComponent,
    DropdownDirective,
    MomentPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    WebStorageModule,
    GridModule,
	NgxChartsModule
    
    RouterModule.forRoot([
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: "registration", component: RegistrationComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: "main", component: MainPageComponent },
      { path: "bill", component: BillPageComponent },
      { path: "records", component: RecordsPageComponent },
      { path: "**", component: NotFoundComponent }
    ])
  ],
  providers: [
    AuthService,
    UsersService,
    BillService,
    CategoriesService,
    EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
