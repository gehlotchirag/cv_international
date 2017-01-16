import { Component, OnInit } from '@angular/core';

import { getRouterLink } from '../../utils/index';


@Component({
  selector: 'cvi-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
    public getRouterLink = getRouterLink;
    public categories = [
      {name: 'Saree', url: '/womens-clothing/sarees'},
      {name: 'Salwar Suits', url: '/womens-clothing/salwar-suits'},
      {name: 'Lehengas', url: '/womens-clothing/lehengas'},
      {name: 'Blouses', url: '/womens-clothing/blouses'},
      {name: 'Kurtis', url: '/womens-clothing/kurtis-tunics'}
    ]
	  
    constructor() { }

	  ngOnInit() {}

}
