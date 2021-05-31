import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FireAuthService } from './shared/services/fire-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'website-ok';
  signedIn: boolean;
  userAuth: Subscription;

  constructor(private fs: FireAuthService, private router: Router) {
    this.signedIn = false;
    this.userAuth = this.fs.signedIn.subscribe((user) => {
      if (user) {
        this.signedIn = true;
        console.log("Set true")
      } else {
        this.router.navigate(['signIn']);
      }
    });
  }
  ngOnInit(){this.signedIn = true;}


  signOut() {
    console.log("signout");
    this.signedIn = false;
    this.router.navigate(['signIn'])
    this.fs.signOut()
  }
}
