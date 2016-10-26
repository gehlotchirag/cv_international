import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './product';
import { ProductService } from './product.service';
import { ProductAttributePipe } from './product-attribute.pipe';
import { CartDetailsService } from '../shared/services/cart-details.service';
import { WishListService } from '../shared/services/wish-list.service';
import { ObjectKeysPipe } from '../shared/utils';
//import {ImageZoomModule} from 'angular2-image-zoom';

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
    productId:any;
    customerId="1696318";
    selectedSize:string;
    isClassVisible:boolean;
    isDiscountPercVesible:boolean;
    isRegularPriceMore:boolean;
    showSizeDiv:boolean;
    stitchingType:string;
    addToBagSuccess:boolean;
    addToBagUnSuccess:boolean;
    galleryImages:string[];
    sizeId:string;
    stitching_enabled:boolean;
    myClass:any;




  constructor(private productService : ProductService,
              private cartDetailsService: CartDetailsService,
              private wishListService : WishListService
  ) {
    this.sizeChartData = [];
    this.sizeChartHeaders = [];
    this.isClassVisible=false;
    this.isDiscountPercVesible=true;
    this.isRegularPriceMore=true;
    this.showSizeDiv=false;
    this.addToBagSuccess=true;
    this.addToBagUnSuccess=true;
    this.selectedSize="undefine";
    this.myClass = {acive:false};

  }

  ngOnInit() {
    let searchObj = {
      'productId': 4170101
    }
    let productDetailStream = this.productService.getProductDetail().publish();
        productDetailStream.pluck('d').subscribe(
            (data:any) => {
              this.products = data
              this.productId=data.productId;
              this.galleryImages=data.galleryImages;
              this.stitching_enabled=data.stitching_enabled;
              console.log('productId',this.productId);
              if(data.discountPercentage==0){
                  this.isDiscountPercVesible=false;
              }
              if( (data.regularPrice==data.discountedPrice) || (data.regularPrice>data.discountedPrice)){
                this.isRegularPriceMore=false;
              }
              console.log("stiching enabled: ",this.stitching_enabled);
              if(this.stitching_enabled===false)
              {
                this.showSizeDiv=true;
              }

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
        this.wishListService.addToWishList(this.customerId,this.productId );

    }

    addToBag(event: any): void {
        console.log(this.productId);
        console.log(this.stitchingType);
        console.log(this.selectedSize);

        if((this.stitchingType === 'Readymade' && typeof this.selectedSize != "undefine") )
        {
            console.log('green');
          this.addToBagSuccess=false;
          this.addToBagUnSuccess=true;
        this.cartDetailsService.addToCart(this.customerId,this.productId,1)
        }
        else if (typeof this.selectedSize == "undefine"){
          console.log('red');
          this.addToBagUnSuccess=false;
          this.addToBagSuccess=true;

        }

    }

    selectProducSize(event:any): void{

     console.log(event);
     var idAttr = event.srcElement.attributes.id;


    this.sizeId =event.target.getAttribute("id");
        this.selectedSize = idAttr.nodeValue;
    console.log(this.selectedSize);

    if(this.sizeId== this.selectedSize){
      // console.log(this.isClassVisible);
      //  this.isClassVisible=!this.isClassVisible;
      //  console.log(this.isClassVisible);
       this.myClass.active = !this.myClass.active;

  }

    }

    selectStitchingType(stitchingType):void{

      this.stitchingType = stitchingType;

      console.log(this.stitchingType);
      if(this.stitchingType==='Readymade'){
        this.showSizeDiv=false;
      }else if(this.stitchingType==='Unstitched'){
        this.showSizeDiv=true;
        this.selectedSize="undefine";
      }else if(this.stitchingType==='Semi-stitched'){
        this.showSizeDiv=true;
        this.selectedSize="undefine";

      }else if(this.stitchingType==='Customized Stitch'){

        this.showSizeDiv=true;
        this.selectedSize="undefine";

      }

    }

  static reduceAttributes(prevItem, nextItem){
  	nextItem.forEach(function(item){
      prevItem[item['key']] = item['value'];
    });
    return prevItem;
  }

}
