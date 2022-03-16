import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DoctorsService } from 'src/app/Services/doctors.service';
import { IDoctor } from './../../../../viewmodels/idoctor';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/Components/common/dialog/dialog.component';
import { Router } from '@angular/router';
import { DialogDoctorCompComponent } from 'src/app/Components/common/dialog-doctor-comp/dialog-doctor-comp.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-view-all-doctors',
  templateUrl: './view-all-doctors.component.html',
  styleUrls: ['./view-all-doctors.component.scss']
})
export class ViewAllDoctorsComponent implements OnInit , AfterViewInit {

  displayedColumns: string[] = ["Name", "Gender", "Title", "Department", "Price", "btns"]
  allDoctors: IDoctor[] = []
  doctors!: IDoctor[]
  dataSource = new MatTableDataSource(this.doctors)
  sentDocts: any[] = []
  constructor(private doctorService: DoctorsService,
    private _dialog: MatDialog, private _router: Router
  ) {

    this.dataSource = new MatTableDataSource<IDoctor>(this.allDoctors)
  }


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  pageEvent!: PageEvent;

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getDoctors()
  }

  // function of geting doctors //
  getDoctors = () => {

    this.doctorService.getAllDoctors()
      .then(res => {
        console.log(res);
        
        res?.forEach(theDoctor => {
          this.allDoctors.push(theDoctor)
        })
        this.dataSource = new MatTableDataSource(this.allDoctors)

      }).catch(err => {
        console.log(err);
      })
  }


 


  openEditForm(element: any, id: string) {
    // console.log('element', element.preventDefault());

    console.log('id', id);
    this._router.navigate(['doctors/update/', id]);
  }




  openDoctorDialog(id: string): void {
    const dialogRef = this._dialog.open(DialogDoctorCompComponent, {
      width: '350px',
      data: {
        id: id,
        doctors: this.sentDocts
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dataSource = result //kda 3mlt remove mn l array

      console.log('receieved data', result);

    });
  }


  applyDoctorFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
