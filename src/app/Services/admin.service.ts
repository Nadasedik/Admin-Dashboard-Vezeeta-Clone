import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Iadmin } from '../viewmodels/iadmin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _AngularFirestore: AngularFirestore) { }

  getAllAdmins() {
    return this._AngularFirestore.collection('Admin').snapshotChanges()

  }

  deleteAdmin(admin: Iadmin) {
    console.log(admin.id);
    return this._AngularFirestore.collection('Admin').doc(admin.id).delete();
  }


}
