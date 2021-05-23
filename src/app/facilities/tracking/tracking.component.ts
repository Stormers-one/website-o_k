import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import Busdata from 'src/app/shared/models/busdata';
import { MapService } from 'src/app/shared/services/map.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
//import { type } from 'os';


@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {
  goBack() {
    this.router.navigate(['/']).then(success => console.log('navigation success?', success))
      .catch(console.error);
  }
  goToPage(link: string) {
    console.log(this.dropDownForm.value['busInfo']);
    let res = this.filterData(this.dropDownForm.value['busInfo']);
    // console.log(res);
    this.router.navigateByUrl('/facilities/tracking/' + link, {state: res}).then(success => console.log('navigation success?', success))
      .catch(console.error);
  }
  result:any = Busdata;

  //////////////////////////////////////
  ///////// Filtering bus data /////////
  filterData(opt:any):Busdata{
    this.result = this.Busdata.filter(function(buses) {
      return buses.Bus_id == opt;
    });

    return this.result;
  }

  //////////////////////////////////////
  ///////// Drop down form code ////////

  dropDownForm = new FormGroup({
    busInfo: new FormControl('', Validators.required)
  });

  get validateFunction(){
    return this.dropDownForm.controls;
  }

  //////////////////////////////////////

  Busdata: Busdata[] = [];
  id = '';
  constructor(private router: Router, private _location: Location, private MapService: MapService) {
    this.Busdata = [];

  }

  Bus_id: String = "";
  setBusID(id: String): void {
    this.Bus_id = id;
  }

  ngOnInit(): void {
    this.MapService.getBusdata().snapshotChanges().subscribe(data => {
      this.Busdata = data.map((a) => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        //console.log(`hello${data.Latitude}`);
        return { id, ...data };
      });
    });
    //this.Bus_id=this.Busdata[].Bus_id
  }

}

