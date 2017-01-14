import { Component, ElementRef, Renderer, ViewChild, DoCheck, OnInit, HostListener } from '@angular/core';

import ListingProduct from '../../interfaces/listing-product';

declare var _satellite: any;
declare var digitalData: any;

@Component({
  selector: 'cvi-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css'],
  providers: [ ]
})
export class ProductSliderComponent implements OnInit, DoCheck {

  @ViewChild('productSliderContainer') sliderContainer: ElementRef;
  @ViewChild('productSlider') productSlider: ElementRef;
  @ViewChild('productSlide') productSlide: ElementRef;

  public dataItems: ListingProduct[];
  public header: string;
  public slidePerView = 5;
  public sliderWidth = '100%';
  public slideWidth = '20%';
  public totalIndex;
  public currentIndex = 0;
  public sliderPosition = 0;
  public isResponsive = false;

  constructor(private renderer: Renderer){}

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setSliderWidth();
  }

  feedClick(product, position){
    if(typeof _satellite != 'undefined') {
      digitalData.prodclick = {
        source:"homepage_ _"+ this.header +"_"+ product.productId+"_"+ position +""
      }
      _satellite.track('prodclick');
    }
  }

  ngOnInit() {
  }

  setSliderWidth(){
    if(typeof window !== 'undefined'){
      if (window.innerWidth < 768){
        this.isResponsive = true;
      }else if(window.innerWidth < 992) { 
        this.slidePerView = 4;
        this.isResponsive = false;
      } else {
        this.slidePerView = 5;
        this.isResponsive = false;
      }
    }
    let length = this.dataItems.length;
    let width = (length * 100)/ this.slidePerView;
    let widthSlide = 100 / length;
    this.sliderWidth = '' + width + '%';
    this.slideWidth = '' + widthSlide + '%';
    this.totalIndex = Math.ceil(length/this.slidePerView);
    if(this.isResponsive){
      this.sliderWidth = '100%';
      this.slideWidth = '50%';
    }
  }

  ngDoCheck(){
    if(this.dataItems) {
      this.setSliderWidth();
    }
  }

  slide(action: string, event){
    let slider = this.productSlider.nativeElement;
    let sliderContainer = this.sliderContainer.nativeElement;
    let sliderWidth = sliderContainer.offsetWidth;
    let nextIndex = 0;
    let posX = 0;
    if(action === 'next') {
      const isLast = this.currentIndex === this.totalIndex - 1;
      nextIndex = isLast ? 0 : this.currentIndex + 1;
    }

    if(action === 'prev') {
      const isFirst = this.currentIndex === 0;
      nextIndex = isFirst ? this.totalIndex - 1 : this.currentIndex - 1;
    }

    posX = -(nextIndex * sliderWidth);

    this.renderer.invokeElementMethod(
      slider, 
      'animate', 
      [
        [  
          {left: '' + this.sliderPosition + 'px'},
          {left: '' + posX + 'px'}
        ], 
        {
          duration: 600,
          delay: 0,
          fill: "forwards"
        } 
      ]
    );

    this.sliderPosition = posX;
    this.currentIndex = nextIndex; 
  }
}
