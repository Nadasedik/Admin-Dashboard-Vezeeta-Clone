import { Component, OnInit } from '@angular/core';
import { LangService } from './Services/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'newadmindashboard';
  lang: string = '';

  constructor(private langService: LangService) {}
  ngOnInit(): void {
    this.lang = this.langService.LangParam;
    console.log('from app comp', this.lang);
  }
}
