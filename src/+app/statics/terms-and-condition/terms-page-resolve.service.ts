import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Http } from '@angular/http';

import { Observable } from 'rxjs';

import { CacheService  } from '../../shared/cache.service';

@Injectable()
export class TermsPageResolveService implements Resolve<any> {

  constructor(private _cache: CacheService, private _http: Http){}

  resolve(route: ActivatedRouteSnapshot): Observable<any>|Promise<any>|any {
    let _tempUrl = route['_routerState'].url.split('?')[0];
    let _urlArr = (_tempUrl.split('/')).filter((item) => item !== "");
    let url = _urlArr.join('/')

    let key = url;
    let apiUrl = 'http://international.craftsvilla.com:8000/api/other/terms';
    
    if (this._cache.has(key)) {
      return Observable.of(this._cache.get(key));
    }
    return this._http.get(apiUrl)
                      .toPromise()
                      .then(data => {
                        if(data){
                          this._cache.set(key, data.json());
                          return data.json();
                        }
                        else {
                          return "";
                        }
                      });
  }
}
