import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Listing } from './listing'

@Injectable()
export class ListingService {

  private listingsUrl = 'https://api.myjson.com/bins/wkp6';

  constructor(private http: Http){}

  getListings(): Observable<Listing[]> {
    return  this.http
                .get(this.listingsUrl)
                .map((r: Response) => r.json() as Listing[]);
  }
}
