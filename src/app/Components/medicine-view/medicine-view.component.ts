import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Medicine } from 'src/app/viewmodels/Medicine.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-medicine-view',
  templateUrl: './medicine-view.component.html',
  styleUrls: ['./medicine-view.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class MedicineViewComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  columnsToDisplay = ['id', 'name', 'category', 'price'];
  dataSource = new MatTableDataSource<Medicine>(ELEMENT_DATA);

  expandedElement!: Medicine;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

const ELEMENT_DATA: Medicine[] = [
  {
    id: "1",
    name: "33",
    category: "1",
    price: "32",
    molarity: "32",
    size: "32",
    quantity: "32",
    imageURL: "32",
  },
  {
    id: "15",
    name: "353",
    category: "51",
    price: "352",
    molarity: "352",
    size: "352",
    quantity: "325",
    imageURL: "352",
  },
];

