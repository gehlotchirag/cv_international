import { Component, HostListener } from '@angular/core';
import { Response } from '@angular/http';

import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

import { RouterHeaderBindingService } from './shared/services/router-header-binding.service';
import { ProgressBarService } from './shared/services/progress-bar.service';
// import { MetaService } from './shared/services/meta-tags.service';

import { HttpClientService } from './shared/services/http-client.service';

//
/////////////////////////
// ** Example Directive
// Notice we don't touch the Element directly


@Component({
  selector: 'cvi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ HttpClientService, RouterHeaderBindingService, ProgressBarService ]
})
export class AppComponent {

  @HostListener('window:scroll', ['$event'])
  showMegaMenu(event) {
    if(typeof window !== 'undefined'){
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
  }

  public hasMegaMenu: boolean = false;

  constructor(private router: Router,
              private httpClient: HttpClientService,
              private progressBar: ProgressBarService){
      this.router.events.subscribe((event) => {
        let _currentUrl = event.url;
        if(_currentUrl === '/'){
          RouterHeaderBindingService.setMegaMenuStatus(false);
        }
        else {
          RouterHeaderBindingService.setMegaMenuStatus(true);
        }
        if(event instanceof NavigationEnd && typeof window !== 'undefined'){
          window.scrollTo(0,0);
        }
        if (event instanceof NavigationStart) {
          this.progressBar.start();
        } else if ( event instanceof NavigationEnd ||
                    event instanceof NavigationCancel ||
                    event instanceof NavigationError) {
          this.progressBar.complete();
        }
      });
  }

  private receiveMegaMenu(shouldShow) {
    this.hasMegaMenu = shouldShow;
  }

}
