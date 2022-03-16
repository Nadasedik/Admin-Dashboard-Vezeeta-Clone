import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IPatients } from '../viewmodels/IPatients';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

constructor(private angularFirestore:AngularFirestore) { }

getPatientByID(id:any)
{
  return this.angularFirestore.collection('Users').doc(id).valueChanges()
}
getAllPatients()
{
  return this.angularFirestore.collection('Users').snapshotChanges()

}


deletePatient(patient:IPatients)
{
  return this.angularFirestore.collection('Users').doc(patient.id).delete();
}

}
