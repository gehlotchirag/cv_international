import { Component, OnInit, Input } from '@angular/core';

import {Widget} from '../widget.component'

@Component({
  selector: 'cvi-two-column',
  templateUrl: 'two-column.component.html',
  styleUrls: ['two-column.component.css'],
  inputs:['widgetData']
})
export class TwoColumnComponent extends Widget implements OnInit {

  constructor(widgetData: Object) { super(widgetData) }

  ngOnInit() {
  }

}
