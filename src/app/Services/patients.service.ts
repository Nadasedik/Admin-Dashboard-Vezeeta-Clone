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
  return this.angularFirestore.collection('Patients').doc(id).valueChanges()
}
getAllPatients()
{
  return this.angularFirestore.collection('Patients').snapshotChanges()

}

addNewPatient(patient:IPatients)
{
  return new Promise<any>((resolve,reject)=>{
    this.angularFirestore.collection('Patients').add(patient)
    .then(response=>{console.log(response)},error=>reject(error))
  })
}


deletePatient(patient:IPatients)
{
  return this.angularFirestore.collection('Patients').doc(patient.id).delete();
}

// editPatient(patient:IPatients,id:any)
// {
//   return this.angularFirestore.collection('Patients').doc(id).update({
//     Image:patient.Image,
//     Name:patient?.Name,
//     Gender:patient.Gender,
//     Address:patient.Address,
//     Mobile:patient.Mobile,
//     Email:patient.Email,
//     BirthDate:patient.BirthDate,
//     BloodGroup:patient.BloodGroup, 
//     Treatment:patient.Treatment
//   })
// }

editPatient(patient:IPatients,id:any) {
  let data =this.angularFirestore.collection('Patients')
  .doc(id).update(patient);
  data.then(res => {
  
   console.log(res)
  }).catch(err => {
    console.log(err);
  })
}

}
