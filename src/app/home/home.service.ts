import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { HOME_DASHBOARD_URL } from '../urls';

@Injectable()
export class HomeService {

  private dashboardUrl = 'HOME_DASHBOARD_URL';

  constructor(private http: Http){}

  getComponentsData(): Observable<any[]> {
    return  this.http
                .get(this.dashboardUrl)
                .map((r: Response) => r.json() as any[]);
  }
}
