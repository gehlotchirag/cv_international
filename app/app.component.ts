import { Component, HostListener } from '@angular/core';
import { Response } from '@angular/http';
import { Router, NavigationEnd } from '@angular/router';

import { RoutingHelperDirective } from './shared/directives/routing-helper.directive';
import { RouterHeaderBindingService } from './shared/services/router-header-binding.service';

import { HttpClientService } from './shared/services/http-client.service';

@Component({
  selector: 'cvi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ HttpClientService ]
})
export class AppComponent {

  @HostListener('window:scroll', ['$event'])
  showMegaMenu(event) {
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

  public hasMegaMenu: boolean = false;

  constructor(private router: Router,
              private httpClient: HttpClientService){

      this.router.events.subscribe((val) => {
        if(val instanceof NavigationEnd){
          window.scrollTo(0,0);
        }
      });
  }
}
