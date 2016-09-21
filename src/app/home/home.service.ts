import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {

  private listingsUrl = 'https://api.myjson.com/bins/wkp6';

  constructor(private http: Http){}

  getListings(): Observable<any[]> {
    return  this.http
                .get(this.listingsUrl)
                .map((r: Response) => r.json() as any[]);
  }
}
