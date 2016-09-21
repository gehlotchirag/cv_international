import { Component, OnInit, ViewContainerRef, ViewChild, ComponentRef, ComponentFactoryResolver } from '@angular/core';

import {HomeService} from './home.service';

@Component({
  selector: 'cvi-home',
  providers: ['HomeService'],
  templateUrl: './home-dynamic.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @ViewChild('content', { read: ViewContainerRef }) contentContainer: ViewContainerRef;
  cmpRef: ComponentRef<any>;
  private isViewInitialized:boolean = false;

  children: Component[];

  constructor(private resolver: ComponentFactoryResolver,
              private HomeService: HomeService
  ) { }

  ngOnInit(){

  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();
  }

  ngOnDestroy() {
    if(this.cmpRef) {
      this.cmpRef.destroy();
    }
  }

  ngOnChanges(){
    this.updateComponent();
  }

  private updateComponent(){
    if(!this.isViewInitialized){
      return;
    }

    if(this.cmpRef){
      this.cmpRef.destroy();
    }


  }

}
