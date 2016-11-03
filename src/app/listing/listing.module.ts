import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WidgetModule } from '../shared'
import { ListingComponent } from './listing.component';
import { CategoryFilterPipe } from './category-filter.pipe';
import { listRouting }  from './listing.routing';
import { ListingResolveService } from './listing-resolve.service';
import { ListingService } from './listing.service';
import { HttpClientService } from '../shared/services/http-client.service'


  @NgModule({
    imports: [ BrowserModule,WidgetModule, listRouting ],
    declarations: [ ListingComponent, CategoryFilterPipe ],
    providers: [ ListingResolveService, ListingService, HttpClientService ],

})
export class ListingModule { }

