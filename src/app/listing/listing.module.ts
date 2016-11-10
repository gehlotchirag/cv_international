import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WidgetModule } from '../shared/widgets';

import { ListingComponent } from './listing.component';

import { CategoryFilterPipe } from './category-filter.pipe';
import { LiveFilterPipe } from './live-filter.pipe';

import { listRouting }  from './listing.routing';

import { ListingResolveService } from './listing-resolve.service';
import { FilterResolveService } from './filter-resolve.service';
import { ListingService } from './listing.service';

  @NgModule({
    imports: [
      listRouting,
      WidgetModule,
      BrowserModule
    ],
    declarations: [
      ListingComponent,
      CategoryFilterPipe,
      LiveFilterPipe
    ],
    providers: [
      ListingResolveService,
      FilterResolveService,
      ListingService
    ],

})
export class ListingModule { }