import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { SitemapService } from './sitemap.service';

@Injectable()
export class SitemapResolveService implements Resolve<any> {

  constructor(private ss: SitemapService, private router: Router){}

  resolve(route: ActivatedRouteSnapshot): Observable<any>|Promise<any>|any {

    return this.ss.getSitemap()
               .then(sitemap => {
                 if(sitemap){
                    return sitemap.json();
                 }
                 else {
                   return {};
                 }
               });
  }

}
