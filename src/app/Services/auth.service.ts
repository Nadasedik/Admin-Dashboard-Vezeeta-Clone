import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor(
    private _auth: AngularFireAuth,
    private _firestore: AngularFirestore,
    private _router: Router) {
  }


  signIn(email: string, pass: string) {
    this._auth.signInWithEmailAndPassword(email, pass)
      .then(value => {
        console.log('Nice, it worked!');
        this._router.navigateByUrl('/home');
      })
      .catch(err => {
        console.log(err);
      })
  }

  async signUp(email: string, pass: string) {
    await this._auth.createUserWithEmailAndPassword(email, pass)
      .then(res => {
        this.isLoggedIn = true;
        localStorage.setItem("user", JSON.stringify(res.user));
        this._router.navigateByUrl('/home');
      })
      .catch(err => {
        console.log(err);
      })
  }

  // logout() {
  //   this._auth.signOut()
  //   localStorage.removeItem('user');
  // }

  addUser(data: any) {
    this._firestore.collection('Admin').doc().set({
      "name": data.name,
      "email": data.email,
    })
      .then(res => {
        console.log('res', res);
      })
      .catch(err => {
        console.log(err);
      })
  }
}
