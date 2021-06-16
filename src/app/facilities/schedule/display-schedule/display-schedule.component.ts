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
  exp = new RegExp('([\w ]+)[^(\w+)]?')
  async getRouteName(query:string){
    let exp = new RegExp(/([\w ]+)[^(\w+)]?/)
    let s = query;
    let c = s.split('')
    let res = s.match(exp)![0]
    res = res.trim().toLocaleLowerCase()
    let listA = res.split(" ")
    let newList = []
    for(var r of listA){
        if(r!=='bs'){
            newList.push(r)
        }
    }
    res = newList.join(' ')
    res = res[0].toUpperCase() + res.substr(1)
    return res
}
  async submit(){
    let obj
    let _from = await this.getRouteName(this.selectedBusFrom)
    let _to = await this.getRouteName(this.selectedBusTo)
    let query = _from + ' - ' + _to
    console.log(query)
    await this.busStopService.getRoutes(query);
    // this.router.navigateByUrl('/facilities/schedule/display-schedule/timetable/', { state: obj })
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
    this.enteredTextTo = false;
  }
  changeTo(){
    if(this.selectedBusTo!==''){
      this.enteredTextTo = true;
    }
    else{
      this.enteredTextTo= false;
    }
    this.enteredTextFrom = false;
  }
  ngOnInit(): void {
    this.busStopService.getStops().snapshotChanges().subscribe(data => {
      this.stops = data.map((a) => {
        const data = a.payload.doc.data();
        // console.log(data.name);
        return {...data};
      });
      this.stopNames = this.stops.map((e)=>e['Stop Name']);
    });
  }

}
