import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { BusStopsService } from 'src/app/shared/services/bus-stops.service';
import BusStop from 'src/app/shared/models/busStop';

@Component({
  selector: 'app-display-schedule',
  templateUrl: './display-schedule.component.html',
  styleUrls: ['./display-schedule.component.css']
})
export class DisplayScheduleComponent implements OnInit {
  goBack() {
    this.router.navigate(['/facilities/schedule/']).then(success => console.log('navigation success?', success))
      .catch(console.error);
  }
  goBackOnce() {
    this._location.back();
  }
  enteredTextFrom;
  enteredTextTo;
  selectedBusFrom: string;
  selectedBusTo: string;
  stopNames:any[]
  stops:any[]
  constructor(private router: Router, private _location: Location, private busStopService: BusStopsService) {
    this.selectedBusFrom = '';
    this.selectedBusTo = '';
    this.enteredTextFrom = false;
    this.enteredTextTo = false;
    this.stopNames = []
    this.stops = []
  }
  sendToFieldFrom(opt:string){
    this.selectedBusFrom = opt
    this.enteredTextFrom = false;
  }
  sendToFieldTo(opt:string){
    this.selectedBusTo = opt
    this.enteredTextTo = false;
  }
  changeFrom(){
    if(this.selectedBusFrom!==''){
      this.enteredTextFrom = true;
    }
    else{
      this.enteredTextFrom = false;
    }
  }
  changeTo(){
    if(this.selectedBusTo!==''){
      this.enteredTextTo = true;
    }
    else{
      this.enteredTextTo= false;
    }
  }
  ngOnInit(): void {
    this.busStopService.getStops().snapshotChanges().subscribe(data => {
      this.stops = data.map((a) => {
        const data = a.payload.doc.data();
        // console.log(data.name);
        return {...data};
      });
      console.log(this.stops)

      this.stopNames = this.stops.map((e)=>e['Stop Name']);
      console.log(this.stopNames)
    });
  }

}
