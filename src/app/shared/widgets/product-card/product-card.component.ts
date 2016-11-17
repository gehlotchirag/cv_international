import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import ListingProduct from '../../interfaces/listing-product';

import { LoaderComponent } from '../loader/loader.component';

import { getRouterLink } from '../../utils/';

@Component({
  selector: 'cvi-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: ListingProduct;
  @Input() showSizeInfo: boolean;

  @Output() zoomImageHandler: EventEmitter<any> = new EventEmitter<any>();

  private getRouterLink = getRouterLink;

  private placeholderLink = 'https://lh3.googleusercontent.com/-5JDLojp9QUU/WCly0Rq44nI/AAAAAAAAApk/6UUasBnJlSAxK1KptTYQ4Hfory2Xi0ADQCL0B/h220/placeholder01.png'

  constructor() { }

  ngOnInit() {
  }

  showZoomedImage(event: any){
    console.log(this.product);
    this.zoomImageHandler.emit(this.product);
  }

}
