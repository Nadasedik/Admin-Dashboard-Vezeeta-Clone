import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeStampToDate'
})
export class TimeStampToDatePipe implements PipeTransform {


  transform(value: any): unknown {
    let date =value.toDate().toLocaleDateString('en-US')

    //let date=new Date(value).toLocaleDateString('en-US')
    console.log(date)
    return date;
  }

}
