import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  constructor(
    private _auth: AngularFireAuth,
    private _firestore: AngularFirestore,
    private _router: Router,
    private snackBar: MatSnackBar
  ) { }

  //////////

  signIn(email: string, pass: string) {
    this._auth
      .signInWithEmailAndPassword(email, pass)
      .then((value) => {
        this._router.navigateByUrl('/medicine/list');
        this.snackBar.open('welcom', 'close');
        this.isLoggedIn = true;
      })
      .catch((err) => {
        this.snackBar.open(err);
      });
  }

  ////////////////////////

  async signUp(email: string, pass: string) {
    await this._auth
      .createUserWithEmailAndPassword(email, pass)
      .then((res) => {
        this.isLoggedIn = true;
        localStorage.setItem('Admin', JSON.stringify(res.user));
        this.snackBar.open('Admin added successfully', 'close');
        this._router.navigateByUrl('Admin/list')
      })
      .catch((err) => {
        this.snackBar.open(err);
      });
  }

  ///////////////////////////////

  logout() {
    this._auth.signOut();
    localStorage.removeItem('Admin');
    this.isLoggedIn = false;
    this._router.navigate(['/signin']);
  }

  ////////////////////////////////

  addUser(data: any) {
    this._firestore
      .collection('Admin')
      .doc()
      .set({
        name: data.name,
        email: data.email,
      })
      .then((res) => {
        console.log('res', res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ////////////////////////////////////////

  isLogged(): boolean {
    return this.isLoggedIn;
  }
}
