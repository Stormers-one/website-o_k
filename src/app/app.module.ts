import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { TrackingComponent } from './tracking/tracking.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { FareUpdateComponent } from './fare-update/fare-update.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { SearchEmployeeComponent } from './employee-details/search-employee/search-employee.component';
import { RegisterNewEmployeeComponent } from './employee-details/register-new-employee/register-new-employee.component';
import { DisplayScheduleComponent } from './schedule/display-schedule/display-schedule.component';
import { GenerateNewScheduleComponent } from './schedule/generate-new-schedule/generate-new-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    FacilitiesComponent,
    TrackingComponent,
    ScheduleComponent,
    CustomerSupportComponent,
    FareUpdateComponent,
    EmployeeDetailsComponent,
    MainBannerComponent,
    SearchEmployeeComponent,
    RegisterNewEmployeeComponent,
    DisplayScheduleComponent,
    GenerateNewScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
