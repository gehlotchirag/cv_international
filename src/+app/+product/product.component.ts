import { Component, OnInit, ElementRef, Renderer, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Response } from '@angular/http';


import { Product } from './product';

import { ProductService } from './product.service';
import { CartDetailsService } from '../shared/services/cart-details.service';
// import { WishListService } from '../shared/services/wish-list.service';
import { CommonSharedService } from '../shared/services/common-shared.service';

declare var _satellite: any;
declare var digitalData: any;

@Component({
  selector: 'cvi-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService, CartDetailsService, CommonSharedService],
})
export class ProductComponent implements OnInit, AfterViewInit {

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
    vendorId: any;
    vendorName: any;
    productPrice: any; 
    offerPrice: any;
    shippingCostWorld: any; 
    showBuyLoader: boolean = false;
    private renderedDescription:Object = {};
    private productName: String;
    config: Object = {
            slidesPerView: 1,
            pagination: '.swiper-pagination',
            spaceBetween: 30,
            speed: 600,
        };
    imageUrl: any;

  constructor(private productService : ProductService,
              private cartDetailsService: CartDetailsService,
              private route: ActivatedRoute,
              private router: Router,
              private elementRef: ElementRef,
              private renderer: Renderer,
              private commonService: CommonSharedService
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

  onImageHover(imageSrc, event) {
    this.galleryImage = this.elementRef.nativeElement.querySelector('.productImage');
    this.zoomedImage = this.elementRef.nativeElement.querySelector('.zoomed-image');
    this.renderer.setElementStyle(this.zoomedImage, 'display', 'block');
    this.renderer.setElementStyle(this.zoomedImage, 'background-image', 'url(' + imageSrc + ')');
    this.adjustZoomedImage(event);
  }

  onImageHoverMove(event) {
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

    this.renderer.setElementStyle(this.zoomedImage, 'background-position', '' + backgroungPosX + '% ' + backgroungPosY + '%');
  }

  getDescription(description){
    if(description){
      let _descArr = description.split(',').filter(Boolean)
      let _descObj = {};
      try{
        for (var i = 0; i < _descArr.length; i++) {
          var split = _descArr[i].split(':');
          if(!split[1]){
            continue;
          }
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
        this.products = data;
        this.productName = data.productName;
        this.productId = data.productId;
        this.vendorId = data.vendorDetails.vendorId;
        this.vendorName = data.vendorDetails.vendorName;
        this.productPrice = data.regularPrice;
        this.offerPrice = data.discountedPrice;
        this.shippingCostWorld = data.shippingCostWorld;
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

  ngAfterViewInit() {
    if (typeof _satellite != "undefined") {
      digitalData.page={
        pageInfo:{
          pageName:"pdp: :" + this.productId,
        },
        category:{
          pageType:"pdp",
          primaryCategory: "",
        },
        device:{
          deviceType: this.commonService.deviceType()
        },
        currencycode:{
          currencyCode : 'USD',
        }
      };

      digitalData.product=[{
        productInfo: {
          productID: this.productId,
          subCategory0: "",
          subCategory1: "",  
        }
      }];

      digitalData.vendor_product = {
        vendorInfo: {
          vendorId: this.vendorId,
          vendorName: this.vendorName,
          vendorRating: '',
          vendorUrl: '',
        },
        productInfo: {
          productId: this.productId,
          currency: 'USD',
          productPrice:{
            mrp: this.productPrice,
            offer: this.offerPrice,
          },
          shippingPrice:{
            india: '',
            international: this.shippingCostWorld,
          }
        },

      };

      digitalData.events = "prodView";
    
      _satellite.track("page-load");
    }
  }


  addWish(event: any): void {
    // this.wishListService.addToWishList(this.customerId, this.productId);
  }

  addToBag(event: any): void {
    if (typeof _satellite != "undefined") {
      digitalData.cart = {
        item: [{
          productInfo: {
              productID: this.productId
          }
        }]
      },
      digitalData.addtocartsrc = {
        src: "add to cart"
      },
      _satellite.track("cart-add")
    }

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

  buyNow(event: any): void {
    this.showBuyLoader = true;
    if (typeof _satellite != "undefined") {
      digitalData.cartsrc = {
        cartsrc: "buy now"
      },
      digitalData.addtocartsrc = {
        src: "buy now"
      },
      _satellite.track("cart-add"),
      _satellite.track("cartsrc")
    }
    let cartStream = this.cartDetailsService
                           .addToCart(this.productId, 1)
    cartStream.map((r: Response) => { return r.json() }).pluck('d')
              .subscribe(
                (data) => {
                  window.location.href = 'https://securestaticintl.craftsvilla.com/buy/cart';
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
