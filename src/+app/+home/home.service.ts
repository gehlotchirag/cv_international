import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';

import { CacheService  } from '../shared/cache.service';
import { HttpClientService } from '../shared/services/http-client.service';
import CartInfo from '../shared/interfaces/cart-info';

@Injectable()
export class HomeService {

  private dashboardUrl = 'api/homepagedata'// HOME_DASHBOARD_URL;

  constructor(private httpClient: HttpClientService, private _cache: CacheService){}

  getComponentsData() {
    let key = this.dashboardUrl;

    if (this._cache.has(key)) {
      return Observable.of(this._cache.get(key));
    }

    return  this.httpClient
                .get(this.dashboardUrl)
                .map(res => res.json())
                .do(data => {
                  this._cache.set(key, data);
                });
  }

}
