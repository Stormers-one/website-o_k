import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';  
import { Location } from '@angular/common';
import Busdata from 'src/app/shared/models/busdata';
import { MapService } from 'src/app/shared/services/map.service';
//import { FormGroup, FormControl, Validators} from '@angular/forms';
//import { type } from 'os';


@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {
  goBack(){
    this.router.navigate(['/']).then(success => console.log('navigation success?' , success))
    .catch(console.error);   
  }
  goToPage(link:string){
    this.router.navigate(['/facilities/tracking/'+link]).then(success => console.log('navigation success?' , success))
    .catch(console.error);   
  }
  Busdata : Busdata[] =[];
  id = '';
  constructor(private router: Router,private _location: Location,private MapService: MapService) {
    this.Busdata =[];

    }

  // form = new FormGroup({
  //   website: new FormControl('', Validators.required)
  // });
  
  // get f(){
  //   return this.form.controls;
  // }
  
  // submit(){
  //   console.log(this.form.value);
  // }

 Bus_id :string[]=[]
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

