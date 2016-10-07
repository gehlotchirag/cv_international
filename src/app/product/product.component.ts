import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './product';
import { ProductService } from './product.service';
import { ProductAttributePipe } from './product-attribute.pipe';
import { CartDetailsService } from '../shared/services/cart-details.service';
import { WishListService } from '../shared/services/wish-list.service';

@Component({
  selector: 'cvi-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ ProductService , CartDetailsService , WishListService ],
})
export class ProductComponent implements OnInit {

    products: Observable<Product[]>;
    similarProducts: Observable<Product[]>;
    vendorDetail :any;
    attributes: Observable<Object>;
    sizes: Observable<Object>;
    colors : Observable<Object>;
    vendorName: any;
    productID=['4170101','4170101'];
    customerId="1696318";


  constructor(private productService : ProductService,
              private cartDetailsService: CartDetailsService,
              private wishListService : WishListService
  ) {

  }

  ngOnInit() {
    let searchObj = {
      'productId': 4170101
    }
    let productDetailStream = this.productService.getProductDetail(searchObj).publish();
        productDetailStream.pluck('d').subscribe(
            (data:any) => {
              this.products = data
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
      productDetailStream.pluck('d', 'variants').subscribe(
          (data: any) => {
              this.sizes = data['Size']  || []
              this.colors = data['Color'] || []
          },
          (error: any) => console.error(error),
          () => console.log('completed')
      )
        productDetailStream.connect()

      let similarProductsStream=this.productService.getSimilarProducts('417012').publish();

        similarProductsStream.pluck('d','products').subscribe(
            (data:any)=>{
                this.similarProducts=data
                console.log(this.similarProducts)
            },
            (error:any)=>console.error(error),
            ()=>console.log(' similar completed')
        );
      // similarProductsStream.pluck('d','products').subscribe(
      //     (data:any)=>{
      //         this.vendorDetail=data['vendorName']
      //         console.log(this.vendorDetail)
      //     },
      //     (error:any)=>console.error(error),
      //     ()=>console.log(' similar completed')
      // )

      similarProductsStream.connect()
  }



  // clicked(event: any): void {
  //   let productId =  "3576388";
  //   let qty = 1;
  //     let customerId="9867";
  //   this.cartDetailsService.addToCart(productId, qty);
  //   this.wishListService.addToWishList(customerId, productId);
  // }

    addWish(event: any): void {
        this.wishListService.addToWishList(this.customerId,this.productID);
    }

    addClick(event: any): void {
        console.log("click event");
        this.cartDetailsService.addToCart('1696318','4170101',1)
    }




  static reduceAttributes(prevItem, nextItem){
  	nextItem.forEach(function(item){
      prevItem[item['key']] = item['value'];
    });
    return prevItem;
  }

}
