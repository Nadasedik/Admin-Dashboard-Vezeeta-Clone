import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  pharmacy: boolean = false;


  department: boolean = false;

  doctor:boolean =false;

  patients:boolean =false;

  Admin:boolean = false;


  



  constructor() { }

  ngOnInit(): void {
  }

}
