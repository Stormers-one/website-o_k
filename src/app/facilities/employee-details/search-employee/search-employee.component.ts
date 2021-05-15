import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { EmployeeService } from 'src/app/shared/services/employee.service';
import Employee from 'src/app/shared/models/employee';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {
  goBack() {
    this.router.navigate(['/']).then(success => console.log('navigation success?', success))
      .catch(console.error);
  }
  goBackOnce() {
    this._location.back();
  }
  employee: Employee[] = [];
  id = '';
  constructor(private router: Router, private _location: Location, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().snapshotChanges().subscribe(data => {
      this.employee = data.map((a) => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        // console.log(data.name);
        return { id, ...data };
      });
    });
  }

}
