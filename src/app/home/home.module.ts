import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WidgetModule } from '../shared'
import { HomeComponent } from './home.component';
import { homeRouting }  from './home.routing';


  @NgModule({
    imports: [ BrowserModule,WidgetModule, homeRouting ],
    declarations: [ HomeComponent ],
    providers: [ ],

})
export class HomeModule { }

