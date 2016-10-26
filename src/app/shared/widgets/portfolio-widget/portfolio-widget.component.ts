import { Component, OnInit } from '@angular/core';

import { HttpClientService } from '../../services/http-client.service';
import HomeWidget from '../home-widget';

@Component({
  selector: 'app-portfolio-widget',
  templateUrl: './portfolio-widget.component.html',
  styleUrls: ['./portfolio-widget.component.css']
})
export class PortfolioWidgetComponent extends HomeWidget implements OnInit {

  constructor(public httpClient: HttpClientService){
    super(httpClient);
  }

  ngOnInit() {
  }

}
