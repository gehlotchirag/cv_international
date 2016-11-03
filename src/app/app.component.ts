import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from './shared/widgets/header/header.component';

import { RoutingHelperDirective } from './shared/directives/routing-helper.directive';

@Component({
  selector: 'cvi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {

  private hasMegaMenu: boolean = false;

  constructor(private route: ActivatedRoute){}

  ngAfterViewInit() {
    // this.route.url.subscribe(
    //     (data) => {
    //       if(data[0].path != ''){
    //         this.showMegaMenuCaret = true;
    //       }
    //     },
    //     (error) => console.error(error));
  }

  private receiveMegaMenu(shouldShow) {
    this.hasMegaMenu = shouldShow;
  }


}
