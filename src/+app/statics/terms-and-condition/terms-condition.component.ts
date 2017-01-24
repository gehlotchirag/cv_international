import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.css']
})
export class TermsConditionComponent implements OnInit {

	public pageContent = "";
	constructor(private route: ActivatedRoute) {
		this.route.data.pluck('html', 'd').subscribe((data: any) => {
			this.pageContent = data;
	    });

  	}

  ngOnInit() {
  }

}
