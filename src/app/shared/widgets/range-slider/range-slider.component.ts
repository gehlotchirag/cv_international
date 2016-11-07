import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css']
})
export class RangeSliderComponent implements OnInit {

  private pos: any = {
    left: '0px',
    to: '200px'
  };
  private selectedWidth: string = '100%';

  constructor() { }

  ngOnInit() {
  }

  private dragStart(event): void {
    switch(event.target.getAttribute('data-pos')) {
      case 'start':
            break;

      case 'end':
            break;

      default:
           break;
    }
    event.preventDefault();
  }

  private dragStop(event): void {
    switch(event.target.getAttribute('data-pos')) {
      case 'start':
            break;

      case 'end':
            break;

      default:
           break;
    }
    event.preventDefault();
  }

  private dragUpdate(event){
    event.preventDefault();
  }

}
