import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

// import { HeaderComponent } from './shared/widgets/header/header.component';

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

  private hasMegaMenu: boolean = false;

  constructor(private httpClient: HttpClientService){}

  private receiveMegaMenu(shouldShow) {
    this.hasMegaMenu = shouldShow;
  }

}
