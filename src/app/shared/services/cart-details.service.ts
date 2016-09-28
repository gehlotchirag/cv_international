import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { CART_CONTENTS_URL } from '../../urls';
import { Product } from '../../product/product';

@Injectable()
export class CartDetailsService {
  private cartContentsUrl = CART_CONTENTS_URL;
  private cartContents: Product[];

  constructor(private http: Http){}

  fetchCartDetails(): Observable<Product[]> {
    return this.http
               .get(this.cartContentsUrl)
               .map((r: Response) => { return r.json() as Product[] });
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

  addToCart(productId: string, qty: string){
    // Needs CustomerID
  }

  removeFromCart(productIds: string[]){
    // Needs CustomerID
  }

  updateCart(products: any[]){

  }

  get cartCount(): number {
    return this.cartContents.length;
  }

  get isCartKeyInStorage(){
      return false;
  }

}
