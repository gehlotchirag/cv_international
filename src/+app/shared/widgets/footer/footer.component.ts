import { Component, OnInit } from '@angular/core';

import { getRouterLink } from '../../utils/index';


@Component({
  selector: 'cvi-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
    public getRouterLink = getRouterLink;
    public categoryLinks = {
    	saree: 'category/2?params={"categoryId":[2],"sort":{"relevance":"Popular"}}',
    	lehenga: 'category/9?params={"categoryId":[9],"sort":{"relevance":"Popular"}}',
    	suits: 'category/5?params={"categoryId":[5],"sort":{"relevance":"Popular"}}'
    }
	constructor() { }

	ngOnInit() {}

}
