import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import User from 'src/app/shared/models/User/user';
import { FireAuthService } from 'src/app/shared/services/fire-auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public userAuth: Subscription;
  constructor(private router: Router, private fs: FireAuthService) {
    this.userAuth = this.fs.signedIn.subscribe((user) => {
      if (user) {
        this.router.navigate(['/facilities'])
      }
    });
    this.validators = [true, true];
    this.user = { emp_id: "", pswd: "" };
  }
  goToPage(link: string) {
    this.router.navigate(['/' + link]).then(success => console.log('navigation success?', success))
      .catch(console.error);
  }
  validators: boolean[];
  user: User;

  // userForm = new FormGroup({
  //   emp_id: new FormControl('', [Validators.minLength(0), Validators.pattern(/([\w]+@[\w]+.[\w]+)/g)]),
  //   pswd: new FormControl('', Validators.minLength(6))
  // })

  empValidate(emp: string): boolean {
    if (emp.match(/(\w)/) && emp.match(/(@)/g) && emp.length > 0) {
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

  validate(user:string,pswd:string):boolean {
    this.validators[0] = false
    if (this.empValidate(user)) {
      this.validators[0] = true
    }
    this.validators[1] = false;
    if (this.pswdValidate(pswd)) {
      this.validators[1] = true;
    }
    if (this.validators[1] && this.validators[0]) {
      return true;
    }
    else {
      return false;
    }
  }

  async signIn(user:string,pswd:string) {
    try {
      console.log(this.validate(user,pswd))
      console.log(user);
      if (!this.validate(user,pswd)) throw new Error('Invalid sign-in credentials');
      const result = await this.fs.signIn(user, pswd);
      console.log('Sign in successful!', result);
      if (result) this.router.navigate(['/facilities']);
      else throw new Error('Sign-in failed');
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    if (this.userAuth) this.userAuth.unsubscribe();
  }

}
