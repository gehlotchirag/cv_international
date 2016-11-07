import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders }  from './app.routing';
import './rxjs-extensions';

import { HomeModule } from './home';
import { ListingModule } from './listing';
import { ProductModule } from './product';
import { NotFoundComponent } from './not_found_404';

import { HeaderComponent } from './shared/widgets/header/header.component';

import {Tabs} from './shared/widgets/tabs-widget/tabs.component';
import {Tab} from './shared/widgets/tabs-widget/tab.component';
import { AppComponent } from './app.component';

import { HttpClientService } from './shared/services/http-client.service';

import { RoutingHelperDirective } from './shared/directives/routing-helper.directive';

import { RouterHeaderBindingService } from './shared/services/router-header-binding.service';

@NgModule({
    imports: [
      BrowserModule,
      HttpModule,
      routing,
      FormsModule,
      HomeModule,
      ListingModule,
      ProductModule
    ],
    declarations: [
      AppComponent,
      HeaderComponent,
      NotFoundComponent,
      Tabs, 
      Tab,
      RoutingHelperDirective
    ],
    providers: [
      HttpClientService,
      appRoutingProviders,
      RouterHeaderBindingService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
