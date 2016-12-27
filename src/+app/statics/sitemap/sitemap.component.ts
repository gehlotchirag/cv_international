import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { getRouterLink } from '../../shared/utils/index';

@Component({
  selector: 'cvi-root',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.css'],
  providers: [ ]
})
export class SitemapComponent {
  public sitemap = [
    {name: 'Saree', url: '/womens-clothings/sarees'},
    {name: 'Salwar Suits', url: '/womens-clothings/salwar-suits'},
    {name: 'Lehengas', url: '/womens-clothings/lehengas'},
    {name: 'Blouses', url: '/womens-clothings/blouses'},
    {name: 'Kurtis', url: '/womens-clothings/kurtis-tunics'}
  ]
  // public sitemap:any;
  // public selectedCategory: any;
  // public getRouterLink = getRouterLink;

  constructor(private route: ActivatedRoute){
    // this.route
    //     .data
    //     .pluck('sitemap', 'd')
    //     .subscribe((data: any) => {
    //       this.sitemap = data;
    //     },
    //     (error) => console.error(error)
    //     );
  }

  // selectCategory(category){
  //   this.selectedCategory = category.data;
  // }
}
