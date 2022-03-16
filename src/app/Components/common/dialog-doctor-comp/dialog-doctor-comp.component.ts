import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoctorsService } from 'src/app/Services/doctors.service';

@Component({
  selector: 'app-dialog-doctor-comp',
  templateUrl: './dialog-doctor-comp.component.html',
  styleUrls: ['./dialog-doctor-comp.component.scss']
})
export class DialogDoctorCompComponent implements OnInit {

  constructor(
    private _dialogRef: MatDialogRef<DialogDoctorCompComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private doctorServeice:DoctorsService,

  ) { }

  ngOnInit(): void {
  }

  Cancel(): void {
    this._dialogRef.close(this.data.dpts);
  }

  DeleteDoctor(): void {
    this.doctorServeice.deleteDoctor(this.data.id);
    //delete it from depts array in components
    console.log('data before delete', this.data.doctors);
    this.data.doctors = this.data.doctors.filter((doct: { id: any; }) => {
      return doct.id != this.data.id;
    });
    this._dialogRef.close(this.data.doctors); //sent data
    console.log('data after delete', this.data.doctors);

  }



}
