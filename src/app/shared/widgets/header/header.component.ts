import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartDetailsService } from '../../services/cart-details.service';
// import { WishListService } from '../../services/wish-list.service';

@Component({
  selector: 'cvi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[ CartDetailsService ],
})
export class HeaderComponent implements OnInit {
  private cart: any; // Change type to CartInterface
  private wishlist: any; // Change type to WishlistInterface
  private queryInput: string;

  constructor(private router: Router,
              private cartDetailsService: CartDetailsService
              ) { }

  ngOnInit() {
    this.cartDetailsService.fetchCartDetails();
    // this.wishListService.fetchWishList();
  }

  searchItems(){
    if(this.queryInput && this.queryInput != ''){
      this.router.navigate(['/listing'], { queryParams: { query: this.queryInput }, replaceUrl: true});
    }
    else {
      this.router.navigate(['/listing']);
    }

  }

}
