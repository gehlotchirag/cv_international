import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class HttpClientService {
  private http: Http;
  private headers = new Headers();

  private BASE_URL = 'http://international.craftsvilla.com/';

  constructor(http: Http) {
    this.http = http;
    this.headers.append('content-type', 'application/json');
  }

  get(url: string, searchObj?: Object) {
    let searchParams = new URLSearchParams();
    if(searchObj){
      for(let key in searchObj){
        if(typeof searchObj[key] == 'object'){
          searchParams.set(key, JSON.stringify(searchObj[key]));
        }
        else {
          searchParams.set(key, searchObj[key]);
        }
      }
    }
    let modifiedURL: string = `${this.BASE_URL}${url}`;

    return this.http.get( modifiedURL, {
      search: searchParams,
      withCredentials: true
    })
  }

/*
    Pass the url, body for request and any optional headers to make the request
    */
  post(url: string, body: any, headersObj?: Object) {
    let tempHeaderObj = new Headers(this.headers);
    if(headersObj){
      for(let key in headersObj){
        tempHeaderObj.append(key, headersObj[key]);
      }
    }
    let modifiedURL: string  = `${this.BASE_URL}${url}`;
    let options = new RequestOptions({ headers: tempHeaderObj, withCredentials: true });
    return this.http.post(modifiedURL, body, options)
  }
}
