import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import UserReg from 'src/app/shared/models/User/userReg';
import { FireAuthService } from 'src/app/shared/services/fire-auth.service';
import { RegisterKeyService } from 'src/app/shared/services/register-key.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public userAuth: Subscription;
  constructor(
    private router: Router,
    private fs: FireAuthService,
    private registerKey: RegisterKeyService,
    private _location: Location
  ) {
    this.userAuth = this.fs.signedIn.subscribe((user) => {
      if (user) {
        this.router.navigate(['/facilities'])
      }
    });
    this.validators = [true, true, true, true, true, true];
    this.user = {
      emp_id: "",
      pswd1: "",
      pswd2: "",
      district: "",
      service_key: "",
      phn_no: ""
    };
  }
  validators: boolean[];
  user: UserReg;
  goBackOnce() {
    this._location.back();
  }

  empValidate(emp: string): boolean {
    if (emp.match(/(\w)/) && emp.match(/(@)/g) && emp.length > 0) {
      return true;
    } else {
      return false;
    };
  }

  numbers = [0,1,2,3,4,5,6,7,8,9]

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

  phnNoValidate(phn_no: string): boolean {
    if (phn_no.length == 10 && this.isAlpha(phn_no)) {
      return true;
    } else {
      return false;
    };
  }
  districtValidate(district: string): boolean {
    if (district.match(/(\w)/) && district.length > 0) {
      return true;
    } else {
      return false;
    };
  }
  serviceKeyValidate(key: string): boolean {
    if (key.length>0 && this.registerKey.checkKeyValidity(key)) {
      return true;
    } else {
      return false;
    };
  }
  pswdValidate(pswd: string): boolean {
    if (pswd.match(/(\d)/g) && pswd.match(/(\w)/g) && pswd.length > 0) {
      return true;
    } else {
      return false;
    };
  }


  validate() {
    this.validators[0] = false
    if (this.empValidate(this.user.emp_id)) {
      this.validators[0] = true
    }
    this.validators[1] = false;
    if (this.phnNoValidate(this.user.phn_no)) {
      this.validators[1] = true;
    }
    this.validators[2] = false;
    if (this.districtValidate(this.user.district)) {
      this.validators[2] = true;
    }
    this.validators[3] = false;
    if (this.serviceKeyValidate(this.user.service_key)) {
      this.validators[3] = true;
    }
    this.validators[4] = false;
    if (this.pswdValidate(this.user.pswd1)) {
      this.validators[4] = true;
    }
    this.validators[5] = false;
    if (this.user.pswd1.match(this.user.pswd2)&&this.user.pswd1.length>0) {
      this.validators[5] = true;
    }
    if (this.validators[0] &&
      this.validators[1] &&
      this.validators[2] &&
      this.validators[3] &&
      this.validators[4] &&
      this.validators[5]) {
      return true;
    }
    else {
      return false;
    }
  }

  async register() {
    try {
      if (!this.validate()) throw new Error('Invalid credentials');
      const result = await this.fs.register(this.user.emp_id, this.user.pswd1);
      console.log('Registration successful!', result);
      if (result) this.router.navigate(['/facilites']);
      else throw new Error('Registeration failed');
    } catch (error) {
      console.log(error);
    }
  }


  ngOnInit(): void {
  }

}
