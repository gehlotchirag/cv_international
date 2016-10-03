import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response, Headers } from '@angular/http';

import { HttpClientService } from './http-client.service';
import { Product } from '../../product/product';

@Injectable()
export class CartDetailsService {
  private cartContentsUrl = '4y2ik';
  private cartContents: Product[];
  private isCartInitialized: boolean  = false;

  constructor(private httpClient: HttpClientService,
              private http: Http
  ){}

  private updateCartCountView(){
    let cart = document.getElementById('js-cart-count');
    cart.textContent = String(this.cartContents ? this.cartContents.length : 0);
  }

  fetchCartDetails(): void {
    this.httpClient
       .get(this.cartContentsUrl)
       .map((r: Response) => { return r.json() as Product[] })
       .pluck('products')
       .subscribe(
         (data: Product[]) => { this.cartContents = data;
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
    let addToCartUrl = '1/personal/cart/addToMyCart'
    let headers = {
      'content-type': 'application/json',
      'x-version-code': '23',
      'x-session': '12_57ecf40dcacc92.83690143'
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
    return this.cartContents.length;
  }

  get isInitialized(): boolean {
    return this.isCartInitialized;
  }
}
