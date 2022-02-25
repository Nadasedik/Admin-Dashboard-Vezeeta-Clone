import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeStampToDate'
})
export class TimeStampToDatePipe implements PipeTransform {


  transform(value: any): unknown {
    let date = value.toDate().toLocaleDateString()
    return date;
  }

}
