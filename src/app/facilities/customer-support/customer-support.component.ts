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
    console.log(this.complainantdropDownForm.value['Complainant']);
    console.log(this.complainantdropDownForm.value['Route']);
    // let res = this.filterData(this.complainantdropDownForm.value['busInfo']);
    // console.log(res);
    let res:any;
    res = this.getFeedbacks(this.complainantdropDownForm.value['Complainant'],this.complainantdropDownForm.value['Route']);
    console.log(`result of function: ${res}`);
    this.router.navigateByUrl('/facilities/customerSupport/' + link, {state: res}).then(success => console.log('navigation success?', success))
      .catch(console.error);
  }
  
  complainantdropDownForm = new FormGroup({
    Complainant: new FormControl('null', Validators.required),
    Route: new FormControl('null', Validators.required)
  });
  get validateFunction(){
    return this.complainantdropDownForm.controls;
  }
  customercare: Customercare[];
  id = '';
  constructor(private router: Router, private _location: Location, private CustomercareService: CustomercareService) {
    this.customercare = [];
  }

  getFeedbacks(option: string, route: string):any {
    if (option == "Passenger") {
      return this.getPassengerFeedbacks(route);
    }
    else if (option == "Driver-Conductor") {
      return this.getDriverConductorFeedbacks(route);
    }
  }

  getDriverConductorFeedbacks(route: string) {
    console.log(`Route<${route}>`);
    let res:any;
    this.CustomercareService.getFeedbackDriverConductor(route).snapshotChanges().subscribe((data) => {
       res = data.map((a) => {
        const id = a.payload.doc.id;
        const data = a.payload.doc.data();
        return { ...data };
      });
    });
    return res;
  }
  getPassengerFeedbacks(route: string) {
    let res:any;
    this.CustomercareService.getFeedbackPassenger(route).snapshotChanges().subscribe((data) => {
      res = data.map((a) => {
        const id = a.payload.doc.id;
        const data = a.payload.doc.data();
        return { ...data };
      });
    });
    return res;
  }

  ngOnInit(): void {
    this.CustomercareService.getRoutes().snapshotChanges().subscribe((data)=>{
      this.Route = data.map((a)=>{
        const id = a.payload.doc.id;
        return id;
      })
    })
    console.log(`Test DriverConductor Feedbacks: ${this.getDriverConductorFeedbacks("101")}`);
  }

}
