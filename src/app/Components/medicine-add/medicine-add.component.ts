import { Medicine } from './../../viewmodels/Medicine.model';
import { MCategory } from './../../viewmodels/MCategory.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PharmacyService } from 'src/app/Services/pharmacy.service';

@Component({
  selector: 'app-medicine-add',
  templateUrl: './medicine-add.component.html',
  styleUrls: ['./medicine-add.component.scss']
})
export class MedicineAddComponent implements OnInit {

  categories: MCategory[] = [
    { id: 1, name: 'Tablet' },
    { id: 2, name: 'Dropper' },
    { id: 3, name: 'Bottle' },
    { id: 3, name: 'Tube' },
    { id: 3, name: 'Spray' },
  ];

  medicineForm = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private pharmacyService: PharmacyService,
    private activatedRoute: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit() {
    this.medicineForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      category: ['', Validators.required],
      quantity: ['', Validators.required],
      molarity: ['', Validators.required],
      size: ['', Validators.required],
      price: ['', Validators.required],
      url: ['', Validators.required],
    })
  }

  changeCategory(event: any) {
    this.medicineForm.value.category?.setValue(event.target.value, {
      onlySelf: true,
    });
  }

  AddMedicine(medicineForm: Medicine): void {
    this.pharmacyService.create(this.medicineForm.value).then(() => {
      console.log('Created new item successfully!');
    });
  }


  openAddSnackBar() {
    this.snackbar.open('Added!', 'Dismiss')
  }
}
