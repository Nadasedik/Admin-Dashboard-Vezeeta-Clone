import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  lang: string = '';
  constructor(private _activatedRoute: ActivatedRoute) {
  }

  get LangParam() {
    this._activatedRoute.queryParamMap.subscribe(params => {
      let data: string| null = params.get('lang');
      if(params.get('lang') == undefined || params.get('lang') == null) {
        console.log('entered');
        this.lang = 'EN'; //as default lw l param not exist
      } else {
        this.lang = data!; //not null
      }
    })
    return this.lang;
  }
}
