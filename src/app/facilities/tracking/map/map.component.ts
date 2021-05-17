import { Component, OnInit } from '@angular/core';
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
  goBack(){
    this.router.navigate(['/']).then(success => console.log('navigation success?' , success))
    .catch(console.error);   
  }
  goBackOnce() {
    this._location.back();
  }
  

  Busdata : Busdata[] =[];
  id = '';
  constructor(private router: Router,private _location: Location,private MapService: MapService) {
    this.Busdata =[];
  }
  
  ngOnInit(): void {
    this.MapService.getBusdata().snapshotChanges().subscribe(data => {
      this.Busdata = data.map((a) => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        // console.log(data.name);
        return { id, ...data };
      });
    });
  }

  lat = 10.001959509869325;
  long = 76.32159091824248;
  


}

