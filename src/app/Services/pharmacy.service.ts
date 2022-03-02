import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore/';
import { Medicine } from '../viewmodels/Medicine.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PharmacyService {
  private dbPath: string = '/Pharmacy';
  pharmacysRef: AngularFirestoreCollection<Medicine>;
  constructor(private db: AngularFirestore) {
    this.pharmacysRef = this.db.collection(this.dbPath);
  }

  getAll(): Observable<any[]> {
    return this.pharmacysRef.valueChanges();
  }

  // addMedicine(med: Medicine) {
  //   this.pharmacysRef
  //     .doc()
  //     .set({
  //       id: med.id,
  //       nameAR: med.nameAR,
  //       nameEN: med.nameEN,
  //       category: med.category,
  //       price: med.price,
  //       molarity: med.molarity,
  //       size: med.size,
  //       quantity: med.quantity,
  //       imageURL: med.imageURL,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  create(medicine: Medicine): any {
    return this.pharmacysRef.add({ ...medicine });
  }

  delete(id: string): Promise<void> {
    return this.pharmacysRef.doc(id).delete();
  }

  getMedicine(id: string) {
    return this.pharmacysRef.doc(id).get();
  }
}
