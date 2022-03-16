import { IDepartment } from './../../viewmodels/idepartment';
import { AfterViewInit, Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartmentsService } from 'src/app/Services/departments.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from './../common/dialog/dialog.component';
import { LangService } from 'src/app/Services/lang.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit, OnChanges, AfterViewInit {
  panelOpenState: boolean = false;
  allDept: IDepartment[] = [];
  displayedColumns: string[] = ['numOfDocs','name', 'head',

    'date',  'popularity', 'btns'];
  dataSource: any;

  // dataSource: any;

  //da ll paginator
  //da ll delete 3l4an yreload da
  sentDpts: any[] = [];
  //l filter
  FilterKey = '';
  //l localiation
  lang = '';
  //for filter
  dpts!: IDepartment[];
  // dataSource = new MatTableDataSource(this.dpts);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  pageEvent!: PageEvent;
  constructor(private deptSet: DepartmentsService,
    private _router: Router, private _dialog: MatDialog,
    private langService: LangService) {
      this.dataSource = new MatTableDataSource<IDepartment>(this.allDept)
    }

  ngOnInit(): void {
    this.getAllDepts();
    this.filterData();
    this.lang = this.langService.LangParam;
  }
  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;
  }
  ngOnChanges(): void {
    console.log('filter', this.FilterKey);
  }

  getAllDepts() {
    this.deptSet.getAllDepts().then(res => {
      res?.forEach(singleDoc => {
        this.allDept.push(singleDoc);
      })
      this.dataSource = new MatTableDataSource(this.allDept); //7sl edit hena
      this.sentDpts = this.allDept;
    }).catch(err => {
      console.log(err);
    })
  }
  filterData() {
    // this.deptSet.filterByDept('اسنان').subscribe(data => {
    //   console.log('from ts', data);
    // })
    this.deptSet.filterByDept('اسنان').subscribe(data => {
      console.log('from ts', data);
    })
  }
  openEditForm(element: any,id: string) {
    // console.log('element', element.preventDefault());

    console.log('id', id);
    this._router.navigate(['/departments/update/', id]);
  }


  //dialog
  openDialog(id: string): void {
    const dialogRef = this._dialog.open(DialogComponent, {
      width: '350px',
      data: {
        id: id,
        dpts: this.sentDpts
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dataSource = result //kda 3mlt remove mn l array

      console.log('receieved data', result);

    });
  }

  //for filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
