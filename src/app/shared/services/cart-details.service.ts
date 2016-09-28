import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';

import { HttpClientService } from './http-client.service';
import { Product } from '../../product/product';

@Injectable()
export class CartDetailsService {
  private cartContentsUrl = '4y2ik';
  private cartContents: Product[];
  private isCartInitialized: boolean  = false;

  constructor(private httpClient: HttpClientService){}

  fetchCartDetails(callback: (d: any) => void ): void {
    this.httpClient
       .get(this.cartContentsUrl)
       .map((r: Response) => { return r.json() as Product[] })
       .pluck('products')
       .subscribe(
         (data: Product[]) => { this.cartContents = data, callback(data) },
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

  get isInitialized(): boolean {
    return this.isCartInitialized;
  }
}
