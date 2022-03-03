import { Medicine } from 'src/app/viewmodels/Medicine.model';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { PharmacyService } from 'src/app/Services/pharmacy.service';
import { MCategory } from 'src/app/viewmodels/MCategory.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-medicine-edit',
  templateUrl: './medicine-edit.component.html',
  styleUrls: ['./medicine-edit.component.scss']
})
export class MedicineEditComponent implements OnInit {
  medicineForm = new FormGroup({});

  categoryList: MCategory[] = [
    { id: 1, name: 'Tablet - حبوب' },
    { id: 2, name: 'Dropper - قطارة' },
    { id: 3, name: 'Bottle - زجاجة' },
    { id: 3, name: 'Tube - انبوبة' },
    { id: 3, name: 'Spray - سبراي' },
  ];

  constructor(
    private fb: FormBuilder,
    private pharmacy: PharmacyService,
    public dialog: MatDialogRef<MedicineEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.medicineForm = this.fb.group({
      id: [this.data.id, Validators.required],
      nameAR: [this.data.nameAR, Validators.required],
      nameEN: [this.data.nameEN, Validators.required],
      category: [this.data.category, Validators.required],
      quantity: [this.data.quantity, Validators.required],
      molarity: [this.data.molarity, Validators.required],
      size: [this.data.size, Validators.required],
      price: [this.data.price, Validators.required],
      url: [this.data.url, Validators.required],
    })
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.medicineForm.controls[controlName].hasError(errorName);
  }

  updateMedicine(id: any, data: Medicine) {

    console.log('before id ' + id)
    console.log('before data.id ' + this.data.id)
    console.log('before form.id ' + this.medicineForm.get('id')?.value)

    this.pharmacy.update(id, { ...data })
      .then(() => {
        console.log('The Medicine was updated successfully!')
      })
      .catch((err: any) => console.log(err));
    this.dialog.close()

    console.log('after id ' + id)
    console.log('after data.id ' + this.data.id)
    console.log('after form.id ' + this.medicineForm.get('id')?.value)
  }

  removeMedicine() {
    this.pharmacy.delete(this.data.uid)
      .then(() => {
        console.log('The Medicine was deleted successfully!');
      })
      .catch(err => console.log(err));
    this.dialog.close()
  }
}

