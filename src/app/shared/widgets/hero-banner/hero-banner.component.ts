import { Component, OnInit, Input } from '@angular/core';
// import {ImageZoomModule} from 'angular2-image-zoom';

import { HttpClientService } from '../../services/http-client.service';
import HomeWidget from '../home-widget';

@Component({
  selector: 'cvi-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.css']
})
export class HeroBannerComponent implements OnInit {
  @Input()
  header: string;
  @Input()
  dataItems: any;

  constructor(public httpClient: HttpClientService){
    // super(httpClient);
  }

  ngOnInit() {
  }

}
