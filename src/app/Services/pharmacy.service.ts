import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore/';
import { Medicine } from '../viewmodels/Medicine.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {
  private dbPath: string = '/Pharmacy';
  pharmacysRef: AngularFirestoreCollection<Medicine>;
  constructor(
    private db: AngularFirestore,
    private router: Router
  ) {
    this.pharmacysRef = this.db.collection(this.dbPath);
  }

  addMedicine(med: Medicine) {
    this.pharmacysRef.doc().set({
      "id": med.id,
      "name": med.name,
      "category": med.category,
      "price": med.price,
      "molarity": med.molarity,
      "size": med.size,
      "quantity": med.quantity,
      "imageURL": med.imageURL,
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  getAll(): AngularFirestoreCollection<Medicine> {
    return this.pharmacysRef;
  }

  create(medicine: Medicine): any {
    return this.pharmacysRef.add({ ...medicine });
  }

  update(id: string, data: any): Promise<void> {
    return this.pharmacysRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.pharmacysRef.doc(id).delete();
  }
}
