import { Component, OnInit } from '@angular/core';

import { HttpClientService } from '../../services/http-client.service';
import HomeWidget from '../home-widget';

@Component({
  selector: 'cvi-storyline-widget',
  templateUrl: './storyline-widget.component.html',
  styleUrls: ['./storyline-widget.component.css']
})
export class StorylineWidgetComponent extends HomeWidget implements OnInit {

  constructor(public httpClient: HttpClientService){
    super(httpClient);
  }

  ngOnInit() {}

}
