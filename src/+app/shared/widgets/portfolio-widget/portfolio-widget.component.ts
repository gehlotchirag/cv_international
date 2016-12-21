import { Component, OnInit } from '@angular/core';

import { HttpClientService } from '../../services/http-client.service';
import HomeWidget from '../home-widget';

import { getRouterLink } from '../../utils/';

@Component({
  selector: 'app-portfolio-widget',
  templateUrl: './portfolio-widget.component.html',
  styleUrls: ['./portfolio-widget.component.css'],
  providers: [ HttpClientService ]
})
export class PortfolioWidgetComponent extends HomeWidget implements OnInit {

  private getRouterLink = getRouterLink;

  constructor(public httpClient: HttpClientService){
    super(httpClient);
  }

  ngOnInit() {
  }

}
