import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import Employee from 'src/app/shared/models/employee';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-register-new-employee',
  templateUrl: './register-new-employee.component.html',
  styleUrls: ['./register-new-employee.component.css']
})
export class RegisterNewEmployeeComponent implements OnInit {
  goBack() {
    this.router.navigate(['/']).then(success => console.log('navigation success?', success))
      .catch(console.error);
  }
  goBackOnce() {
    this._location.back();
  }

  // valid: any;
  validators: boolean[];
  numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  regex: RegExp = /(\w+@\w+.\w+)/g;

  constructor(private router: Router, private _location: Location, private employeeService: EmployeeService) {
    // this.valid = false;
    this.validators = [true, true, true];
  }
  document: Employee = new Employee();
  submitted = false;

  ngOnInit(): void {
  }

  isAlpha(val: string): boolean {
    let i: number = 1;
    let j: number = 1;
    let n: number = val.length;
    for (j = 1; j < n; j++) {
      let temp: number = +val[i]
      for (i = 1; i < 10; i++) {
        if (temp == this.numbers[i]) {
          return false;
        }
      }
    }
    return true
  }

  saveEmployee(): void {
    this.validators = [false, false, false];
    let name: string = this.document.name ?? "";
    let phone_no: string = String(this.document.phone_no ?? "");
    let email: string = this.document.email ?? "";
    if (name.length > 0) {
      this.validators[0] = true;
    }
    if (phone_no.length == 10 && this.isAlpha(phone_no)) {
      this.validators[1] = true;
    }
    if (email.length > 0 && email.match(this.regex)) {
      this.validators[2] = true;
    }

    if (this.validators[0] && this.validators[1] && this.validators[2]) {
      this.employeeService.registerEmployee(this.document).then(() => {
        console.log("Successfully registered new employee");
        this.submitted = true;
      });
    } else if (!this.validators[0] && !this.validators[1] && !this.validators[2]) {
      console.log("Enter all required fields!");
    }

  }
  newEmployee(): void {
    this.submitted = false;
    this.document = new Employee();
  }

}
