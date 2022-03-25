import { AdminService } from 'src/app/Services/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Iadmin } from 'src/app/viewmodels/iadmin';



@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.scss']
})
export class EditAdminComponent implements OnInit {


  AdminForm: FormGroup;
  updateAdmin: any;
  add: Boolean = true;
  adminID!: string;


  constructor(
    private _AdminService: AdminService,
    private router: Router,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private activatedRoute: ActivatedRoute) {


    this.AdminForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit() {


    this.activatedRoute.paramMap.subscribe(param => {
      let id = param.get('id');
      if (id == undefined) {
        this.add = true;
      } else {
        this.adminID = id;
        this.add = false;
        this._AdminService.getAdminByID(id).subscribe(data => {
          this.updateAdmin = data;
          this.AdminForm.controls['name'].setValue(this.updateAdmin.name);
          this.AdminForm.controls['email'].setValue(this.updateAdmin.email);

          console.log('from ts', data);
        })

        console.log('from ts', this.updateAdmin);
        console.log(this.AdminForm);
      }


    })

  }

  EditAdmin() {
    let data = this.AdminForm.value;
    this._AdminService.editAdmin( this.adminID, { ...data });
    this.snackbar.open('Admin Data is updated successfully!', 'Dismiss', {
      duration: 3000
    });
    this.router.navigate(['Admin/list'])
  }

  hasErr(control: string, err: string): boolean {
    if ((this.AdminForm.controls[control].dirty) &&
      (this.AdminForm.controls[control].invalid) &&
      (this.AdminForm.controls[control].errors?.[err])) {
      return true
    } else {
      return false
    }
  }

  cancel(): void {
    this.router.navigate(['Admin/list']);
  }





}
