import { Component, Input, OnInit } from '@angular/core';
import Employee from 'src/app/shared/models/employee';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

  @Input() employee: Employee;

  constructor(private router: Router, private _location: Location) { 
    this.employee = {};
    console.log(this.employee);
    }

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate(['/']).then(success => console.log('navigation success?', success))
      .catch(console.error);
  }
  goBackOnce() {
    this._location.back();
  }

}
