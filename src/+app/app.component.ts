import { Component, HostListener } from '@angular/core';
import { Response } from '@angular/http';
import { Router, NavigationEnd } from '@angular/router';

import { RoutingHelperDirective } from './shared/directive/routing-helper.directive';

import { RouterHeaderBindingService } from './shared/services/router-header-binding.service';
// import { MetaService } from './shared/services/meta-tags.service';

import { HttpClientService } from './shared/services/http-client.service';

//
/////////////////////////
// ** Example Directive
// Notice we don't touch the Element directly


@Component({
  selector: 'cvi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ HttpClientService ]
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

  constructor(private router: Router,
              private httpClient: HttpClientService){

      this.router.events.subscribe((val) => {
        if(val instanceof NavigationEnd && typeof window !== 'undefined'){
          window.scrollTo(0,0);
        }
      });
  }

  private receiveMegaMenu(shouldShow) {
    this.hasMegaMenu = shouldShow;
  }

}
