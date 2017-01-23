import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';

import { HttpClientService } from './shared/services/http-client.service'
import { CacheService  } from './shared/cache.service';
@Injectable()
export  class AppService{

  constructor(private httpClient: HttpClientService, private _cache: CacheService) {}

  getSeoContent(pageHref){
    let base_url = 'api/seo';
    let url = base_url + pageHref;
    let key = url;
    if (this._cache.has(key)) {
     return Observable.of(this._cache.get(key));
    }
    return this.httpClient.get(url)
                          .map((r: Response) => { return r.json() })
                          .do(data => {
				            this._cache.set(key, data);
				          });
  }
}
