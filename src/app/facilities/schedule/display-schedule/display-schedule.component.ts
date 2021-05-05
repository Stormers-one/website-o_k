import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-schedule',
  templateUrl: './display-schedule.component.html',
  styleUrls: ['./display-schedule.component.css']
})
export class DisplayScheduleComponent implements OnInit {
  goBack(){
    this.router.navigate(['/']).then(success => console.log('navigation success?' , success))
    .catch(console.error);   
  }
  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

}
