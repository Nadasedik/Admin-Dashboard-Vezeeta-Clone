import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../../Services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/compat';
// import firebase from 'firebase/compat/app';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private snackBar: MatSnackBar) {

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._authService.isLogged()) {
      return true;
    } else {
      this.snackBar.open('you must login first', 'close');
      this._router.navigate(['signin'], {
        queryParams: {
          returnUrl: state.url
        }
      })
      return false;
    }
  }



}

