import { Component, OnInit, Input } from '@angular/core';

import {Widget} from '../widget.component'

@Component({
  selector: 'cvi-single-row',
  templateUrl: 'single-row.component.html',
  styleUrls: ['single-row.component.css'],
  inputs : ['widgetData']
})
export class SingleRowComponent extends Widget implements OnInit {
  constructor(widgetData: Object) { super(widgetData) }

  ngOnInit() {

  }

}
