import { Component, Input,OnInit } from '@angular/core';
import Customercare from 'src/app/shared/models/customercare';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomercareService } from 'src/app/shared/services/customercare.service';

@Component({
  selector: 'app-complain-list',
  templateUrl: './complain-list.component.html',
  styleUrls: ['./complain-list.component.css']
})
export class ComplainListComponent implements OnInit {

  //@Input() customercare: Customercare[] = [];
  customercare: any;
  constructor(private router: Router, private _location: Location, private customercareService :CustomercareService, private activatedRoute: ActivatedRoute) { 
    this.customercare = this.router.getCurrentNavigation()?.extras.state;
    console.log(`route State:`);
    console.log(this.customercare);
    }

  ngOnInit(): void {
  }

  delete(){
    console.log("delete button pressed");
  }
  buttonPressed(){
    console.log("Button pressed");
  }
  
  goBack() {
    this.router.navigate(['/']).then(success => console.log('navigation success?', success))
      .catch(console.error);
  }
  goBackOnce() {
    this._location.back();
  }

}
