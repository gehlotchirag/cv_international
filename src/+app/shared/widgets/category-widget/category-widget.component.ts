import { Component, OnInit } from '@angular/core';

import { HttpClientService } from '../../services/http-client.service';
import HomeWidget from '../home-widget';

import { getRouterLink } from '../../utils/'

@Component({
  selector: 'cvi-category-widget',
  templateUrl: './category-widget.component.html',
  styleUrls: ['./category-widget.component.css'],
  providers: [ HttpClientService ]
})
export class CategoryWidgetComponent extends HomeWidget implements OnInit {

  constructor(public httpClient: HttpClientService){
    super(httpClient);
  }

  private getRouterLink = getRouterLink;

  ngOnInit() {
  }

}
