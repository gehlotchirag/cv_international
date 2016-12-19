import { Injectable } from '@angular/core';
import { Http, Response , Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { HttpClientService } from './http-client.service'

@Injectable()
export class MetaService {
  private metaUrls = {
    'home': 'api/seo/home',
    'listing': '',
    'product': ''
  }
  constructor(
      private httpClient: HttpClientService,
      private http: Http
  ){}

  getMetaDetails(pageType: any) {
    let url = this.metaUrls[pageType];
    return this.httpClient.get(url).toPromise();
  }
}
