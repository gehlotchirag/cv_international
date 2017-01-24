import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { SitemapService } from './sitemap.service';
import { CacheService } from '../../shared/cache.service';

@Injectable()
export class SitemapResolveService implements Resolve<any> {

  constructor(private ss: SitemapService, private router: Router, private _cache: CacheService){}

  resolve(route: ActivatedRouteSnapshot): Observable<any>|Promise<any>|any {
    let key = 'html-sitemap'

    if (this._cache.has(key)) {
      return Observable.of(this._cache.get(key));
    }

    return this.ss.getSitemap()
               .then(sitemap => {
                 if(sitemap){
                    this._cache.set(key, sitemap.json());
                    return sitemap.json();
                 }
                 else {
                   return {};
                 }
               });
  }

}
