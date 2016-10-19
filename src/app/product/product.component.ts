import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './product';
import { ProductService } from './product.service';
import { ProductAttributePipe } from './product-attribute.pipe';
import { CartDetailsService } from '../shared/services/cart-details.service';
import { WishListService } from '../shared/services/wish-list.service';
import { KeysPipe } from './keys.pipe';

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
    sizeChartHeaders: string[];
    sizeChartData: any[];
    sizes: Observable<Object>;
    colors : Observable<Object>;
    vendorDetails: Observable<Object>;
    columns: any[];
    vendorName: any;
    productID=['4170101','4170101'];
    customerId="1696318";


  constructor(private productService : ProductService,
              private cartDetailsService: CartDetailsService,
              private wishListService : WishListService
  ) {
    this.sizeChartData = [];
    this.sizeChartHeaders = [];
  }

  ngOnInit() {
    let searchObj = {
      'productId': 4170101
    }
    let productDetailStream = this.productService.getProductDetail().publish();
        productDetailStream.pluck('d').subscribe(
            (data:any) => {
              this.products = data
            },
            (error: any) => console.error(error),
            () => console.log('completed')
        );
        productDetailStream.pluck('d', 'productAttributes').subscribe(
          (data: any) => {
            this.attributes = data

              console.log(this.attributes)
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
      productDetailStream.pluck('d', 'chartList').subscribe(
            (data:any) => {
              this.columns = data['columns']
              for(let i=0; i < this.columns.length; i++){
                this.sizeChartHeaders.push(this.columns[i].name);
                this.sizeChartData.push(this.columns[i].values);
              }
            },
            (error: any) => console.error(error),
            () => console.log('completed')
        )
      productDetailStream.pluck('d', 'vendorDetails').subscribe(
            (data:any) => {
              this.vendorDetails = data
            },
            (error: any) => console.error(error),
            () => console.log('completed')
        )
     productDetailStream.connect()


     /* let similarProductsStream=this.productService.getSimilarProducts('417012').publish();

        similarProductsStream.pluck('d','products').subscribe(
            (data:any)=>{
                this.similarProducts=data
                console.log(this.similarProducts)
            },
            (error:any)=>console.error(error),
            ()=>console.log(' similar completed')
        );

      similarProductsStream.connect()*/
  }



  // clicked(event: any): void {
  //   let productId =  "3576388";
  //   let qty = 1;
  //     let customerId="9867";
  //   this.cartDetailsService.addToCart(productId, qty);
  //   this.wishListService.addToWishList(customerId, productId);
  // }

    addWish(event: any): void {
        console.log('addWish');
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
