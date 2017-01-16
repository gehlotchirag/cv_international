import { Component, Input, ElementRef, Renderer, ViewChild, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";

import { getRouterLink } from '../../utils/'

@Component({
  selector: 'cvi-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.css'],
  providers: [ ]
})
export class HeroBannerComponent implements OnChanges, OnInit, OnDestroy{
  @Input() header: string;
  @Input() dataItems: any;

  @ViewChild('heroCarousel') heroCarousel: ElementRef;
  @ViewChild('heroCarouselContainer') carouselContainer: ElementRef;

  private subscription: Subscription;
  public currentSlideIndex = 0;
  public bannerPosX = 0;
  public itemWidth;
  public sliderWidth;
  public timerActivated = false;

  private getRouterLink = getRouterLink;

  constructor(private renderer: Renderer, private elementRef: ElementRef){}

  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  
  ngOnInit() {
  }

  activateTimer(){
    let timer = TimerObservable.create(10000, 10000);
    let self = this;
    this.subscription = timer.subscribe(t => {
      self.swipe(self.currentSlideIndex, 'swipeleft')
    });
    this.timerActivated = true
  }
  ngOnDestroy() {
    if(this.timerActivated) {
      this.subscription.unsubscribe(); 
    }
  }


  ngOnChanges(changes: SimpleChanges){
    if(this.dataItems) {
      this.setCarouselWidth();
    }
    if(this.heroCarousel.nativeElement.style && !this.timerActivated) {
      this.activateTimer();
    }
  }

  setCarouselWidth(){
    let dataLength = this.dataItems.length;
    let width = dataLength * 100;
    let slideWidth = 100 / dataLength;
    this.sliderWidth = '' + width + '%';
    this.itemWidth = '' + slideWidth + '%';
  }

  swipe(currentIndex: number, event, indexClicked?: number) {
    let action = event;
    let element = this.heroCarousel.nativeElement;
    let elementWidth = this.carouselContainer.nativeElement.offsetWidth;
    let posX = 0;
    let nextIndex = 0;
    if (currentIndex > this.dataItems.length || currentIndex < 0) return;
    // next
    if (action === this.SWIPE_ACTION.LEFT) {
        const isLast = currentIndex === this.dataItems.length - 1;
        nextIndex = isLast ? 0 : currentIndex + 1;
    }

    // previous
    if (action === this.SWIPE_ACTION.RIGHT) {
        const isFirst = currentIndex === 0;
        nextIndex = isFirst ? this.dataItems.length - 1 : currentIndex - 1;
    }

    nextIndex = indexClicked ? indexClicked : nextIndex;

    posX = -(nextIndex * elementWidth);

    this.renderer.invokeElementMethod(
      element, 
      'animate', 
      [
        [  
          {left: '' + this.bannerPosX + 'px'},
          {left: '' + posX + 'px'}
        ], 
        {
          duration: 300,
          delay: 0,
          fill: "forwards"
        } 
      ]
    );
    this.bannerPosX = posX;
    this.currentSlideIndex = nextIndex; 
  }
}
