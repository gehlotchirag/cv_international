import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, DOCUMENT } from '@angular/platform-browser';

import { HomeModule } from './+home/home.module';
import { ProductModule } from './+product/product.module';
import { ListingModule } from './+listing/listing.module';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientService } from './shared/services/http-client.service';


import { HttpModule } from '@angular/http';
import { StaticsModule } from './statics/statics.module';
import { NotFoundComponent } from './+not_found/not-found.component';

import { HeaderComponent } from './shared/widgets/header/header.component';
import { FooterComponent } from './shared/widgets/footer/footer.component';

import {Tabs} from './shared/widgets/tabs-widget/tabs.component';
import {Tab} from './shared/widgets/tabs-widget/tab.component';

import { RouterHeaderBindingService } from './shared/services/router-header-binding.service';
import { DataHoldingService } from './shared/services/data-holding.service';


@NgModule({
	declarations: [ 
	  	AppComponent,
		HeaderComponent,
		FooterComponent,
		NotFoundComponent,
		Tabs,
		Tab 
	],
	imports: [
		SharedModule,
		HomeModule,
		ProductModule,
		ListingModule,
		StaticsModule,
		AppRoutingModule
	],
  	providers:[ 
		HttpClientService,
      	RouterHeaderBindingService,
      	DataHoldingService,
      	Title	
	]
})
export class AppModule {
}

export { AppComponent } from './app.component';
