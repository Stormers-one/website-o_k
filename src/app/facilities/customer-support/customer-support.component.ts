import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { CustomercareService } from 'src/app/shared/services/customercare.service';
import Customercare from 'src/app/shared/models/customercare';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.css']
})
export class CustomerSupportComponent implements OnInit {
  goBack() {
    this.router.navigate(['/']).then(success => console.log('navigation success?', success))
      .catch(console.error);
  }
  Complainant: any[] = ["Passenger","Driver-Conductor"];
  Route: any[]=[];
  goBackOnce() {
    this._location.back();
  }
  goToPage(link: string) {
    console.log(this.complainantdropDownForm.value['busInfo']);
    // let res = this.filterData(this.complainantdropDownForm.value['busInfo']);
    // console.log(res);
    this.router.navigateByUrl('/facilities/customercare/' + link, {state: this.customercare}).then(success => console.log('navigation success?', success))
      .catch(console.error);
  }
  complainantdropDownForm = new FormGroup({
    busInfo: new FormControl('', Validators.required)
  });
  
  get validateFunction(){
    return this.complainantdropDownForm.controls;
  }
  customercare: Customercare[];
  id = '';
  constructor(private router: Router, private _location: Location, private CustomercareService: CustomercareService) {
    this.customercare = [];
  }

  getFeedbacks(option: number, route: string) {
    if (option == 1) {
      this.getPassengerFeedbacks(route);
    }
    else if (option == 2) {
      this.getDriverConductorFeedbacks(route);
    }
  }

  getDriverConductorFeedbacks(route: string) {
    this.CustomercareService.getFeedbackPassenger(route).snapshotChanges().subscribe((data) => {
      this.customercare = data.map((a) => {
        const id = a.payload.doc.id;
        const data = a.payload.doc.data();
        return { ...data };
      });
    });
  }
  getPassengerFeedbacks(route: string) {
    this.CustomercareService.getFeedbackPassenger(route).snapshotChanges().subscribe((data) => {
      this.customercare = data.map((a) => {
        const id = a.payload.doc.id;
        const data = a.payload.doc.data();
        return { ...data };
      });
    });
  }

  ngOnInit(): void {
    console.log(this.CustomercareService.getRoutes());
  }

}
