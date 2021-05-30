import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FireAuthService } from './shared/services/fire-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website-ok';
  signedIn: any;
  userAuth: Subscription;

  constructor(private fs: FireAuthService, private router: Router) {
    this.userAuth = this.fs.signedIn.subscribe((user) => {
      if (user) {
        this.signedIn = true;
      } else {
        this.router.navigate(['signIn']);
      }
    });
  }

  signOut() {
    console.log("signout");
    this.signedIn = false;
    this.router.navigate(['signIn'])
    this.fs.signOut()
  }
}
