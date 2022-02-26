import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LangService } from 'src/app/Services/lang.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() title = '';
  @Input() route = '';
  @Input() titleAR = '';
  lang: string = '';
  //filter
  FilterKey: any;
  constructor(private _router: Router, private langService: LangService) { }

  ngOnInit(): void {
    this.lang = this.langService.LangParam
  }

  ngOnChanges(): void {
    console.log('from filter', this.FilterKey);
}
openForm(): void {
  this._router.navigate([this.route]);
}

}
