import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
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
  @Input() Busdata: any;


  constructor(private router: Router, private _location: Location) {
  }

  ngOnInit() {
    this.Busdata = this.router.routerState.snapshot.root.data["Bustype"];

  }
  
  ngOnDestroy() {
    this.Busdata;
  }


  lat = 10.001959509869325;
  long = 76.32159091824248;



}

