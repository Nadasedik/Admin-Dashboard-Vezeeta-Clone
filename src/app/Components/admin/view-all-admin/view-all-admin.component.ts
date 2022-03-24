import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/Services/admin.service';
import { Iadmin } from 'src/app/viewmodels/iadmin';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../common/dialog/dialog.component';


@Component({
  selector: 'app-view-all-admin',
  templateUrl: './view-all-admin.component.html',
  styleUrls: ['./view-all-admin.component.scss']
})
export class ViewAllAdminComponent implements OnInit {
  displayedColumns: string[] = [
    'Name', 'Email', 'Actions'
  ];
  deletedmin!: any
  admin!: Iadmin[];
  ELEMENT_DATA: any;
  dataSource!: MatTableDataSource<Iadmin>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(
    private _AdminService: AdminService,
    private _dialog: MatDialog) { }

  ngOnInit(): void {
    this._AdminService.getAllAdmins().subscribe(res => {
      this.admin = res.map(ele => {
        return {
          id: ele.payload.doc.id,
          ...ele.payload.doc.data() as {}
        } as Iadmin
      })
      this.ELEMENT_DATA = this.admin
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    })


  }

  getDeletedAdmin(ptn: Iadmin) {
    this.deletedmin = ptn;
    console.log(this.deletedmin.id);
  }

  DeleteAdmin(admin: Iadmin) {
    this._AdminService.deleteAdmin(admin);
    console.log(admin)
  }

}
