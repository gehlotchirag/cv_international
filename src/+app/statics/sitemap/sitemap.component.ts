import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cvi-root',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.css'],
  providers: [ ]
})
export class SitemapComponent {
  public sitemap:any;

  constructor(private route: ActivatedRoute){
    this.route
        .data
        .pluck('sitemap', 'd')
        .subscribe((data: any) => {
          this.sitemap = data['categories'];
        },
        (error) => console.error(error)
        );
  }
}
