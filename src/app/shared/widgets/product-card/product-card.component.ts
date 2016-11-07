import { Component, OnInit, Input } from '@angular/core';
import ListingProduct from '../../interfaces/listing-product';

import { getRouterLink } from '../../utils/';

@Component({
  selector: 'cvi-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: ListingProduct;
  @Input() showSizeInfo: boolean;

  private getRouterLink = getRouterLink;

  constructor() { }

  ngOnInit() {
  }

}
