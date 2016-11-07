import { Component, OnInit, Input } from '@angular/core';

import { HttpClientService } from '../../services/http-client.service';
import  HomeWidget  from '../home-widget';

import { getRouterLink } from '../../utils/';

@Component({
  selector: 'cvi-extra-menu',
  templateUrl: './extra-menu.component.html',
  styleUrls: ['./extra-menu.component.css'],
  providers: [ HttpClientService ]
})
export class ExtraMenuComponent implements OnInit {
  @Input()
  dataItems: any;
  @Input()
  header: string;
  config: Object = {
    slidesPerView: 'auto',
    spaceBetween: 0,
    speed: 600,
    freeMode: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  };

  private getRouterLink = getRouterLink;

  constructor(public httpClient: HttpClientService){
    // super(httpClient);
  }

  ngOnInit() {}

}
