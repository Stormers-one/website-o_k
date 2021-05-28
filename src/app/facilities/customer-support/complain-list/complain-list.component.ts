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
  data:any;
  type:string;
  constructor(private router: Router, private _location: Location, private customercareService :CustomercareService, private activatedRoute: ActivatedRoute) { 
    this.data = this.router.getCurrentNavigation()?.extras.state;
    if(this.data==null){
      this.goBackOnce()
    }
    this.customercare = this.data[0]
    this.type = this.data[1]
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
