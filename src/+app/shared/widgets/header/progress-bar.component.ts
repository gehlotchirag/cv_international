import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'cvi-progress-bar',
  template: `
  <div class="slim-loading-bar">
    <div class="slim-loading-bar-progress" [style.width]="progress + '%'" [style.backgroundColor]="color" [style.color]="color"
        [style.height]="height" [style.opacity]="visible ? '1' : '0'"></div>
  </div>`,
  styles: [
    '.slim-loading-bar-progress { -moz-transition: width 1s ease; -ms-transition: width 1s ease; -o-transition: width 1s ease; -webkit-transition: width 1s ease; transition: max-width 1s ease; }'
  ]
})
export class ProgressBarComponent implements OnInit {

  @Input() progress: string = '0';
  color: string = 'firebrick';
  height: string = '3px';
  @Input() visible: boolean = true;

  constructor() { }

  ngOnInit() {}
}
