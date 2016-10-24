import { Component, OnInit } from '@angular/core';

import { HttpClientService } from '../../services/http-client.service';
import ListingProduct from '../../interfaces/listing-product';

@Component({
  selector: 'cvi-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css']
})
export class ProductSliderComponent implements OnInit {
  public dataItems: ListingProduct[];
  public header: string;
  private productDblArray: ListingProduct[][] = [];

  constructor(public httpClient: HttpClientService){

  }

  ngOnInit() {
    let count = 0, tempArr = [];
    for(let i=0; i < this.dataItems.length; i++){
        count++;
        tempArr.push(this.dataItems[i]);
        if(count == 5){
          this.productDblArray.push(tempArr.slice());
          count = 0;
          tempArr = [];
        }
    }
    if(tempArr.length > 0){
      this.productDblArray.push(tempArr.slice());
      tempArr = [];
    }
  }

}
