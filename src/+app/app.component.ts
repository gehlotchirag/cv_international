import { Component, HostListener } from '@angular/core';

import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

import { RouterHeaderBindingService } from './shared/services/router-header-binding.service';
import { ProgressBarService } from './shared/services/progress-bar.service';
import { MetaService } from './shared/services/meta-tags.service';

import { HttpClientService } from './shared/services/http-client.service';
import { AppService } from './app.service';

//
/////////////////////////
// ** Example Directive
// Notice we don't touch the Element directly


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
export class AppComponent {

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
          this.getSeoData(url);
        } else if ( event instanceof NavigationEnd ||
                    event instanceof NavigationCancel ||
                    event instanceof NavigationError) {
          this.progressBar.complete();
        }
      });

  }


  addSeoData() {
    if(typeof window !== 'undefined') {
      let self = this;
      Object.keys(this.seoContent).forEach(function(key) {
        if(key !== 'footer_content'){
          if(key === 'title') {
            self.metaService.setTitle(self.seoContent[key]);
          } else if(key === 'href_lang') {
            self.metaService.setHrefLangTag(key, self.seoContent[key]);
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
