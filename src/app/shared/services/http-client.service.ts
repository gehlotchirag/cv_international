import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, Response, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";


@Injectable()
export class HttpClientService {
  private http: Http;
  private headers = new Headers();

  private BASE_URL = 'http://international.craftsvilla.com:8000/';

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
<<<<<<< HEAD
    */
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
      let options = new RequestOptions({ headers: tempHeaderObj, withCredentials: true });


      return this.http.post(modifiedURL, body, options)
    }

  }
