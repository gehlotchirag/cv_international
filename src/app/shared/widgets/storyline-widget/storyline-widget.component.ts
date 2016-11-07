import { Component, OnInit } from '@angular/core';

import { HttpClientService } from '../../services/http-client.service';
import HomeWidget from '../home-widget';

import { getRouterLink } from '../../utils/'

@Component({
  selector: 'cvi-storyline-widget',
  templateUrl: './storyline-widget.component.html',
  styleUrls: ['./storyline-widget.component.css'],
  providers: [ HttpClientService ]
})
export class StorylineWidgetComponent extends HomeWidget implements OnInit {

  private getRouterLink = getRouterLink;

  constructor(public httpClient: HttpClientService){
    super(httpClient);
  }

  ngOnInit() {}

}
