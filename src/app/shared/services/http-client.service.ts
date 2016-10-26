import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

@Injectable()
export class HttpClientService {
  private http: Http;
  private headers = new Headers();
  // private BASE_URL = 'https://appapi2.craftsvilla.com/';
  private BASE_URL = 'http://52.44.221.18:8000/api/';

  constructor(http: Http) {
    this.http = http;
    this.headers.append('content-type', 'application/json');
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
      /*for(let key in searchObj){
        searchParams.set(key, searchObj[key]);
      }*/
      searchParams.set('params', JSON.stringify(searchObj));
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
          tempHeaderObj.append(key, headersObj[key]);
        }
      }
      let modifiedURL: string  = `${this.BASE_URL}${url}`;
      return this.http.post(modifiedURL, body, {
        headers: tempHeaderObj
      })
    }

  }
