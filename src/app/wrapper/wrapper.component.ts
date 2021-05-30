import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FireAuthService } from '../shared/services/fire-auth.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  public userAuth: Subscription;

  constructor(private router: Router, private fs: FireAuthService) { 
    this.userAuth = this.fs.signedIn.subscribe((user) => {
      if (user) {
        this.router.navigate(['/facilities'])
      } else {
        this.router.navigate(['/signIn']);
      }
    });
  }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    if (this.userAuth) this.userAuth.unsubscribe();
  }

}
