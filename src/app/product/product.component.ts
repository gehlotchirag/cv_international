import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Response } from '@angular/http';


import { Product } from './product';

import { ProductService } from './product.service';
import { CartDetailsService } from '../shared/services/cart-details.service';
import { WishListService } from '../shared/services/wish-list.service';

@Component({
  selector: 'cvi-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService, CartDetailsService, WishListService],
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
    zoomedImage: any;
    galleryImage: any;
    imagePointerX: any;
    imagePointerY: any;
    showBuyLoader: boolean = false;
    private renderedDescription:Object = {};

    config: Object = {
            slidesPerView: 1,
            pagination: '.swiper-pagination',
            spaceBetween: 30,
            speed: 600,
        };
    imageUrl: any;

  constructor(private productService : ProductService,
              private cartDetailsService: CartDetailsService,
              private wishListService : WishListService,
              private route: ActivatedRoute,
              private router: Router,
              private elementRef: ElementRef,
              private renderer: Renderer,
  ) {
    this.sizeChartData = [];
    this.sizeChartHeaders = [];
    this.isClassVisible = false;
    this.isDiscountPercVesible = true;
    this.isRegularPriceMore = true;
    this.showSizeDiv = true;
    this.addToBagSuccess = false;
    this.addToBagUnSuccess = false;
    this.selectedSize = "undefine";
    this.outOfStockMsgDspl = false;
    this.stitching_type_text_show = true;
  }

  onImageHover(imageSrc) {
    this.galleryImage = this.elementRef.nativeElement.querySelector('.productImage');
    this.zoomedImage = this.elementRef.nativeElement.querySelector('.zoomed-image');
    this.renderer.setElementStyle(this.zoomedImage, 'display', 'block');
    this.renderer.setElementStyle(this.zoomedImage, 'background-image', 'url(' + imageSrc + ')');
    this.adjustZoomedImage(event);
  }

  onImageHoverMove() {
    this.adjustZoomedImage(event);
  }

  onHoverOut() {
    this.renderer.setElementStyle(this.zoomedImage, 'display', 'none');
  }

  adjustZoomedImage(event) {
    this.imagePointerX = event.offsetX;
    this.imagePointerY = event.offsetY;
    let imageWidth = event.target.offsetWidth;
    let imageHeight = event.target.offsetHeight;
    let backgroungPosX = (this.imagePointerX / imageWidth) * 100;
    let backgroungPosY = (this.imagePointerY / imageHeight) * 100;

    this.renderer.setElementStyle(this.zoomedImage, 'background-position-x', '' + backgroungPosX + '%');
    this.renderer.setElementStyle(this.zoomedImage, 'background-position-y', '' + backgroungPosY + '%');

  }

  getDescription(description){
    if(description){
      let _descArr = description.split(',').filter(Boolean)
      let _descObj = {};
      try{
        for (var i = 0; i < _descArr.length; i++) {
          var split = _descArr[i].split(':');
          _descObj[split[0].trim()] = split[1].trim();
        }
        this.renderedDescription = _descObj;
      }catch(err){
        this.renderedDescription = null;
      }
      return true;
    }
    return false;
  }

  descObjKeys() : Array<string> {
    return Object.keys(this.renderedDescription);
  }


  ngOnInit() {
    this.route
      .data
      .pluck('product', 'd')
      .subscribe((data: any) => {
        this.products = data
        this.productId = data.productId;
        this.galleryImages = data.galleryImages;
        // this.stitching_enabled=data.stitching_enabled;
        this.stitching_type = data.stitching_type;
        this.stitching_enabled = data.stitching_enabled;
        this.imageUrl = data.imgUrl;

        if (data.discountPercentage == 0) {
          this.isDiscountPercVesible = false;
        }
        if (data.regularPrice == data.discountedPrice) {
          this.isRegularPriceMore = false;
        }

        if (this.stitching_enabled == false) {
          this.showSizeDiv = true;
        }

        if (data.isInStock <= 0) {
          this.outOfStockMsgDspl = true;
        }

        if (this.stitching_type == "") {
          this.stitching_type_text_show = false;
        }
        else if (this.stitching_enabled == true) {
          this.stitching_type_text_show = false;
        }
        else {
          this.stitching_type_text_show = true;
        }
      },
      (error) => console.error(error)
      );

    this.route
      .data
      .pluck('product', 'd', 'productAttributes')
      .subscribe(
      (data: any) => {
        this.attributes = data
      },
      (error: any) => console.error(error),
      () => console.log('completed')
      );

    this.route
      .data
      .pluck('product', 'd', 'variants')
      .subscribe(
      (data: any) => {
        this.sizes = data['Size'] || []
        this.colors = data['Color'] || []
        this.individualQuantity = data['Quantity'] || []


        if (this.individualQuantity.length > 0) {
          this.showSizeDiv = false;
        }
      },
      (error: any) => console.error(error),
      () => console.log('completed')
      );
    this.route.data.pluck('product', 'd', 'chartList').subscribe(
      (data: any) => {
        this.columns = data['columns']
        for (let i = 0; i < this.columns.length; i++) {
          this.sizeChartHeaders.push(this.columns[i].name);
          this.sizeChartData.push(this.columns[i].values);
        }
      },
      (error: any) => console.error(error),
      () => console.log('completed')
    );
    this.route.data.pluck('product', 'd', 'vendorDetails').subscribe(
      (data: any) => {
        this.vendorDetails = data
      },
      (error: any) => console.error(error),
      () => console.log('completed')
    );
  }

  addWish(event: any): void {
    this.wishListService.addToWishList(this.customerId, this.productId);
  }

  addToBag(event: any): void {
    if (!this.showSizeDiv && this.selectedSize == "undefine") {
      this.addToBagUnSuccess = true;
    }
    else {
      let cartStream = this.cartDetailsService
                           .addToCart(this.productId, 1)
      cartStream.map((r: Response) => { return r.json() }).pluck('d')
                .subscribe(
                  (data) => {
                    this.addToBagSuccess = true;
                    this.addToBagUnSuccess = false;
                  },
                  (error) => console.error(error),
                  () => {console.log('completed')}
                );
      cartStream.connect();
    }
  }

  buyNow(event: any){
    this.showBuyLoader = true;
    let cartStream = this.cartDetailsService
                           .addToCart(this.productId, 1)
    cartStream.map((r: Response) => { return r.json() }).pluck('d')
              .subscribe(
                (data) => {
                  window.location.href = 'https://secure2.craftsvilla.com/buy/cart';
                },
                (error) => console.error(error),
                () => {console.log('completed')}
              );
    cartStream.connect();
  }

  selectSize(event: any, size: any): void {
    let index = this.individualQuantity.indexOf(size);
    this.selectedSize = (this.selectedSize === size) ? undefined : size;
  }

  showImage(event: any, galleryImage: any): void {
    let imageUrl = galleryImage;
    this.imageUrl = imageUrl;
  }

  selectStitchingType(stitchingType): void {
    this.stitchingType = stitchingType;
    if (this.stitchingType === 'Readymade') {
      this.showSizeDiv = false;
    } else if (this.stitchingType === 'Unstitched') {
      this.showSizeDiv = true;
      this.selectedSize = "undefine";
    } else if (this.stitchingType === 'Semi-stitched') {
      this.showSizeDiv = true;
      this.selectedSize = "undefine";
    } else if (this.stitchingType === 'Customized Stitch') {
      this.showSizeDiv = true;
      this.selectedSize = "undefine";
    }
  }

  static reduceAttributes(prevItem, nextItem) {
    nextItem.forEach(function(item) {
      prevItem[item['key']] = item['value'];
    });
    return prevItem;
  }

}
