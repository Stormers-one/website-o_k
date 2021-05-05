import { Component, OnInit } from '@angular/core';
import { DisplayScheduleComponent } from '../schedule/display-schedule/display-schedule.component';
import { GenerateNewScheduleComponent } from '../schedule/generate-new-schedule/generate-new-schedule.component';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  goToPage(link:string){
    this.router.navigate(['/'+link]).then(success => console.log('navigation success?' , success))
    .catch(console.error);   
  }
  goBack(){
    this.router.navigate(['/']).then(success => console.log('navigation success?' , success))
    .catch(console.error);   
  }
  constructor(private router: Router,) {}

  ngOnInit(): void {
  }

}
