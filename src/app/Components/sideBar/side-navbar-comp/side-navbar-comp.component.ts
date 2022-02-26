import { Component, OnInit } from '@angular/core';
import { LangService } from 'src/app/Services/lang.service';

@Component({
  selector: 'app-side-navbar-comp',
  templateUrl: './side-navbar-comp.component.html',
  styleUrls: ['./side-navbar-comp.component.scss']
})
export class SideNavbarCompComponent implements OnInit {
  opened=false
  department: boolean = false;
  lang: string = '';
  constructor(private langService: LangService) {
  }

  ngOnInit(): void {
    this.lang = this.langService.LangParam;
  }





}
