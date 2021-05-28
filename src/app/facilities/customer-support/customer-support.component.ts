import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  goBackOnce() {
    this._location.back();
  }
  async goToPage(link: string) {
    let complainant = this.complainantdropDownForm.value['Complainant'];
    let route = this.complainantdropDownForm.value['Route'];
    // let res = this.filterData(this.complainantdropDownForm.value['busInfo']);
    // console.log(res);
    console.log('1')
    let res;
    res = await this.getFeedbacks(complainant, route);
    let obj = [res,complainant]
    console.log('5')
    this.router.navigateByUrl('/facilities/customerSupport/' + link, { state: obj }).then(success => console.log('navigation success?', success))
      .catch(console.error);
  }

  complainantdropDownForm = new FormGroup({
    Complainant: new FormControl('null', Validators.required),
    Route: new FormControl('null', Validators.required)
  });
  get validateFunction() {
    return this.complainantdropDownForm.controls;
  }

  Complainant: any[] = ["Passenger", "Driver-Conductor"];
  Route: any[] = [];
  customercare: Customercare[];
  id = '';

  constructor(private router: Router, private _location: Location, private CustomercareService: CustomercareService) {
    this.customercare = [];
  }

  async getFeedbacks(option: string, route: string): Promise<any> {
    let res;
    if (option == "Passenger") {
      res = await this.getPassengerFeedbacks(route);
    }
    else if (option == "Driver-Conductor") {
      res = await this.getDriverConductorFeedbacks(route);
    }
    return res;
  }
  res: any;

  async getDriverConductorFeedbacks(route: string) {
    let res = await new Promise(resolve => {
      this.CustomercareService.getFeedbackDriverConductor(route).snapshotChanges().subscribe((data) => {
        let dat = resolve(data.map((a) => {
          let data = a.payload.doc.data();
          return data;
        })); return dat;
      })
    });
    return (res)
  }
  async getPassengerFeedbacks(route: string) {
    let res = await new Promise(resolve => {
      this.CustomercareService.getFeedbackPassenger(route).snapshotChanges().subscribe((data) => {
        let dat = resolve(data.map((a) => {
          let data = a.payload.doc.data();
          return data;
        })); return dat;
      })
    });
    return (res)
  }

  ngOnInit(): void {
    this.CustomercareService.getRoutes().snapshotChanges().subscribe((data) => {
      this.Route = data.map((a) => {
        const id = a.payload.doc.id;
        return id;
      })
    })
  }
}
