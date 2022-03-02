import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Medicine } from 'src/app/viewmodels/Medicine.model';
import { PharmacyService } from 'src/app/Services/pharmacy.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MedicineEditComponent } from '../medicine-edit/medicine-edit.component';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class MedicineListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  currentMedicine!: Medicine;
  columnsToDisplay = ['id', 'nameAR', 'nameEN', 'category', 'quantity', 'price'];
  pharmacyData!: MatTableDataSource<Medicine>;

  constructor(
    private pharmacy: PharmacyService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.pharmacy.getAll().subscribe(data => {
      this.pharmacyData = new MatTableDataSource(data);
      this.pharmacyData.sort = this.sort;
      this.pharmacyData.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.pharmacyData.filter = filterValue.trim().toLowerCase();
  }

  editMedicine(data: any): void {
    const dialogRef = this.dialog.open(MedicineEditComponent, {
      width: '1000px',
      height: '600px',
      data: {
        id: data.id,
        nameAR: data.nameAR,
        nameEN: data.nameEN,
        category: data.category,
        quantity: data.quantity,
        molarity: data.molarity,
        size: data.size,
        price: data.price,
        url: data.url,
      }
    })
    console.log({ ...data })
  }
}
