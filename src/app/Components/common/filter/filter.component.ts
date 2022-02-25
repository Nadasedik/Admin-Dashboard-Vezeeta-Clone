import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() title = '';
  @Input() route = '';
  //filter
  FilterKey: any;
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log('from filter', this.FilterKey);
}
openForm(): void {
  this._router.navigate([this.route]);
}

}
