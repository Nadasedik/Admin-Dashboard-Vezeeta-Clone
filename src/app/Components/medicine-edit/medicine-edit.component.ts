import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { PharmacyService } from 'src/app/Services/pharmacy.service';
import { MCategory } from 'src/app/viewmodels/MCategory.model';


@Component({
  selector: 'app-medicine-edit',
  templateUrl: './medicine-edit.component.html',
  styleUrls: ['./medicine-edit.component.scss']
})
export class MedicineEditComponent {
  newID: string = this.data.id;
  newNameAR: string = this.data.nameAR;
  newNameEN: string = this.data.nameEN;
  newCategory: string = this.data.category;
  newPrice: number = this.data.price;
  newMolarity: number = this.data.molarity;
  newSize: number = this.data.size;
  newQuantity: number = this.data.quantity;
  newImageURL: string = this.data.url;

  categoryList: MCategory[] = [
    { id: 1, name: 'Tablet - حبوب' },
    { id: 2, name: 'Dropper - قطارة' },
    { id: 3, name: 'Bottle - زجاجة' },
    { id: 3, name: 'Tube - انبوبة' },
    { id: 3, name: 'Spray - سبراي' },
  ];

  constructor(
    private pharmacy: PharmacyService,
    public dialog: MatDialogRef<MedicineEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  updateMedicine() {
    this.pharmacy.pharmacysRef.doc(this.data.id).update({
      id: this.newID,
    })
    this.dialog.close();
    console.log(this.data.id)
    console.log(this.newID)
  }
}


// nameAR: this.newNameAR,
// nameEN: this.newNameEN,
// category: this.newCategory,
// price: this.newPrice,
// molarity: this.newMolarity,
// size: this.newSize,
// quantity: this.newQuantity,
// imageURL: this.newImageURL,



  // updateMedicine(): void {
  //   const data = {
  //     id: this.currentMedicine.id,
  //     nameAR: this.currentMedicine.nameAR,
  //     nameEN: this.currentMedicine.nameEN,
  //     category: this.currentMedicine.category,
  //     price: this.currentMedicine.price,
  //     molarity: this.currentMedicine.molarity,
  //     size: this.currentMedicine.size,
  //     quantity: this.currentMedicine.quantity,
  //     imageURL: this.currentMedicine.imageURL,
  //   };
  //   if (this.currentMedicine.id) {
  //     this.pharmacy.update(this.currentMedicine.id, data)
  //       .then(() => {
  //         console.log('The Medicine was deleted successfully!')
  //       })
  //       .catch(err => console.log(err));
  //   }
  // }

  // deleteMedicine(): void {
  //   if (this.currentMedicine.id) {
  //     this.pharmacy.delete(this.currentMedicine.id)
  //       .then(() => {
  //         console.log('The Medicine was deleted successfully!');
  //       })
  //       .catch(err => console.log(err));
  //     console.log(this.currentMedicine.id)
  //   }
  // }

  // changeCategory(event: any) {
  //   // this.medicineForm.value.category?.setValue(event.target.value, {
  //   //   onlySelf: true,
  //   // });
