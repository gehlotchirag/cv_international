import { Component, HostListener, AfterViewInit } from '@angular/core';

import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

import { RouterHeaderBindingService } from './shared/services/router-header-binding.service';
import { ProgressBarService } from './shared/services/progress-bar.service';
import { MetaService } from './shared/services/meta-tags.service';

import { HttpClientService } from './shared/services/http-client.service';
import { AppService } from './app.service';
declare let ga: Function;
declare var dataLayer: any;

@Component({
  selector: 'cvi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ 
    HttpClientService, 
    RouterHeaderBindingService, 
    ProgressBarService, 
    AppService, 
    MetaService 
  ]
})
export class AppComponent implements AfterViewInit {

  @HostListener('window:scroll', ['$event'])
  showMegaMenu(event) {
    if(typeof window !== 'undefined'){
      let _url = this.router.url;
      if (_url === '/') {
        let mega_menu_height = 450;
        if(document.body.scrollTop > mega_menu_height){
          this.hasMegaMenu = true;
        }else{
          this.hasMegaMenu = false;
        }
      };
    }
  }

  public hasMegaMenu: boolean = false;
  public seoContent;
  public footerContent;
  public currentUrl = '';
  public showCookieWarn = false;
  constructor(private router: Router,
              private httpClient: HttpClientService,
              private progressBar: ProgressBarService,
              private appService: AppService,
              private metaService: MetaService){
      let url = '';
      this.router.events.subscribe((event) => {
        this.currentUrl = event.url;
        if(this.currentUrl === '/'){
          url = '/home';
          RouterHeaderBindingService.setMegaMenuStatus(false);
        } else if(this.currentUrl.indexOf('shop/') > -1) {
          let url_arr = this.currentUrl.split('/').filter((item) => item !== "");
          url = '/shop/' + url_arr[url_arr.length - 1];
          RouterHeaderBindingService.setMegaMenuStatus(true);
        } else {
          url = '/' + (this.currentUrl.split('/')).filter((item) => item !== "").join('/');
          RouterHeaderBindingService.setMegaMenuStatus(true);
        }

        if(event instanceof NavigationEnd && typeof window !== 'undefined'){
          window.scrollTo(0,0);
        }
        if (event instanceof NavigationStart) {
          this.progressBar.start();
        } else if ( event instanceof NavigationEnd ||
                    event instanceof NavigationCancel ||
                    event instanceof NavigationError) {
          this.progressBar.complete();
        }
        if(event instanceof NavigationEnd) {
          this.getSeoData(url);
          if(typeof ga !== 'undefined') {
            ga('set', 'page', event.urlAfterRedirects);
            ga('send', 'pageview');
          }
          if (typeof dataLayer !== 'undefined' && dataLayer) {
            dataLayer.push({
              'event': 'Page View',
              'content-name': event.urlAfterRedirects,
              'userId': null
            });
          }
        }
      });
  }

  ngAfterViewInit(){
    if(typeof window !== 'undefined') {
      let cookie = this.getCookie("cv_sc");
      if(!cookie) {
        this.showCookieWarn = true;
      }
    }
  }

  private getCookie(name: string) {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = name + "=";
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
        c = ca[i].replace(/^\s\+/g, "");
        if (c.indexOf(cookieName) > -1) {
          return c.substring(cookieName.length, c.length);
        }
    }
    return "";
  }

  private setCookie() {
    let name: string = "cv_sc", value: string = "true", expireDays: number = 365, path: string = ""
    let d:Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    let expires:string = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + (path.length > 0 ? "; path=" + path : "");
    this.showCookieWarn = false;
  }

  addSeoData() {
    if(typeof window !== 'undefined') {
      let self = this;
      Object.keys(this.seoContent).forEach(function(key) {
        if(key !== 'footer_content'){
          if(key === 'title') {
            self.metaService.setTitle(self.seoContent[key]);
          } else if(key === 'href_lang') {
            self.metaService.setHrefLangTag(key, self.seoContent[key], self.seoContent['canonical']);
          } else if(key === 'canonical') { 
            self.metaService.setCanonicalTag(key, self.seoContent['canonical']);
          } else {
            self.metaService.setTag(key, self.seoContent[key]);
          }
        }
      })
    }
  }

  private receiveMegaMenu(shouldShow) {
    this.hasMegaMenu = shouldShow;
  }

  getSeoData(url){
    this.appService.getSeoContent(url).pluck('d').subscribe((data) => {
      this.seoContent = data;
      this.footerContent = this.seoContent['footer_content'];
      this.addSeoData()
    });
  }
}
