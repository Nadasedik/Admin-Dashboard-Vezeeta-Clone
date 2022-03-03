import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientsService } from 'src/app/Services/patients.service';
import { IPatients } from 'src/app/viewmodels/IPatients';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from "rxjs";
import { map, finalize } from "rxjs/operators";

@Component({
  selector: 'app-AddEditPatients',
  templateUrl: './AddEditPatients.component.html',
  styleUrls: ['./AddEditPatients.component.scss']
})
export class AddEditPatientsComponent implements OnInit {

  PatientsForm: FormGroup;
  updatePatient:any;
  add: Boolean = true;
  patientID!: string;
  GenderArr:string[]=['Female','Male']
  filePath!: string;
  selectedFile!: File  ;
  fbb!: any;
  downloadURL!: Observable<string>;
  //ref:AngularFireStorgeRef
  constructor(private patientSer:PatientsService
             ,private router:Router
             ,private fb: FormBuilder
             ,private snackbar: MatSnackBar
             ,private activatedRoute: ActivatedRoute
             ,private  storge:AngularFireStorage
             ) 
              {

                this.PatientsForm = this.fb.group({
                  Name: ['',[ Validators.required,Validators.pattern('[A-Za-z]{3,}')]],
                  Address: ['', Validators.required],
                  Mobile: ['', [Validators.required,Validators.pattern('^01[0125][0-9]{8}$')]],
                  Email:['', [Validators.required,Validators.email]],
                  BirthDate: [new Date(), Validators.required],
                  Gender: ['',[ Validators.required]],
                  BloodGroup: ['', Validators.required],
                  Treatment: ['', Validators.required],
                  Image: ['', Validators.required],
                })
               }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(param => {
      let id = param.get('id');
      if(id == undefined) {
        this.add = true;
      } else {
        this.patientID = id;
        this.add = false;
        this.patientSer.getPatientByID(id).subscribe(data => {
          this.updatePatient = data;

          this.PatientsForm.controls['Name'].setValue(this.updatePatient.Name);
          this.PatientsForm.controls['Address'].setValue(this.updatePatient.Address);
          this.PatientsForm.controls['Mobile'].setValue(this.updatePatient.Mobile);
          this.PatientsForm.controls['Email'].setValue(this.updatePatient.Email);
          //this.PatientsForm.controls['BirthDate'].setValue(this.updatePatient.BirthDate);
          this.PatientsForm.controls['Gender'].setValue(this.updatePatient.Gender);
          this.PatientsForm.controls['BloodGroup'].setValue(this.updatePatient.BloodGroup);
          this.PatientsForm.controls['Treatment'].setValue(this.updatePatient.Treatment);
          this.PatientsForm.controls['Image'].setValue(this.updatePatient.Image);

            console.log('from ts', data);
        })

      }
    })

    // const id=this.activatedRoute.snapshot.paramMap.get('id');

    // this.patientSer.getPatientByID(id).subscribe(res=>{

    //   this.updatePatient=res;
    //   //this.PatientsForm

    // })
  }
  onFileSelected(event:any) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storge.ref(filePath);
    const task = this.storge.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fbb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }
  upload(event:any) {    
    this.filePath = event.target.files[0]
  }
  uploadImage(){
    console.log(this.filePath)
    this.storge.upload('/images'+Math.random()+this.filePath, this.filePath);
    
      
  }
   AddPatient()
   {
     this.patientSer.addNewPatient(this.PatientsForm.value);
     this.snackbar.open('Patients Data is Added successfully!', 'Dismiss', {
      duration: 3000
    });
     this.router.navigate(['patients'])
   }
   
  //  EditPatient()
  //  {
  //   const id=this.activatedRoute.snapshot.paramMap.get('id');
  //   this.patientSer.editPatient(this.PatientsForm.value,id);
  //   this.snackbar.open('Patients Data is updated successfully!', 'Dismiss', {
  //     duration: 3000
  //   });
  //   this.router.navigate(['patients'])
  //  }

   EditPatient()
   {
    let data = this.PatientsForm.value;
  
    this.patientSer.editPatient({...data},this.patientID);
    this.snackbar.open('Patients Data is updated successfully!', 'Dismiss', {
      duration: 3000
    });
    this.router.navigate(['patients'])
   }

   hasErr(control: string, err: string): boolean {
    if((this.PatientsForm.controls[control].dirty) &&
      (this.PatientsForm.controls[control].invalid) &&
      (this.PatientsForm.controls[control].errors?.[err])) {
      return true
    } else {
      return false
    }
  }

    cancel(): void {
      this.router.navigate(['/patients']);
    }
  
  
}
