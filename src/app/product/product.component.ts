import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Product } from './product';
import { ProductService } from './product.service';
import { ProductAttributePipe } from './product-attribute.pipe';
import { CartDetailsService } from '../shared/services/cart-details.service';
import { WishListService } from '../shared/services/wish-list.service';
import {NumberDecimalPipe } from './number-decimal.pipe';
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
    individualQuantity : string[];
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
    hightlightStatus: Array<boolean> = [];
    stitching_type:string;
    outOfStockMsgDspl: boolean;
    public product: Product;
    stitching_type_text_show:boolean;




  constructor(private productService : ProductService,
              private cartDetailsService: CartDetailsService,
              private wishListService : WishListService,
              private route: ActivatedRoute,
              private router: Router,
  ) {
    this.sizeChartData = [];
    this.sizeChartHeaders = [];
    this.isClassVisible=false;
    this.isDiscountPercVesible=true;
    this.isRegularPriceMore=true;
    this.showSizeDiv=true;
    this.addToBagSuccess=true;
    this.addToBagUnSuccess=true;
    this.selectedSize="undefine";
    this.outOfStockMsgDspl=false;
    this.stitching_type_text_show=true;


  }


  ngOnInit() {

    this.route.data.pluck('product', 'd').subscribe( (data: any) => {
        this.products = data
              this.productId=data.productId;
              this.galleryImages=data.galleryImages;
              // this.stitching_enabled=data.stitching_enabled;
              this.stitching_type=data.stitching_type;
              this.stitching_enabled=data.stitching_enabled;
              console.log('productId',this.productId);
              if(data.discountPercentage==0){
                  this.isDiscountPercVesible=false;
              }
              if(data.regularPrice==data.discountedPrice) {
                this.isRegularPriceMore=false;
              }
              console.log("stiching enabled: ",this.stitching_enabled);
              if(this.stitching_enabled == false)
              {
                this.showSizeDiv=true;
              }
              if(data.isInStock <= 0)
              {
                this.outOfStockMsgDspl=true;
              }

              console.log("stitching type: ", this.stitching_type);
              console.log("stitching show: ", this.stitching_type_text_show);

              if(this.stitching_type=="")
              {
                this.stitching_type_text_show=false;
              }
              else{
                  this.stitching_type_text_show=true;
              }
              console.log("stitching show: ", this.stitching_type_text_show);

      },
      (error) => console.error(error)
      )

     this.route.data.pluck('product','d', 'productAttributes').subscribe(
          (data: any) => {
            this.attributes = data

              console.log(this.attributes)
          },
          (error: any) => console.error(error),
          () => console.log('completed')
        )
      this.route.data.pluck('product','d', 'variants').subscribe(
          (data: any) => {
              this.sizes = data['Size']  || []
              this.colors = data['Color'] || []
              this.individualQuantity =data['Quantity'] || []
              console.log("quantity : ",this.individualQuantity.length);

              if(this.individualQuantity.length>0){
                this.showSizeDiv=false;
              }
          },
          (error: any) => console.error(error),
          () => console.log('completed')
      )
      this.route.data.pluck('product','d', 'chartList').subscribe(
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
      this.route.data.pluck('product','d', 'vendorDetails').subscribe(
            (data:any) => {
              this.vendorDetails = data
            },
            (error: any) => console.error(error),
            () => console.log('completed')
        )



  }






    addWish(event: any): void {
        console.log('addWish');
        this.wishListService.addToWishList(this.customerId,this.productId );

    }

    addToBag(event: any): void {
        console.log(this.productId);
        console.log(this.stitchingType);
        console.log(this.selectedSize);


          if (typeof this.selectedSize == "undefine"){
          console.log('red');
          this.addToBagUnSuccess=false;
          this.addToBagSuccess=true;

        }
        else{
          this.addToBagSuccess=false;
          this.addToBagUnSuccess=true;
        this.cartDetailsService.addToCart(this.customerId,this.productId,1)
        }


    }


    selectSize(event:any, size: any): void{

      let index=this.individualQuantity.indexOf(size);

      console.log("index",index);



      this.selectedSize = (this.selectedSize === size) ? undefined : size;

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
