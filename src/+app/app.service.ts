import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { HttpClientService } from './shared/services/http-client.service'

@Injectable()
export  class AppService{

  constructor(private httpClient: HttpClientService) {}

  getSeoContent(pageHref){
    let base_url = 'api/seo';
    let url = base_url + pageHref;
    return this.httpClient.get(url)
                          .map((r: Response) => { return r.json() });
  }
}
