import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Listing } from './listing';
import { HttpClientService } from '../shared/services/http-client.service'


@Injectable()
export class ListingService {

  private listingsUrl = 'wkp6';

  constructor(private httpClient: HttpClientService){}

  getListings(): Observable<Listing[]> {
    return  this.httpClient
                .get(this.listingsUrl)
                .map((r: Response) => r.json() as Listing[]);
  }
}
