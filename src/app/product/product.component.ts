import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './product';
import { ProductService } from './product.service';
import { ProductAttributePipe } from './product-attribute.pipe';
import { CartDetailsService } from '../shared/services/cart-details.service';

@Component({
  selector: 'cvi-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ ProductService , CartDetailsService ],
})
export class ProductComponent implements OnInit {

  products: Observable<Product[]>;
  attributes: Observable<Object>;

  constructor(private productService : ProductService,
              private cartDetailsService: CartDetailsService
  ) {

  }

  ngOnInit() {
    let searchObj = {
      'productId': 4563463
    }
    let productDetailStream = this.productService.getProductDetail(searchObj).publish();
        productDetailStream.subscribe(
            (data:any) => {
              this.products = data['d']
            },
            (error: any) => console.error(error),
            () => console.log('completed')
        );
        productDetailStream.pluck('d', 'productAttributes').reduce(ProductComponent.reduceAttributes, {}).subscribe(
          (data: any) => {
            this.attributes = data
          },
          (error: any) => console.error(error),
          () => console.log('completed')
        )
        productDetailStream.connect()
  }

  clicked(event: any): void {
    // event.preventDefault();
    let productId =  "3576388";
    let qty = 1;
    this.cartDetailsService.addToCart(productId, qty)
  }

  static reduceAttributes(prevItem, nextItem){
  	nextItem.forEach(function(item){
    	for(var keys in item){
      	prevItem[keys] = item[keys];
      }
    });
    return prevItem;
  }

}
