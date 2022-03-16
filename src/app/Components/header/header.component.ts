import { AuthService } from './../../Services/auth.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleThisSidebar: EventEmitter<any> = new EventEmitter();
  constructor(private authSer: AuthService) { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.toggleThisSidebar.emit();
  }

  logout(): void {
    this.authSer.logout();
  }
}
