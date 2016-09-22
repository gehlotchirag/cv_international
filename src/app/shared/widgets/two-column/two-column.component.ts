import { Component, OnInit, Input } from '@angular/core';

import {Widget} from '../widget.component'

@Component({
  selector: 'cvi-two-column',
  templateUrl: 'two-column.component.html',
  styleUrls: ['two-column.component.css'],
})

export class TwoColumnComponent implements OnInit {
  widgetData: Object

  constructor() {  }

  ngOnInit() {
  }

}
