import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FacilitiesComponent } from './facilities/facilities.component';
import { TrackingComponent } from './facilities/tracking/tracking.component';
import { ScheduleComponent } from './facilities/schedule/schedule.component';
import { CustomerSupportComponent } from './facilities/customer-support/customer-support.component';
import { FareUpdateComponent } from './facilities/fare-update/fare-update.component';
import { EmployeeDetailsComponent } from './facilities/employee-details/employee-details.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { SearchEmployeeComponent } from './facilities/employee-details/search-employee/search-employee.component';
import { RegisterNewEmployeeComponent } from './facilities/employee-details/register-new-employee/register-new-employee.component';
import { DisplayScheduleComponent } from './facilities/schedule/display-schedule/display-schedule.component'
import { GenerateNewScheduleComponent } from './facilities/schedule/generate-new-schedule/generate-new-schedule.component'
import { MapComponent } from './facilities/tracking/map/map.component';
import { ComplainListComponent } from './facilities/customer-support/complain-list/complain-list.component';
import { SignInComponent } from './wrapper/sign-in/sign-in.component';
import { RegisterComponent } from './wrapper/register/register.component';
import { AppComponent } from './app.component';
import { TimetableComponent } from './facilities/schedule/display-schedule/timetable/timetable.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'facilities/tracking', component: TrackingComponent },
  { path: 'facilities/tracking/map', component: MapComponent },
  { path: 'facilities/schedule', component: ScheduleComponent },
  { path: 'facilities/schedule/display-schedule', component: DisplayScheduleComponent },
  { path: 'facilities/schedule/generate-schedule', component: GenerateNewScheduleComponent },
  { path: 'facilities/schedule', component: ScheduleComponent },
  { path: 'facilities/customerSupport', component: CustomerSupportComponent },
  { path: 'facilities/fareUpdate', component: FareUpdateComponent },
  { path: 'facilities/employeeDetails', component: EmployeeDetailsComponent },
  { path: 'mainBanner', component: MainBannerComponent },
  { path: 'facilities/employeeDetails/searchEmployee', component: SearchEmployeeComponent },
  { path: 'facilities/employeeDetails/registerEmployee', component: RegisterNewEmployeeComponent },
  { path: 'facilities/customerSupport/complain-list', component: ComplainListComponent },
  { path: 'facilities/schedule/display-schedule/timetable', component: TimetableComponent }



  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
