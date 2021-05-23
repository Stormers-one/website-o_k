import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { Location } from '@angular/common';
import Fare from 'src/app/shared/models/fare';
import { FareService  } from 'src/app/shared/services/fare.service';

@Component({
  selector: 'app-fare-update',
  templateUrl: './fare-update.component.html',
  styleUrls: ['./fare-update.component.css']
})
export class FareUpdateComponent implements OnInit {
  goBack(){
    this.router.navigate(['/']).then(success => console.log('navigation success?' , success))
    .catch(console.error);   
  }
  goBackOnce() {
    this._location.back();
  }
  constructor(private router: Router, private _location: Location, private fareservice : FareService) { }
  document: Fare = new Fare();
  submitted = false;

  ngOnInit(): void {
  }

  saveFare():void{
    this.fareservice.updateFare(this.document).then(()=>{
      console.log("New Fare Updated ");
      this.submitted = true;
    });
  }
  newFare():void{
    this.submitted = false;
    this.document = new Fare();
  }

}
