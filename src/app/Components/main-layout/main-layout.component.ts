import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  title = 'Admin Dashboard';
  sidebarOpen = true;

  ngOnInit(): void {}
  
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
