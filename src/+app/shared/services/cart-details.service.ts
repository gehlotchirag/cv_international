import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { DomAdapter, getDOM } from '@angular/platform-browser/src/dom/dom_adapter';


import { HttpClientService } from './http-client.service';
import ListingProduct from '../interfaces/listing-product';
import CartInfo from '../interfaces/cart-info';

@Injectable()
export class CartDetailsService {
  private cartContentsUrl = 'checkoutService/index/loadQuote';
  private cartContents: CartInfo;
  private isCartInitialized: boolean  = false;
  private _dom: DomAdapter = getDOM();

  constructor(private httpClient: HttpClientService){}

  private updateCartCountView(){
    let cart = this._dom.query(`#js-cart-count`);
    if(cart) {
      cart.textContent = String(this.cartContents && this.cartContents.total_items ? this.cartContents.total_items : 0);
    }
  }

  fetchCartDetails(): void {
    this.httpClient
       .get(this.cartContentsUrl)
       .map((r: Response) => { return r.json() })
       .pluck('d')
       .subscribe(
         (data: CartInfo) => { this.cartContents = data;
           this.updateCartCountView();
          },
         (error) => console.error(error),
         () => {
           this.isCartInitialized = true
         }
       )
  }

  addToCart(productId: string, qty: number): any{
    let body = {productId, qty}
    let addToCartUrl = 'checkoutService/index/addToQuote';
    let cartStream =  this.httpClient
                          .post(addToCartUrl, body)
                          .publish();
    cartStream.map((r: Response) => { 
        return r.json();
     }).pluck('d')
              .subscribe(
                (data: CartInfo) => { 
                  this.cartContents = data;
                  this.updateCartCountView();
                },
                (error) => console.error(error),
                () => {}
              );
    return cartStream;
  }


  get isInitialized(): boolean {
    return this.isCartInitialized;
  }
}
