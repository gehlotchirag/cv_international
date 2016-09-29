import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

@Injectable()
export class HttpClientService {
  private http: Http;
  private headers = new Headers();
  private BASE_URL = 'https://api.myjson.com/bins/';

  constructor(http: Http) {
    this.http = http;
    this.headers.append('Content-Type', 'application/json');
  }

  setHeader(name: string, value: string){
    this.headers.set(name, value);
  }

  getHeader(header: string){
    return this.headers.get(header);
  }

  appendHeader(name: string, value: string){
    this.headers.append(name, value);
  }

  deleteHeader(name: string){
    this.headers.delete(name);
  }

/*  Pass Params in the above manner for creating a query
    let params: URLSearchParams = new URLSearchParams();
    params.set('appid', StaticSettings.API_KEY);
    params.set('cnt', days.toString());
    Format values of key to make a jQuery Traditional Request
*/
  get(url: string, searchObj?: Object) {
    let searchParams = new URLSearchParams();
    if(searchObj){
      for(let key in searchObj){
        searchParams.set(key, searchObj[key]);
      }
    }
    let modifiedURL: string = `${this.BASE_URL}${url}`;
    return this.http.get( modifiedURL, {
      search: searchParams
    })
  }

/*
    Pass the url, body for request and any optional headers to make the request
*/
  post(url: string, body: any, headersObj?: Object) {
    let tempHeaderObj = new Headers(this.headers);
    if(headersObj){
      for(let key in headersObj){
        var headerMapping = headersObj[key];
        if(headerMapping['type'] == 'append'){
          headerMapping.append(key, headerMapping['value']);
        }
        else if(headerMapping['type'] == 'set'){
          headerMapping.set(key, headerMapping['value']);
        }
      }
    }
    let modifiedURL: string  = `${this.BASE_URL}${url}`;
    return this.http.post(modifiedURL, body, {
      headers: tempHeaderObj
    })
  }

}
