import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WidgetModule } from '../shared/widgets/widgets.module';

import { CategoryComponent } from './category.component';

import { KeyValuesPipe } from './key-value.pipe';

import { ListRoutingModule }  from './list-routing.module';

import { ProductResolveService } from './product-resolve.service';
import { FilterResolveService } from './filter-resolve.service';
import { ListingService } from './listing.service';

  @NgModule({
    imports: [
      ListRoutingModule,
      RouterModule,
      WidgetModule,
      CommonModule
    ],
    declarations: [
      CategoryComponent,
      KeyValuesPipe
    ],
    providers: [
      FilterResolveService,
      ProductResolveService,
      ListingService
    ],

})
export class ListingModule { }
