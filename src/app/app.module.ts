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


// Firebase integration
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MapComponent } from './facilities/tracking/map/map.component';
import {PrivateConfig } from '../private_config';
import { AgmCoreModule } from '@agm/core';
import { EmployeeTableComponent } from './facilities/employee-details/search-employee/employee-table/employee-table.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

import { MapService } from './shared/services/map.service';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    MapComponent,
    EmployeeTableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'website-o_k'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireStorageModule ,
    AgmCoreModule.forRoot({apiKey: PrivateConfig.google_maps.apiKey,
    libraries: ['places']
    }),
    NgxPageScrollCoreModule.forRoot({ duration: 1600 }),
    NgxPaginationModule
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }

