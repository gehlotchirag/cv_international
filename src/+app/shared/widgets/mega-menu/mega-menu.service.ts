import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';

import { HttpClientService } from '../../services/http-client.service'
import { CacheService  } from '../../cache.service';
@Injectable()
export  class MegaMenuService{

  constructor(private httpClient: HttpClientService, private _cache: CacheService) {}

  getMegaMenuData(){
    let megaMenuUrl = 'api/dmegamenu/';
    let key = megaMenuUrl;
    let menuCategoriesData;
    if (this._cache.has(key)) {
      return Observable.of(this._cache.get(key));
    }

   
    return this.httpClient
                .get(megaMenuUrl)
                 .map((res: Response) => res.json())
                 .do(data => {
                    this._cache.set(key, data);
                 })
  }
}