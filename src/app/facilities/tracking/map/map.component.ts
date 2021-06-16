import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import Busdata from 'src/app/shared/models/busdata';
import { MapService } from 'src/app/shared/services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  goBack() {
    this.router.navigate(['/']).then(success => console.log('navigation success?', success))
      .catch(console.error);
  }
  goBackOnce() {
    this._location.back();
  }
  Busdata: any;
  data:any;
 
  constructor(private router: Router, private _location: Location, private activatedRoute: ActivatedRoute) {
    this.Busdata = this.router.getCurrentNavigation()?.extras.state;
    if(this.Busdata==null){
      this.goBackOnce()
    }
    
  }

  ngOnInit() {
    // this.Busdata = this.router.routerState.snapshot.root.data;
    this.Busdata = history.state;
    this.lat = Number(this.Busdata[0]["Latitude"]);
    this.long = Number(this.Busdata[0]["Longitude"]);

  }
  lat: number = 0.0;
  long: number = 0.0;
  zoom: number = 18;

}

