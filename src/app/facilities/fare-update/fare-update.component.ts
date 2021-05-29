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

  validators: boolean[];
  busTypes: (string | undefined)[];

  constructor(private router: Router, private _location: Location, private fareservice : FareService) {
    this.validators = [true, true, true];
    this.busTypes = [];
  }
  document: Fare = new Fare();
  submitted = false;

  ngOnInit(): void {
    this.fareservice.getFare().snapshotChanges().subscribe((data)=>{
      this.busTypes = data.map((a)=>{
        const data = a.payload.doc.data().bus_type;
        return data;
      })
    })
  }

  saveFare():void{
    this.validators = [false, false, false];
    let bus_type: string = this.document.bus_type ?? "";
    let min_price: number = Number(this.document.min_price ?? "");
    let per_km: number = Number(this.document.per_km ?? "");
    if (bus_type.length > 0) {
      this.validators[0] = true;
    }
    if (min_price>0) {
      this.validators[1] = true;
    }
    if (per_km>0) {
      this.validators[2] = true;
    }
    if (this.validators[0] && this.validators[1] && this.validators[2]) {
      this.fareservice.updateFare(this.document).then(() => {
        console.log("Successfully updated the fare");
        this.submitted = true;
      });
    } else if (!this.validators[0] && !this.validators[1] && !this.validators[2]) {
      console.log("Enter all required fields!");
    }

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
