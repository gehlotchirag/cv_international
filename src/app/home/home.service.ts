import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { HttpClientService } from '../shared/services/http-client.service';
import CartInfo from '../shared/interfaces/cart-info';

@Injectable()
export class HomeService {

  private dashboardUrl = 'api/homepagedata'// HOME_DASHBOARD_URL;

  constructor(private httpClient: HttpClientService){}

  getComponentsData() {
    return  this.httpClient
                .get(this.dashboardUrl)
                .flatMap((r: Response) => {
                  let payload = JSON.parse(r['_body']);
                  return payload.d;
                });
  }

}
