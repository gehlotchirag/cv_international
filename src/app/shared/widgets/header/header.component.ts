import { Component, OnInit, OnChanges, EventEmitter, Output, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CartDetailsService } from '../../services/cart-details.service';
import { MegaMenuComponent } from '../mega-menu/mega-menu.component';
import { RouterHeaderBindingService } from '../../services/router-header-binding.service';
// import { WishListService } from '../../services/wish-list.service';

@Component({
  selector: 'cvi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[ CartDetailsService ],
})
export class HeaderComponent implements OnInit , OnChanges {

  @Output() onSearchItems = new EventEmitter();

  private cart: any; // Change type to CartInterface
  private wishlist: any; // Change type to WishlistInterface
  private queryInput: string;
  @Input() showMegaMenu: boolean;

  constructor(private router: Router,
              private cartDetailsService: CartDetailsService
              ) { }

  ngOnInit() {
    this.cartDetailsService.fetchCartDetails();
  };

  ngOnChanges() {
    RouterHeaderBindingService.getMegaMenuStatus().subscribe((data) =>  this.showMegaMenu = data);
  }

  searchItems(){
    if(this.queryInput && this.queryInput != ''){
      this.router.navigate(['/listing'], { queryParams: { query: this.queryInput }, replaceUrl: true});
    }
    else {
      this.router.navigate(['/listing']);
    }
  }

  // showMegaMenu(event): void {
  //   console.log(event);
  // }

  hideMegaMenu(event): void {
    console.log(event);
  }

}
