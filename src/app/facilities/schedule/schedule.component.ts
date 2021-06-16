import { Component, OnInit } from '@angular/core';
import { DisplayScheduleComponent } from './display-schedule/display-schedule.component';
import { GenerateNewScheduleComponent } from './generate-new-schedule/generate-new-schedule.component';
import { Router } from '@angular/router';  
import { Location } from '@angular/common';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  goToPage(link:string){
    this.router.navigateByUrl('/facilities/schedule/'+link).then(success => console.log('navigation success?' , success))
    .catch(console.error);   
  }
  goBack(){
    this.router.navigate(['/facilities/']).then(success => console.log('navigation success?' , success))
    .catch(console.error);   
  }
  goBackOnce(){
    this._location.back();
  }
  constructor(private router: Router,private _location: Location) {}

  ngOnInit(): void {
  }

}
