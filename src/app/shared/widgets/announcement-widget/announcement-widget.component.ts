import { Component, OnInit } from '@angular/core';

import { HttpClientService } from '../../services/http-client.service';
import  HomeWidget  from '../home-widget';

@Component({
  selector: 'cvi-announcement-widget',
  templateUrl: './announcement-widget.component.html',
  styleUrls: ['./announcement-widget.component.css']
})
export class AnnouncementWidgetComponent extends HomeWidget implements OnInit {

  constructor(public httpClient: HttpClientService){
    super(httpClient);
  }

  ngOnInit() {

  }

}
