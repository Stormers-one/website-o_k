import { Component, OnInit } from '@angular/core';
import { CustomerSupportComponent } from '../customer-support/customer-support.component';
import { FareUpdateComponent } from '../fare-update/fare-update.component';
import { ScheduleComponent } from '../schedule/schedule.component';
import { TrackingComponent } from '../tracking/tracking.component';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {
  goToPage(link:string){
    this.router.navigate(['/'+link]).then(success => console.log('navigation success?' , success))
    .catch(console.error);   
  }
  constructor(private router: Router,) {}

  ngOnInit(): void {
  }

}
