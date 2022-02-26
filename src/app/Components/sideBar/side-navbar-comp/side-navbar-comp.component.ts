import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navbar-comp',
  templateUrl: './side-navbar-comp.component.html',
  styleUrls: ['./side-navbar-comp.component.scss']
})
export class SideNavbarCompComponent implements OnInit {
  opened=false
  department: boolean = false;
  constructor() {

   }

  ngOnInit(): void {
  }





}
