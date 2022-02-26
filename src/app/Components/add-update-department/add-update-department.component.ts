import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDepartment } from '../../viewmodels/idepartment';
import { DepartmentsService } from '../../Services/departments.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  constructor(private _builder: FormBuilder,
    private dptSer: DepartmentsService,
    private _activatedRoute: ActivatedRoute, private _router: Router,
    private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.deptForm = this._builder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      head: ['', [Validators.required, Validators.minLength(3)]],
      date: ['', Validators.required],
      common: [false, Validators.required]
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
            console.log('from ts', data);
        })
        .catch(err => {
          console.log(err);
        })
      }
    })

    //update
    // console.log('from ts', this.deptSet.updateDept('KSf2lO5njfjTTJEsHIlw'));
  }

  addDept(): void {
    let data = this.deptForm.value;
    let common = this.deptForm.value.common == 'true';
    this.dptSer.addDept({...data, common});
    //open snackbar
    this._snackbar.open('Department is added successfully!', 'close');
  }

  updateDept(): void {
    let data = this.deptForm.value;
    let common = this.deptForm.value.common == 'true';
    this.dptSer.updateDept(this.dptID, {...data, common});
     //open snackbar
    this._snackbar.open('Department is updated successfully!', 'close');
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

}
