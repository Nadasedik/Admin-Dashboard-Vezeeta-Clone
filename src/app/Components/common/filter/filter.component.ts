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
  @Input() data:any ;
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
// applyFilter(event: Event) {
//   const filterValue = (event.target as HTMLInputElement).value;
//   this.data.filter = filterValue.trim().toLowerCase();
//   this.data.filterPredicate = 
//   (data: any, filter: string) => data.Name.indexOf(filter) != -1;
//   console.log(this.data.filter)
// }
}
