import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {
  goBack(){
    this.router.navigate(['/']).then(success => console.log('navigation success?' , success))
    .catch(console.error);   
  }
  goBackOnce() {
    this._location.back();
  }
  constructor(private router: Router,private _location: Location) { }

  ngOnInit(): void {
  }

}
