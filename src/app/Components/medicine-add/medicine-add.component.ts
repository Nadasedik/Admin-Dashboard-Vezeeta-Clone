import { Component, OnInit } from '@angular/core';
import { Medicine } from './../../viewmodels/Medicine.model';
import { MCategory } from './../../viewmodels/MCategory.model';
import { PharmacyService } from 'src/app/Services/pharmacy.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-medicine-add',
  templateUrl: './medicine-add.component.html',
  styleUrls: ['./medicine-add.component.scss']
})
export class MedicineAddComponent implements OnInit {

  categoryList: MCategory[] = [
    { id: 1, name: 'Tablet - حبوب' },
    { id: 2, name: 'Dropper - قطارة' },
    { id: 3, name: 'Bottle - زجاجة' },
    { id: 3, name: 'Tube - انبوبة' },
    { id: 3, name: 'Spray - سبراي' },
  ];

  medicineForm = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private pharmacyService: PharmacyService,
  ) { }

  config: MatSnackBarConfig = {
    duration: 8000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
    panelClass: ['blue-snackbar']
  }

  ngOnInit() {
    this.medicineForm = this.fb.group({
      id: ['', Validators.required],
      nameAR: ['', Validators.required],
      nameEN: ['', Validators.required],
      category: ['', Validators.required],
      quantity: ['', Validators.required],
      molarity: ['', Validators.required],
      size: ['', Validators.required],
      price: ['', Validators.required],
      url: ['https://altibbi.com//img/drug.png', Validators.required],
    })
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.medicineForm.controls[controlName].hasError(errorName);
  }

  AddMedicine(id: any, medicineForm: Medicine): void {
    this.pharmacyService.create(id, this.medicineForm.value).then(() => {
      console.log('Created new item successfully!');
    })
      ;
    this.snackbar.open('Medicine added successfully!', '', this.config)
    this.medicineForm.reset();
    Object.keys(this.medicineForm.controls).forEach(key => {
      this.medicineForm.get(key)?.setErrors(null);
    });
  }
}
