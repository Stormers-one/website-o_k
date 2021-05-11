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
  goBack(){
    this.router.navigate(['/']).then(success => console.log('navigation success?' , success))
    .catch(console.error);   
  }
  goBackOnce() {
    this._location.back();
  }
  constructor(private router: Router, private _location: Location, private employeeService: EmployeeService) { }
  document: Employee = new Employee();
  submitted = false;

  ngOnInit(): void {
  }

  saveEmployee():void{
    this.employeeService.registerEmployee(this.document).then(()=>{
      console.log("Successfully registered new employee");
      this.submitted = true;
    });
  }
  newEmployee():void{
    this.submitted = false;
    this.document = new Employee();
  }

}
