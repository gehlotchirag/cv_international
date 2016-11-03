import { Component, OnInit, Input } from '@angular/core';

import { HttpClientService } from '../../services/http-client.service';
import  HomeWidget  from '../home-widget';

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

  constructor(public httpClient: HttpClientService){
    // super(httpClient);
  }

  ngOnInit() {}

}
