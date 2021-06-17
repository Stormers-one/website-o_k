import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FireAuthService } from './shared/services/fire-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'website-ok';
  signedIn: any;
  // public userAuth: Subscription;

  constructor(private fs: FireAuthService, private router: Router) {
    this.signedIn = this.fs.signedIn
    // this.userAuth = this.fs.signedIn.subscribe((user) => {
    //   if (user) {
    //     this.signedIn = true;
    //     console.log("Set true")
    //     this.router.navigate(['facilities']);
    //   } else {
    //     this.signedIn = true;
    //     console.log("Set false")
    //     this.router.navigate(['signIn']);
    //   }
    // });
    var user = JSON.parse(localStorage.getItem('user')!)
    console.log(user)
    if (user !== null && user !=='null' && user.uid !== null) {
      this.signedIn = true;
      console.log("Set true")
      this.router.navigate(['facilities']);
    } else {
      this.signedIn = true;
      console.log("Set false")
      this.router.navigate(['signIn']);
    }
  }
  ngOnInit() {
    this.signedIn = this.fs.signedIn
  }


  signOut() {
    console.log("signout");
    this.signedIn = false;
    this.router.navigate(['signIn'])
    this.fs.signOut()
  }
  ngOnDestroy() {
    // if (this.userAuth) this.userAuth.unsubscribe();
  }
}
