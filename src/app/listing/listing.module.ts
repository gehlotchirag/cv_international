import { NgModule } from '@angular/core';

import { ListingComponent } from './listing.component';

import { CategoryFilterPipe } from './category-filter.pipe';
import { LiveFilterPipe } from './live-filter.pipe';

import { listRouting }  from './listing.routing';

import { ListingResolveService } from './listing-resolve.service';
import { FilterResolveService } from './filter-resolve.service';
import { ListingService } from './listing.service';

  @NgModule({
    imports: [
      listRouting
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
