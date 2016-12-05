import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { WidgetModule } from '../shared/widgets/widgets.module';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    WidgetModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }