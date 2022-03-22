import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorsService } from 'src/app/Services/doctors.service';

@Component({
  selector: 'app-add-edit-doctor',
  templateUrl: './add-edit-doctor.component.html',
  styleUrls: ['./add-edit-doctor.component.scss'],
})
export class AddEditDoctorComponent implements OnInit {
  add: Boolean = true;
  doctorForm = new FormGroup({});
  doct: any;
  doctorID!: string;
  constructor(
    private FormBuilder: FormBuilder,
    private doctorsService: DoctorsService,
    private snackbar: MatSnackBar,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.doctorForm = this.FormBuilder.group({
      Name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z ]+$'),
        ],
      ],
      nameInArabic: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[\u0621-\u064A\u0660-\u0669 ]+$'),
        ],
      ],
      Title: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern('^[a-zA-Z ]+$'),
        ],
      ],
      titleInArabic: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[\u0621-\u064A\u0660-\u0669 ]+$'),
        ],
      ],
      // gender:['',[Validators.required, Validators.minLength(4),Validators.pattern('^[a-zA-Z ]+$')]],
      // genderInArabic:['',[Validators.required, Validators.minLength(3),Validators.pattern('^[\u0621-\u064A\u0660-\u0669 ]+$')]],
      Department: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern('^[a-zA-Z ]+$'),
        ],
      ],
      departmentInArabic: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[\u0621-\u064A\u0660-\u0669 ]+$'),
        ],
      ],
      Price: ['', [Validators.required, Validators.minLength(3)]],
      Information: ['', [Validators.pattern('^[a-zA-Z ]+$')]],
      InformationInArabic: [
        '',
        [Validators.pattern('^[\u0621-\u064A\u0660-\u0669 ]+$')],
      ],
      nationalID: ['', [Validators.required, Validators.maxLength(18)]],
      city: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern('^[a-zA-Z ]+$'),
        ],
      ],
      area: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern('^[a-zA-Z ]+$'),
        ],
      ],
      areaAR: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern('^[\u0621-\u064A\u0660-\u0669 ]+$'),
        ],
      ],
      address: ['', [Validators.required]],
      dpt: [''],
      dptAR: [''],
      Clinic_Address:['',[Validators.required]],
Clinic_Phone:['',[Validators.required]]
    });

    this._activatedRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id == undefined) {
        this.add = true;
      } else {
        this.doctorID = id;
        this.add = false;
        this.doctorsService
          .getSpecificDoctorByID(this.doctorID)
          .then((data) => {
            this.doct = data;
            this.doctorForm.controls['Name'].setValue(this.doct.Name);
            this.doctorForm.controls['nameInArabic'].setValue(
              this.doct.nameInArabic
            );
            this.doctorForm.controls['Title'].setValue(this.doct.Title);
            this.doctorForm.controls['titleInArabic'].setValue(
              this.doct.titleInArabic
            );

            this.doctorForm.controls['Department'].setValue(
              this.doct.Department
            );
            this.doctorForm.controls['departmentInArabic'].setValue(
              this.doct.departmentInArabic
            );
            this.doctorForm.controls['Information'].setValue(
              this.doct.Information
            );
            this.doctorForm.controls['InformationInArabic'].setValue(
              this.doct.InformationInArabic
            );
            this.doctorForm.controls['Price'].setValue(this.doct.Price);
            this.doctorForm.controls['nationalID'].setValue(
              this.doct.nationalID
            );
            this.doctorForm.controls['city'].setValue(this.doct.city);
            this.doctorForm.controls['area'].setValue(this.doct.area);
            this.doctorForm.controls['areaAR'].setValue(this.doct.areaAR);
            this.doctorForm.controls['dpt'].setValue(this.doct.dpt);
            this.doctorForm.controls['dptAR'].setValue(this.doct.dptAR);
            this.doctorForm.controls['address'].setValue(this.doct.address);
            this.doctorForm.controls['Clinic_Address'].setValue(this.doct.Clinic_Address);
            this.doctorForm.controls['Clinic_Phone'].setValue(this.doct.Clinic_Phone);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }

  addDoct(): void {
    let data = this.doctorForm.value;
    this.doctorsService.addDoctor({ ...data });
    this.snackbar.open('Doctor is added succesfully', 'close');
  }

  updateDoctor(): void {
    let data = this.doctorForm.value;
    this.doctorsService.updateDoctorINFO(this.doctorID, {
      ...data,
      status: 'complete',
    });
    this.snackbar.open("Doctor's info is updated successfully!", 'close');
  }

  //validation
  hasErr(control: string, err: string): boolean {
    if (
      this.doctorForm.controls[control].dirty &&
      this.doctorForm.controls[control].invalid &&
      this.doctorForm.controls[control].errors?.[err]
    ) {
      return true;
    } else {
      return false;
    }
  }

  //cancel button
  cancel(): void {
    this._router.navigate(['/doctors/list']);
  }
}
