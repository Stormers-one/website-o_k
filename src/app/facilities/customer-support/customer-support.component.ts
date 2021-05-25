import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

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
  }

}
