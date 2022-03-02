import { Component, Input, OnInit } from '@angular/core';
import { LangService } from 'src/app/Services/lang.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input() title: String = "";
  @Input() subTitle: String = "";
  @Input() titleAR: String = '';
  @Input() subTitleAR: String= '';
  //for localize
  lang: String = '';
  constructor(private langService: LangService) { }

  ngOnInit(): void {
    this.lang = this.langService.LangParam;
    console.log('from breadcrumb', this.lang);
  }
}
