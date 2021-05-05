import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-new-schedule',
  templateUrl: './generate-new-schedule.component.html',
  styleUrls: ['./generate-new-schedule.component.css']
})
export class GenerateNewScheduleComponent implements OnInit {
  goBack(){
    this.router.navigate(['/']).then(success => console.log('navigation success?' , success))
    .catch(console.error);   
  }
  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

}
