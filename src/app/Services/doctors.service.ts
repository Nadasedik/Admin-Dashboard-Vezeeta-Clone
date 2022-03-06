import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { IDoctor } from '../viewmodels/idoctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor( private _firestore : AngularFirestore,
              private _router:Router ) { }

   addDoctor (doctor:IDoctor)  {
     this._firestore.collection("/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/General_internal_medicine_specialist").doc().set({
     "Name":doctor.Name,
     "nameInArabic":doctor.nameInArabic,
     "Title":doctor.Title,
    " titleInArabic":doctor.titleInArabic,
     "Department":doctor.Department,
     "departmentInArabic":doctor.departmentInArabic,
     "Price":doctor.Price,
    //  "Gender":doctor.Gender
    }).then(response=>{
      this._router.navigate(['/doctors/list'])
    })
    .catch(err => {
      console.log(err);
    })
   } 
   
   getAllDoctors(){
     let allData :any[]=[];
     const allDoctors = this._firestore.collection("/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/General_internal_medicine_specialist").get().toPromise()
     return allDoctors.then((res)=>{
       let docs2=res?.docs;
       docs2?.forEach((document)=>{
         let doc: any = document.data();
         let theDoctor:IDoctor={
          Name:doc.Name,
          nameInArabic:doc.nameInArabic,
          Title:doc.Title,
          titleInArabic:doc.titleInArabic,
          Department:doc.Department,
          departmentInArabic:doc.departmentInArabic,
          Price:doc.Price,
         }
         allData.push(theDoctor)
       })
       return allData;
     })
    }

     getSpecificDoctorByID(id : string ){
       let dataOfThisDoctor =this._firestore.collection("/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/General_internal_medicine_specialist")
       .doc(id).get().toPromise()
       let specificDoctor;
       return dataOfThisDoctor.then((data)=>{
         data?.data();
         specificDoctor=data?.data();
         return specificDoctor;
       })
       .catch(err => {
        console.log(err);
      })
     }

     updateDoctorINFO(id:string , doctor:IDoctor){
      let data=this._firestore.collection("/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/General_internal_medicine_specialist").doc(id).update(doctor)
      data.then(res =>{
        this._router.navigate(["doctors/list"])
      }).catch(err => {
        console.log(err);
      })
   }

   deleteDoctor(id:string){
     console.log(id);
     
     this._firestore.collection("/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/General_internal_medicine_specialist").doc(id).delete()
     .then(res =>{
       this._router.navigate(["doctors/list"])
     }).catch(err => {
      console.log(err);
    })
   }
   


   

}
