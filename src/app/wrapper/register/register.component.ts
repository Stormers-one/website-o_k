import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import UserReg from 'src/app/shared/models/User/userReg';
import { FireAuthService } from 'src/app/shared/services/fire-auth.service';
import { RegisterKeyService } from 'src/app/shared/services/register-key.service';
import { Location } from '@angular/common'
import { EmployeeService } from 'src/app/shared/services/employee.service';

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
    private _location: Location,
    private employeeService: EmployeeService
  ) {
    this.userAuth = this.fs.signedIn.subscribe((user) => {
      if (user) {
        this.router.navigate(['/facilities'])
      }
    });
    this.validators = [true, true, true, true, true, true];
    this.user = {
      emp_id: "",
      mail: "",
      name: "",
      phn_no: ""
    };
  }
  validators: boolean[];
  user: UserReg;
  goBackOnce() {
    this._location.back();
  }

  empValidate(emp: string): boolean {
    if (emp.match(/(\w)/) && emp.length > 0) {
      return true;
    } else {
      return false;
    };
  }
  mailValidate(mail: string): boolean {
    if (mail.match(/([\w]+@[\w]+.[\w])/) && mail.length > 0) {
      return true;
    } else {
      return false;
    };
  }

  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

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
  serviceKeyValidate(key: string): boolean {
    if (key.length > 0 && this.registerKey.checkKeyValidity(key)) {
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


  validate(emp_id: string, phnno: string, service_key: string, pswd1: string, pswd2: string, mail:string) {
    this.validators = [false,false,false,false,false,false,false]
    if (this.empValidate(emp_id)) {
      this.validators[0] = true
    }
    if (this.phnNoValidate(phnno)) {
      this.validators[1] = true;
    }
    if (this.mailValidate(mail)) {
      this.validators[2] = true;
    }
    if (this.serviceKeyValidate(service_key)) {
      this.validators[3] = true;
    }
    if (this.pswdValidate(pswd1)) {
      this.validators[4] = true;
    }
    if (pswd1.match(pswd2) && pswd1.length > 0) {
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

  async register(name: string, phnno: string, service_key: string, pswd1: string, pswd2: string, mail:string) {
    this.user.name = name;
    this.user.phn_no = phnno;
    this.user.mail = mail;
    this.user.emp_id = String(mail.match(/([\w]+)@/)![1]);
    console.log(this.user)
    try {
      if (!this.validate(name, phnno, service_key, pswd1, pswd2,mail)) throw new Error('Invalid credentials');
      const result = await this.fs.register(mail, pswd1);
      console.log('Registration successful!', result);
      const res = await this.employeeService.registerEmployee(this.user);
      if (result) this.router.navigate(['/facilites']);
      else throw new Error('Registeration failed');
    } catch (error) {
      console.log(error);
    }
  }


  ngOnInit(): void {
  }

}
