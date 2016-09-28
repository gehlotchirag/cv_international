import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './product';
import { ProductService } from './product.service';
import { ProductAttributePipe } from './product-attribute.pipe';

@Component({
  selector: 'cvi-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ ProductService ],
})
export class ProductComponent implements OnInit {

  products: Observable<Product[]>;
  attributes: Observable<Object>;

  constructor(private productService : ProductService) {

  }

  ngOnInit() {
    let productDetailStream = this.productService.getProductDetail().publish();
        productDetailStream.subscribe(
            (data:any) => {
              this.products = data
            },
            (error: any) => console.error(error),
            () => console.log('completed')
        );
        productDetailStream.pluck('attributes').reduce(ProductComponent.reduceAttributes, {}).subscribe(
          (data: any) => {
            this.attributes = data
          },
          (error: any) => console.error(error),
          () => console.log('completed')
        )
        productDetailStream.connect()
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
