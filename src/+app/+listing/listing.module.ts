import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetModule } from '../shared/widgets/widgets.module';

import { ListingComponent } from './listing.component';

import { CategoryFilterPipe } from './category-filter.pipe';
import { LiveFilterPipe } from './live-filter.pipe';

import { ListRoutingModule }  from './list-routing.module';

import { ListingResolveService } from './listing-resolve.service';
import { FilterResolveService } from './filter-resolve.service';
import { ListingService } from './listing.service';

  @NgModule({
    imports: [
      ListRoutingModule,
      WidgetModule,
      CommonModule
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
