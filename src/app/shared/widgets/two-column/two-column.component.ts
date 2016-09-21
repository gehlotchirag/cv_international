import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cvi-two-column',
  templateUrl: 'two-column.component.html',
  styleUrls: ['two-column.component.css'],
  inputs:['widgetData']
})
export class TwoColumnComponent implements OnInit {

  public widgetData="twoColumnData";
  constructor() { }

  ngOnInit() {
  }

}
