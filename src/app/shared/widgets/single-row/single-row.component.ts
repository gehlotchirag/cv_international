import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cvi-single-row',
  templateUrl: 'single-row.component.html',
  styleUrls: ['single-row.component.css'],
  inputs : ['widgetData']
})
export class SingleRowComponent implements OnInit {
public widgetData="sampleData";

  constructor() { }

  ngOnInit() {

  }



}
