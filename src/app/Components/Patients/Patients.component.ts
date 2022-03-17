import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PatientsService } from 'src/app/Services/patients.service';
import { IPatients } from 'src/app/viewmodels/IPatients';
import { MatPaginator } from '@angular/material/paginator';
import { DialogComponent } from './../common/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-Patients',
  templateUrl: './Patients.component.html',
  styleUrls: ['./Patients.component.scss']
})
export class PatientsComponent implements OnInit {
  displayedColumns: string[] = [
    'Name', 'Mobile', 'Email', 'Birth Date', 'Actions'
  ];
  deletePatient!: any
  patient!: IPatients[];
  ELEMENT_DATA: any;
  dataSource!: MatTableDataSource<IPatients>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private patientSer: PatientsService
    , private _dialog: MatDialog) { }

  ngOnInit() {
    this.patientSer.getAllPatients().subscribe(res => {
      this.patient = res.map(ele => {
        return {
          id: ele.payload.doc.id,
          ...ele.payload.doc.data() as {}
        } as IPatients
      })
      this.ELEMENT_DATA = this.patient
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trimStart().toLowerCase();
    this.dataSource.filterPredicate =
      (data: IPatients, filter: string) => data.Name.indexOf(filter) != -1;
    console.log(this.dataSource.filter)
  }

  getDeletedPatient(ptn: IPatients) {
    this.deletePatient = ptn
  }

  DeletePatient(patient: IPatients) {
    this.patientSer.deletePatient(patient)
  }
}
