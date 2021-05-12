import { Component, OnInit } from '@angular/core';
import { SearchEmployeeComponent } from '../employee-details/search-employee/search-employee.component';
import { RegisterNewEmployeeComponent } from '../employee-details/register-new-employee/register-new-employee.component';
import { Router } from '@angular/router';

import { EmployeeService } from 'src/app/shared/services/employee.service';
import Employee from 'src/app/shared/models/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  goToPage(link: string) {
    this.router.navigate(['/facilities/employeeDetails/' + link]).then(success => console.log('navigation success?', success))
      .catch(console.error);
  }
  goBack() {
    this.router.navigate(['/']).then(success => console.log('navigation success?', success))
      .catch(console.error);
  }

  employee: Employee[] = [];
  id = '';
  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data => {
      this.employee = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Employee;
      })
    });
  }
  
  create(employee: Employee) {
    this.employeeService.registerEmployee(employee);
  }

  update(employee: Employee) {
    this.employeeService.updateEmployee(employee);
  }

  delete(employee: Employee) {
    this.employeeService.removeEmployee(employee);
  }

}
