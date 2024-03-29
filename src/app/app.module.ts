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
import { PrivateConfig } from '../private_config';
import { AgmCoreModule } from '@agm/core';
import { EmployeeTableComponent } from './facilities/employee-details/search-employee/employee-table/employee-table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { MapService } from './shared/services/map.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComplainListComponent } from './facilities/customer-support/complain-list/complain-list.component';
import { SignInComponent } from './wrapper/sign-in/sign-in.component';
import { RegisterComponent } from './wrapper/register/register.component';
import { FireAuthService } from './shared/services/fire-auth.service'
import { DisplayScheduleComponent } from './facilities/schedule/display-schedule/display-schedule.component';
import { GenerateNewScheduleComponent } from './facilities/schedule/generate-new-schedule/generate-new-schedule.component';
import { FilterPipe } from './shared/pipes/search-filter.pipe';
import { FareService } from './shared/services/fare.service';
import { RegisterKeyService } from './shared/services/register-key.service';
import { EmployeeService } from './shared/services/employee.service';
import { CustomercareService } from './shared/services/customercare.service';
import { BusStopsService } from './shared/services/bus-stops.service';
import { TimetableComponent } from './facilities/schedule/display-schedule/timetable/timetable.component';

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
    DisplayScheduleComponent,
    GenerateNewScheduleComponent,
    RegisterNewEmployeeComponent,
    MapComponent,
    EmployeeTableComponent,
    ComplainListComponent,
    SignInComponent,
    RegisterComponent,
    FilterPipe,
    TimetableComponent,
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
  providers: [
    MapService, 
    FireAuthService,
    FareService,
    RegisterKeyService,
    EmployeeService,
    CustomercareService,
    BusStopsService,
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }

