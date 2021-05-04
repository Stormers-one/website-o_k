import { Component, OnInit } from '@angular/core';
import { SearchEmployeeComponent } from '../employee-details/search-employee/search-employee.component';
import { RegisterNewEmployeeComponent } from '../employee-details/register-new-employee/register-new-employee.component';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  goToPage(link:string){
    this.router.navigate(['/'+link]).then(success => console.log('navigation success?' , success))
    .catch(console.error);   
  }
  goBack(){
    this.router.navigate(['/']).then(success => console.log('navigation success?' , success))
    .catch(console.error);   
  }
  constructor(private router: Router,) {}

  ngOnInit(): void {
  }

}
