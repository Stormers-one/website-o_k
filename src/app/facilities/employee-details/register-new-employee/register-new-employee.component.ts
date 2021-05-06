import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Location } from '@angular/common';

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
  constructor(private router: Router, private _location: Location) { }

  ngOnInit(): void {
  }

}
