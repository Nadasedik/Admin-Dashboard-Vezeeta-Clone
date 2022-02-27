import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Admin Dashboard';
  sidebarOpen = true;

  ngOnInit() {
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
