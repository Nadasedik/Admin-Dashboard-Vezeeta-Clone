import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { IDepartment } from '../viewmodels/idepartment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private _firestore: AngularFirestore,
              private _router: Router) {
  }

  addDept(dept:IDepartment) {
    this._firestore.collection('Departments2').doc().set({
      "name": dept.name,
      "head": ("د/ " +dept.head ),
      "date": dept.date,
      "common": dept.common,
      "numOfDocs": 0
    })
    .then(res => {
      console.log(res);
      this._router.navigate(['/departments']);
    })
    .catch(err => {
      console.log(err);
    })
  }

  getAllDepts(){
    let allData: any[] = [];
    const allDpts = this._firestore.collection('Departments2').get().toPromise()
    return allDpts.then((res) => {
      let docs2 = res?.docs;
      docs2?.forEach((document) => {
        let doc: any = document.data();
        let singleDoc:IDepartment = {
          id: document.id,
          name: doc.name, head: doc.head, date: doc.date,
          numOfDocs: doc.numOfDocs, common: doc.common
        }
        allData.push(singleDoc);
      })
      return allData;
    })
  }

  getDocByID(id: string){
    let dataa =this._firestore.collection('Departments2')
    .doc(id).get().toPromise();
    let singleDoc;
    return dataa.then((data) => {
      data?.data();
      singleDoc = data?.data();
      // singleDoc = {...data?.data(), date: 55}
      return singleDoc;
    })
    .catch(err => {
      console.log(err);
    })

  }

  updateDept(id: string, dpt: IDepartment) {
    let data =this._firestore.collection('Departments2')
    .doc(id).update(dpt);
    data.then(res => {
      this._router.navigate(['/departments']);
    }).catch(err => {
      console.log(err);
    })
  }

  deleteDept(id: string) {
    this._firestore.collection('Departments2').doc(id).delete()
    .then(res => {
      console.log('deleted department', res);
      this._router.navigate(['/departments']);
    })
    .catch(err => {
      console.log(err);
    })
  }

  filterByDept(dpt: String):Observable<any> {
    // let allData: any[] = [];
    //.where('name', "in" , dpt.split('')))
    console.log('from service', dpt.split(''));

    const allDpts = this._firestore.collection('Departments2',
    ref => ref.orderBy('name').startAt(dpt).endAt(dpt + '\uf8ff')).valueChanges();
    return allDpts;
  }
}
