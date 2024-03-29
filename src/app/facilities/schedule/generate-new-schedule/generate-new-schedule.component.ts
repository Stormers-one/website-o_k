import { Component, OnInit , OnChanges, SimpleChanges ,Input  } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import Schedule from 'src/app/shared/models/schedule';
import { ScheduleService } from 'src/app/shared/services/schedule.service';
import { SuggestAPIService } from 'src/app/shared/services/suggest-api.service';


@Component({
  selector: 'app-generate-new-schedule',
  templateUrl: './generate-new-schedule.component.html',
  styleUrls: ['./generate-new-schedule.component.css']
})
export class GenerateNewScheduleComponent implements OnInit  {

  @Input() schedule: Schedule[];

  goBack() {
    this.router.navigate(['/facilities/schedule/']).then(success => console.log('navigation success?', success)).catch(console.error);
  }
  goBackOnce() {
    this._location.back();
  }

  constructor(
    private router: Router,
     private _location: Location,
     private scheduleService: ScheduleService,
     private api: SuggestAPIService) {
    this.schedule=[];
    this.loading = false;
  }
  loading;
  async suggestAPI(){
    this.loading = true;
    let res = await new Promise(
      (resolve, reject)=>{
        resolve(this.api.getJSONRepos())
      }
    ) 
    this.loading = false
  }

  ngOnInit(): void {
    this.scheduleService.getSchedule().snapshotChanges().subscribe(data => {
      this.schedule = data.map((a) => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        console.log(data);
        return { ...data };
      });
    });
  }
  buttonPressed() {
    console.log("Button pressed");
  }
}
