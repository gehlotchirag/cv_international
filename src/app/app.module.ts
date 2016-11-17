import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser/src/dom/events/event_manager';
import { MultiEventPlugin } from './multi-event.plugin';
import { routing, appRoutingProviders }  from './app.routing';
import './rxjs-extensions';

import { HomeModule } from './home';
import { ListingModule } from './listing';
import { ProductModule } from './product';
import { StaticsModule } from './statics';
import { NotFoundComponent } from './not_found_404';

import { HeaderComponent } from './shared/widgets/header/header.component';
import { FooterComponent } from './shared/widgets/footer/footer.component';

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
      ProductModule,
      StaticsModule
    ],
    declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      NotFoundComponent,
      Tabs,
      Tab,
      RoutingHelperDirective
    ],
    providers: [
      HttpClientService,
      appRoutingProviders,
      RouterHeaderBindingService,
      { provide: EVENT_MANAGER_PLUGINS, useClass: MultiEventPlugin, multi: true }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
