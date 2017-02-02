import { Inject, Injectable, Optional } from '@angular/core';
import { Title, DOCUMENT } from '@angular/platform-browser';
import { Router, NavigationEnd, Event as NavigationEvent, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

const isDefined = (val: any) => typeof val !== 'undefined';

@Injectable()
export class MetaService {
  public hreflangArr = ['en-us', 'en-in'];
  constructor(private router: Router, @Inject(DOCUMENT) private document: any, private titleService: Title, private activatedRoute: ActivatedRoute) {}

  private _getOrCreateMetaTag(name: string): HTMLElement {
    let el: HTMLElement = this.document.querySelector(`meta[name='${name}']`);
    if(!el) {
      el = this.document.querySelector(`meta[property='${name}']`);
    }
    if (!el) {
      el = this.document.createElement('meta');
      el.setAttribute('name', name);
      this.document.head.appendChild(el);
    }
    return el;
  }

  setTitle(title?: string, titleSuffix?: string): MetaService {
    const titleElement = this._getOrCreateMetaTag('title');
    const ogTitleElement = this._getOrCreateMetaTag('og:title');
    let titleStr = isDefined(title) ? title : '';
    titleStr += isDefined(titleSuffix) ? titleSuffix : '';

    titleElement.setAttribute('content', titleStr);
    ogTitleElement.setAttribute('content', titleStr);
    this.titleService.setTitle(titleStr);
    return this;
  }

  _getOrCreateHrefLangTag(name: string){
    let el: Array<HTMLElement> = this.document.querySelectorAll(`link[hreflang`);
    if (el.length == 0) {
      el = [];
      this.hreflangArr.forEach((hreflang) => {
        let element = this.document.createElement('link');
        element.setAttribute('rel', 'alternate');
        element.setAttribute('hreflang', hreflang);
        this.document.head.appendChild(element);
        el.push(element);
      })
    }
    return el;
  }

  setHrefLangTag(tag: string, value: string, canonical: string){
    const tagElement = this._getOrCreateHrefLangTag(tag);
    tagElement.forEach((element) => {
      let tagStr = isDefined(value) ? value : '';
      let canonicalStr = isDefined(canonical) ? canonical : '';
      if(element['hreflang'] === 'en-in') {
        element.setAttribute('href', tagStr);    
      }
      if(element['hreflang'] === 'en-us') {
        element.setAttribute('href', canonicalStr);    
      }
    })
    return this;
  }

  _getOrCreateCanonicalTag(name: string){
    let el: HTMLElement = this.document.querySelector(`link[rel="canonical"]`);
    if (!el) {
      el = this.document.createElement('link');
      el.setAttribute('rel', 'canonical');
      this.document.head.appendChild(el);
    }
    return el;
  }

  setCanonicalTag(tag: string, canonical: string){
    const tagElement = this._getOrCreateMetaTag(tag);
    let tagStr = isDefined(canonical) ? canonical : '';
    tagElement.setAttribute('href', canonical);
    return this;
  }

  setTag(tag: string, value: string): MetaService {
    if (tag === 'title' || tag === 'titleSuffix') {
      throw new Error(`Attempt to set ${tag} through 'setTag': 'title' and 'titleSuffix' are reserved tag names.
      Please use 'MetaService.setTitle' instead`);
    }
    const tagElement = this._getOrCreateMetaTag(tag);
    let tagStr = isDefined(value) ? value : '';
    tagElement.setAttribute('content', tagStr);
    if (tag === 'description') {
      let ogDescElement = this._getOrCreateMetaTag('og:description');
      ogDescElement.setAttribute('content', tagStr);
    }
    return this;
  }
}