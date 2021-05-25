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
  constructor(private router: Router, private _location: Location, private CCustomercareService : CustomercareService) {
    this.customercare = [];
   }

  ngOnInit(): void {
    this.CCustomercareService.getCustomercare().snapshotChanges().subscribe(data => {
      this.customercare = data.map((a) => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        // console.log(data.name);
        return { id, ...data };
      });
    });
  }

}
