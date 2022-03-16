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
  @Input() data: any;

  constructor(private _router: Router, private langService: LangService) { }

  ngOnInit(): void {
    this.lang = this.langService.LangParam
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


  filter(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.data.filter = val.trim().toLowerCase();
    this.data.filterPredicate = //title de l hflter beha
    (data: any, filter: string) => data.title.indexOf(filter) != -1;
  }

}
