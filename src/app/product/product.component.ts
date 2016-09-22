import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'cvi-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ ProductService ]
})
export class ProductComponent implements OnInit {

  products: Observable<Product[]>;


  constructor(private productService : ProductService) {

  }
  ngOnInit() {
    this.products=this.productService.getProducts();
  }


}
