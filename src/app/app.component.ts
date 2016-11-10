import { Component, AfterViewInit, OnInit, HostListener, ElementRef, Renderer } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

// import { HeaderComponent } from './shared/widgets/header/header.component';

import { RoutingHelperDirective } from './shared/directives/routing-helper.directive';
import { RouterHeaderBindingService } from './shared/services/router-header-binding.service';

import { HttpClientService } from './shared/services/http-client.service';

@Component({
  selector: 'cvi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ HttpClientService ]
})
export class AppComponent {

	@HostListener('window:scroll', ['$event'])
  showMegaMenu(event) {
    let _url = this.router.url;
    if (_url === '/') {
    	let mega_menu_height = 450;
	  	if(document.body.scrollTop > mega_menu_height){
	  		this.hasMegaMenu = true;
	  	}else{
	  		this.hasMegaMenu = false;
	  	}
    };
  }

  private hasMegaMenu: boolean = false;

  constructor(
  	private httpClient: HttpClientService,
  	private elementRef: ElementRef,
  	private router: Router,
  	private renderer: Renderer
  ){}

  private receiveMegaMenu(shouldShow) {
    this.hasMegaMenu = shouldShow;
  }

}