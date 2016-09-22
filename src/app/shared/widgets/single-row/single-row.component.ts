import { Component, OnInit, Input } from '@angular/core';

import {Widget} from '../widget.component'

@Component({
  selector: 'cvi-single-row',
  templateUrl: 'single-row.component.html',
  styleUrls: ['single-row.component.css']
})
export class SingleRowComponent  implements OnInit {
  widgetData: Object
  constructor() { }

  ngOnInit() {

  }

}
