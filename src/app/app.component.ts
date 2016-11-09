import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Router, NavigationEnd } from '@angular/router';

import { RoutingHelperDirective } from './shared/directives/routing-helper.directive';
import { RouterHeaderBindingService } from './shared/services/router-header-binding.service';

import { HttpClientService } from './shared/services/http-client.service';

@Component({
  selector: 'cvi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ HttpClientService, Window ]
})
export class AppComponent {

  private hasMegaMenu: boolean = false;

  constructor(private router: Router,
              private httpClient: HttpClientService){

      this.router.events.subscribe((val) => {
        if(val instanceof NavigationEnd){
          window.scrollTo(0,0);
        }
      });
  }

  private receiveMegaMenu(shouldShow) {
    this.hasMegaMenu = shouldShow;
  }

}
