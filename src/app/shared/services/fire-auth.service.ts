import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {
  public signedIn: Observable<any>;
  userData:any
  constructor(public fs: AngularFirestore, public auth: AngularFireAuth) {
    this.signedIn = new Observable((subscriber) => {
      this.auth.onAuthStateChanged(subscriber);
    });
    this.auth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        localStorage.setItem('user', "null");
      }
      // console.log(JSON.parse(localStorage.getItem('user')!));
    })
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return (user !== 'null') ? true : false;
  }

  async signIn(email: string, password: string) {
    try {
      if (!email || !password) throw new Error('Invalid email and/or password');
      await this.auth.signInWithEmailAndPassword(email, password);
      return true;
    } catch (error) {
      console.log('Sign in failed', error);
      return false;
    }
  }
  async register(email: string, password: string){
    try {
      if (!email || !password) throw new Error('Invalid email and/or password');
      await this.auth.createUserWithEmailAndPassword(email, password);
      return true;
    } catch (error) {
      console.log('Registration failed', error);
      return false;
    }
  }

  async signOut() {
    try {
      await this.auth.signOut();
      localStorage.removeItem('user');
      return true;
    } catch (error) {
      console.log('Sign out failed', error);
      return false;
    }
  }
}
