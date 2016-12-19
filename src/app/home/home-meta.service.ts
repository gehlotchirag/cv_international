import { Injectable } from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { MetaService } from '../shared/services/meta.service';


@Injectable()
export class HomeMetaService implements Resolve<any> {

  constructor(private router: Router, private rs: MetaService){}

  resolve(route: ActivatedRouteSnapshot): Observable<any>|Promise<any>|any {

    return this.rs.getMetaDetails("home")
                  .then(meta => {
                    if(meta){
                      let metaTags = JSON.parse(meta['_body']);
                      console.log(metaTags.d);
                      return metaTags.d;
                    }
                    else {
                      return {};
                    }
                  });
  }

}
