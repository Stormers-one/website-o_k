import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FacilitiesComponent } from './facilities/facilities.component';
import { TrackingComponent } from './tracking/tracking.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { FareUpdateComponent } from './fare-update/fare-update.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { SearchEmployeeComponent } from './employee-details/search-employee/search-employee.component';
import { RegisterNewEmployeeComponent } from './employee-details/register-new-employee/register-new-employee.component';

const routes: Routes = [
  { path: '', component: FacilitiesComponent },
  { path: 'tracking', component: TrackingComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'customerSupport', component: CustomerSupportComponent },
  { path: 'fareUpdate', component: FareUpdateComponent },
  { path: 'employeeDetails', component: EmployeeDetailsComponent },
  { path: 'mainBanner', component: MainBannerComponent },
  { path: 'searchEmployee', component: SearchEmployeeComponent },
  { path: 'registerEmployee', component: RegisterNewEmployeeComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
