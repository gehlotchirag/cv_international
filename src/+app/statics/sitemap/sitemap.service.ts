import { Injectable } from '@angular/core';

import { HttpClientService } from '../../shared/services/http-client.service'

@Injectable()
export class SitemapService {
  private sitemapUrl = 'api/seo/html_map';

  constructor(
      private httpClient: HttpClientService
  ){}

  getSitemap() {
    return this.httpClient
               .get(this.sitemapUrl)
               .toPromise();
  }
}
