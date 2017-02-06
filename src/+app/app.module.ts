import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Title, DOCUMENT } from '@angular/platform-browser';

import { HomeModule } from './+home/home.module';
import { ProductModule } from './+product/product.module';
import { SharedModule } from './shared/shared.module';
import { StaticsModule } from './statics/statics.module';
import { ListingModule } from './+listing/listing.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './+not_found/not-found.component';
import { HeaderComponent } from './shared/widgets/header/header.component';
import { ProgressBarComponent } from './shared/widgets/header/progress-bar.component';

import { FooterComponent } from './shared/widgets/footer/footer.component';
import {Tabs} from './shared/widgets/tabs-widget/tabs.component';
import {Tab} from './shared/widgets/tabs-widget/tab.component';

import { HttpClientService } from './shared/services/http-client.service';
import { RouterHeaderBindingService } from './shared/services/router-header-binding.service';
import { ProgressBarService } from './shared/services/progress-bar.service';
import { DataHoldingService } from './shared/services/data-holding.service';
import 'intl';

@NgModule({
	declarations: [ 
	  	AppComponent,
		HeaderComponent,
		FooterComponent,
		NotFoundComponent,
		ProgressBarComponent,
		Tabs,
		Tab 
	],
	imports: [
		SharedModule,
		HomeModule,
		ProductModule,
		StaticsModule,
		ListingModule,
		AppRoutingModule
	],
  	providers:[ 
		HttpClientService,
      	RouterHeaderBindingService,
      	DataHoldingService,
      	ProgressBarService,
      	Title	
	]
})
export class AppModule {
}

export { AppComponent } from './app.component';
