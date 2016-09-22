import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import {LISTING_URL_PREFIX} from '../urls';
import { Listing } from './listing';


@Injectable()
export class ListingService {

  private listingsUrl = LISTING_URL_PREFIX;

  constructor(private http: Http){}

  getListings(): Observable<Listing[]> {
    return  this.http
                .get(this.listingsUrl)
                .map((r: Response) => r.json() as Listing[]);
  }
}
