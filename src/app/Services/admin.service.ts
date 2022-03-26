import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Iadmin } from '../viewmodels/iadmin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private _AngularFirestore: AngularFirestore,
    private _router: Router) { }

  getAdminByID(id: any) {
    return this._AngularFirestore.collection('Admin').doc(id).valueChanges()
  }

  editAdmin(id:any, admin: Iadmin) {
    let data = this._AngularFirestore.collection('Admin')
      .doc(id).update(admin);
    data.then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err);
    })
  }

  getAllAdmins() {
    return this._AngularFirestore.collection('Admin').snapshotChanges()
  }

  deleteAdmin(admin: Iadmin) {
    console.log(admin.id);
    return this._AngularFirestore.collection('Admin').doc(admin.id).delete();
  }


}
