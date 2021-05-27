import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import Employee from 'src/app/shared/models/employee';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit, OnChanges {

  @Input() employee: Employee[];

  constructor(private router: Router, private _location: Location, private employeeService: EmployeeService) {
    this.employee = [];
  }
  noData:boolean = false;
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['employee'].currentValue);
    if(changes['employee'].currentValue.length==0){
      this.noData = true;
    }
    else{
      this.noData = false;
    }
  }
  ngOnInit(): void {
  }

  delete() {
    console.log("delete button pressed");
  }
  buttonPressed() {
    console.log("Button pressed");
  }

  goBack() {
    this.router.navigate(['/']).then(success => console.log('navigation success?', success))
      .catch(console.error);
  }
  goBackOnce() {
    this._location.back();
  }

  // delete(employee: Employee) {
  //   this.employeeService.removeEmployee(employee);
  // }
}
