import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDepartment } from '../../viewmodels/idepartment';
import { DepartmentsService } from '../../Services/departments.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, from, Observable, switchMap } from 'rxjs';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { Storage } from '@angular/fire/storage';


@Component({
  selector: 'app-add-update-department',
  templateUrl: './add-update-department.component.html',
  styleUrls: ['./add-update-department.component.scss']
})
export class AddUpdateDepartmentComponent implements OnInit {

  deptForm = new FormGroup({});
  //l add
  add: Boolean = true;
  dpt: any;
  dptID!: string;
  // dpt: IDepartment = {} as IDepartment;
  //pic upload
  imgSrc: string = '';
  selectedImg!: File;
  currentImg!: string;
  constructor(private _builder: FormBuilder,
    private dptSer: DepartmentsService,
    private _activatedRoute: ActivatedRoute, private _router: Router,
    private _snackbar: MatSnackBar, private _storage:AngularFireStorage,
    private _storage2: Storage) { }

  ngOnInit(): void {
    this.deptForm = this._builder.group({
      name: ['', [Validators.required, Validators.minLength(3),
        Validators.pattern('^[a-zA-Z ]+$')]],
      nameAR: ['', [Validators.required, Validators.minLength(3),
        Validators.pattern('^[\u0621-\u064A\u0660-\u0669 ]+$')]],
      head: ['', [Validators.required, Validators.minLength(3),
        Validators.pattern('^[a-zA-Z ]+$')]],
      headAR: ['', [Validators.required, Validators.minLength(3),
        Validators.pattern('^[\u0621-\u064A\u0660-\u0669 ]+$')]],
      date: [new Date(), Validators.required],
      common: [false, Validators.required],
      //dynamic validation
      viewInSlider: [false],
      sliderPic: [''],
    });

    //l routes
    this._activatedRoute.paramMap.subscribe(param => {
      let id = param.get('id');
      if(id == undefined) {
        this.add = true;
      } else {
        this.dptID = id;
        this.add = false;
        this.dptSer.getDocByID(id).then(data => {
          this.dpt = data;
          //set values to input to enable update btn without any changes
          this.deptForm.controls['name'].setValue(this.dpt.name);
          this.deptForm.controls['nameAR'].setValue(this.dpt.nameAR);
          this.deptForm.controls['head'].setValue(this.dpt.head);
          this.deptForm.controls['headAR'].setValue(this.dpt.headAR);
          // this.deptForm.controls['date'].setValue(this.dpt.date);
          // this.deptForm.controls['common'].setValue(this.dpt.common);
          this.deptForm.controls['viewInSlider'].setValue(this.dpt.viewInSlider);
          this.deptForm.controls['sliderPic'].setValue(this.dpt.sliderPic);
        })
        .catch(err => {
          console.log(err);
        })
      }
    })

  }

  //props
  //view info
  get ViewInSlider(): Boolean {
    return this.deptForm.controls['viewInSlider'].value
  }
  get ViewInModal(): Boolean {
    return this.deptForm.controls['viewInModal'].value
  }

  preview(event: any) {
    this.selectedImg = event.target.files[0];
  }

  addDept(): void {
    if(!this.selectedImg) {
      let data = this.deptForm.value;
        let common = this.deptForm.value.common == 'true';
        this.dptSer.addDept({...data, common});
        //open snackbar
        this._snackbar.open('Department is added successfully!', 'close', {
          duration: 3000
        });
    } else {
    this._storage.ref(`/icons2/${this.selectedImg.name}`)
    .put(this.selectedImg)
    .snapshotChanges().subscribe(d => {
      d?.ref.getDownloadURL().then(ref => {
        let data = this.deptForm.value;
        let common = this.deptForm.value.common == 'true';
        this.dptSer.addDept({...data, common}, ref);
        //open snackbar
        this._snackbar.open('Department is added successfully!', 'close', {
          duration: 3000
        });
      })
    })
  }
  }

  updateDept(): void {
    let data = this.deptForm.value;
    let common = this.deptForm.value.common == 'true';
    this.dptSer.updateDept(this.dptID, {...data, common});
     //open snackbar
    this._snackbar.open('Department is updated successfully!', 'close', {
      duration: 3000
    });
  }

  //cancel button
  cancel(): void {
    this._router.navigate(['/departments']);
  }

  //validation
  hasErr(control: string, err: string): boolean {
    if((this.deptForm.controls[control].dirty) &&
      (this.deptForm.controls[control].invalid) &&
      (this.deptForm.controls[control].errors?.[err])) {
      return true
    } else {
      return false
    }
  }


  updateSliderValidator() {
    if(this.ViewInSlider) {
      this.deptForm.get('sliderPic')?.addValidators([Validators.required]);
    } else {
      this.deptForm.get('sliderPic')?.clearValidators();
    }
    this.deptForm.get('sliderPic')?.updateValueAndValidity();
  }


}
