import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { TrackingComponent } from './facilities/tracking/tracking.component';
import { ScheduleComponent } from './facilities/schedule/schedule.component';
import { CustomerSupportComponent } from './facilities/customer-support/customer-support.component';
import { FareUpdateComponent } from './facilities/fare-update/fare-update.component';
import { EmployeeDetailsComponent } from './facilities/employee-details/employee-details.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { SearchEmployeeComponent } from './facilities/employee-details/search-employee/search-employee.component';
import { RegisterNewEmployeeComponent } from './facilities/employee-details/register-new-employee/register-new-employee.component';
import { FormsModule } from '@angular/forms';

// Firebase integration
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

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
    RegisterNewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'website-o_k'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    AngularFireStorageModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
