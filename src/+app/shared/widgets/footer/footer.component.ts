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
      {name: 'Saree', url: '/womens-clothings/sarees'},
      {name: 'Salwar Suits', url: '/womens-clothings/salwar-suits'},
      {name: 'Lehengas', url: '/womens-clothings/lehengas'},
      {name: 'Blouses', url: '/womens-clothings/blouses'},
      {name: 'Kurtis', url: '/womens-clothings/kurtis-tunics'}
    ]
	  
    constructor() { }

	  ngOnInit() {}

}
