import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

interface ModalOptions {
  type: string,
  show: boolean,
  header: any,
  showHeader: boolean,
  data: any
}

interface ModalAction {
  type: string,
  data: any
}

@Component({
  selector: 'cvi-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {

  @Input() modalOptions: ModalOptions;
  @Output() modalAction: EventEmitter<ModalAction> = new EventEmitter<ModalAction>();

  constructor() { }

  ngOnInit() {
  }

  closeOverlay(event): void {
    let _actionTaken = {
      type: 'close',
      data: null
    }
    this.modalAction.emit(_actionTaken);
  }

}
