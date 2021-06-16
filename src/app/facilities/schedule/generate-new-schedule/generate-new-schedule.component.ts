import { Component, OnInit , OnChanges, SimpleChanges ,Input  } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import Schedule from 'src/app/shared/models/schedule';
import { ScheduleService } from 'src/app/shared/services/schedule.service';


@Component({
  selector: 'app-generate-new-schedule',
  templateUrl: './generate-new-schedule.component.html',
  styleUrls: ['./generate-new-schedule.component.css']
})
export class GenerateNewScheduleComponent implements OnInit  {

  @Input() schedule: Schedule[];

  goBack() {
    this.router.navigate(['/']).then(success => console.log('navigation success?', success))
      .catch(console.error);
  }
  goBackOnce() {
    this._location.back();
  }
  
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes['schedule'].currentValue);
  //   if(changes['schedule'].currentValue.length==0){
  //     this.noData = true;
  //   }
  //   else{
  //     this.noData = false;
  //   }
  // }

  constructor(private router: Router, private _location: Location,private scheduleService: ScheduleService) {
    this.schedule=[];
    
  }
 

  ngOnInit(): void {
    this.scheduleService.getSchedule().snapshotChanges().subscribe(data => {
      this.schedule = data.map((a) => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        // console.log(data.name);
        return { ...data };
      });
      console.log(this.schedule)
      // this.docLen = this.schedule.length;
      // this.employeeFiltered= this.schedule;
      
    });
    console.log(this.schedule)
  }
  
  buttonPressed() {
    console.log("Button pressed");
  }

}
