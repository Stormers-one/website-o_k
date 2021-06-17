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
  employee: Employee[];
  employeeFiltered: Employee[];
  id = '';
  query: string;
  docLen:number;
  matchingQuery:boolean[];
  constructor(private router: Router, private _location: Location, private employeeService: EmployeeService) {
    this.employee = [];
    this.employeeFiltered = [];
    this.query = "";
    this.docLen = 0;
    this.matchingQuery = [];
  }
  filter(){
    console.log("Button pressed");
    let i:number;
    for(i=0;i<this.docLen;i++){
      if(this.employee[i].email?.match(this.query)!=null){
        this.matchingQuery[i]=true;
      }
      else{
        this.matchingQuery[i]=false;
      }
    }
    let j:number;
    let k:number=0;
    this.employeeFiltered = [];
    for(j=0;j<this.docLen;j++){
      if(this.matchingQuery[j]==true){
        this.employeeFiltered[k] = this.employee[j];
        k++;
      }
    }
    // console.log(this.matchingQuery)
  }


  ngOnInit(): void {
    this.employeeService.getEmployees().snapshotChanges().subscribe(data => {
      this.employee = data.map((a) => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        // console.log(data.name);
        return { id, ...data };
      });
      this.docLen = this.employee.length;
      this.employeeFiltered= this.employee;
    });
  }

}
