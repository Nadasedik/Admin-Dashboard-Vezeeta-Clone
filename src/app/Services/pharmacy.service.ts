import { Medicine } from 'src/app/viewmodels/Medicine.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore/';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PharmacyService {
  medicines!: Observable<Medicine[]>;
  pharmacysRef: AngularFirestoreCollection<Medicine>;
  constructor(private readonly afs: AngularFirestore) {
    this.pharmacysRef = this.afs.collection<Medicine>('Pharmacy');
  }

  getMedicines(): Observable<any[]> {
    return this.pharmacysRef.valueChanges();
  }

  create(id: string, medicine: Medicine): any {
    return this.pharmacysRef.doc(id).set({ ...medicine });
  }

  update(id: any, medicine: Medicine): Promise<void> {
    return this.pharmacysRef.doc(id).update(medicine);
  }

  delete(id: string): Promise<void> {
    return this.pharmacysRef.doc(id).delete();
  }
}
