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

  addToCart(productId: string, qty: number){
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
