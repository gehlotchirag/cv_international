import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response, Headers } from '@angular/http';

import { HttpClientService } from './http-client.service';
import ListingProduct from '../interfaces/listing-product';
import CartInfo from '../interfaces/cart-info';

@Injectable()
export class CartDetailsService {
  private cartContentsUrl = 'checkoutService/index/loadQuote';
  private cartContents: CartInfo;
  private isCartInitialized: boolean  = false;

  constructor(private httpClient: HttpClientService){}

  private updateCartCountView(){
    let cart = document.getElementById('js-cart-count');
    cart.textContent = String(this.cartContents && this.cartContents.total_items ? this.cartContents.total_items : 0);
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

  addCartSellerNote(productId: string, sellerNote: string) {
    // Needs CustomerID as well
  }

  removeCartSellerNote(productId: string){
    // Needs CustomerID as well
  }

  updateCartSellerNote(productId: string, sellerNote: string){
    // Needs CustomerID as well
  }

  applyCoupon(couponCode: string){
    // Needs CustomerID
  }

  removeCoupon(){
    // Needs CustomerID
  }

  attachAddressToCart(){
    // Needs CustomerID
  }

  saveAndAttachAddressToCart(){

  }

  moveToCartFromWishlist(wishlistProductId: string, cartProductId: string){

  }

  addToCart(customerId: string, productId: string, qty: number){
    let body = {customerId, productId, qty}
    let addToCartUrl = '1/personal/cart/addToMyCart'
    let headers = {
      // 'content-type': 'application/json',
      'x-version-code': '23',
      'x-session': '12_57f20d48968117.11775943',
      'Authorization':'1696318_cb935a2694710b6a2b6eb56f3765104c_web'
    };
    this.httpClient
        .post(addToCartUrl, body, headers)
        .subscribe(
          (data: any) =>  {
            console.log('posted product to cart')
            // this.cartContents = data['d']['products'];
            // this.updateCartCountView();
          },
          (error) => console.error(error),
          () => console.log('completed')
        )
  }

  removeFromCart(productIds: string[]){
    // Needs CustomerID
  }

  updateCart(products: any[]){

  }

  get cartCount(): number {
    return this.cartContents && this.cartContents.total_items ? this.cartContents.total_items: 0;
  }

  get isInitialized(): boolean {
    return this.isCartInitialized;
  }
}
