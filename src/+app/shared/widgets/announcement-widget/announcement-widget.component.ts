import { Component, OnInit, Input } from '@angular/core';

import { HttpClientService } from '../../services/http-client.service';
import  HomeWidget  from '../home-widget';

import { getRouterLink } from '../../utils/'

@Component({
  selector: 'cvi-announcement-widget',
  templateUrl: './announcement-widget.component.html',
  styleUrls: ['./announcement-widget.component.css'],
  providers: [ HttpClientService ]
})
export class AnnouncementWidgetComponent extends HomeWidget implements OnInit {

  private getRouterLink : any = getRouterLink;
  
  @Input() header: string;
  @Input() dataItems: any;

  constructor(public httpClient: HttpClientService){
    super(httpClient);
  }

  ngOnInit() {

  }

}
