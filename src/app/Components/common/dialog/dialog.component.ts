import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepartmentsService } from 'src/app/Services/departments.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(private _dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dptSer: DepartmentsService) { }
    // L Inject to recieve data

  ngOnInit(): void {
  }

  Cancel(): void {
    this._dialogRef.close(this.data.dpts);
  }
  DeleteDept(): void {
    this.dptSer.deleteDept(this.data.id);
    //delete it from depts array in components
    console.log('data before delete', this.data.dpts);
    this.data.dpts = this.data.dpts.filter((dpt: { id: any; }) => {
      return dpt.id != this.data.id;
    });
    this._dialogRef.close(this.data.dpts); //sent data
    console.log('data after delete', this.data.dpts);

  }

}
