import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders }  from './app.routing';
import './rxjs-extensions';

import { HomeModule } from './home';
import { ListingModule } from './listing';
import { ProductModule } from './product';

import { HeaderComponent } from './shared/widgets/header/header.component';

import {Tabs} from './shared/widgets/tabs-widget/tabs.component';
import {Tab} from './shared/widgets/tabs-widget/tab.component';
import { AppComponent } from './app.component';

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule, routing, HomeModule, ListingModule, ProductModule ],
    
    declarations: [ AppComponent, HeaderComponent, Tabs, Tab ],

    providers: [ appRoutingProviders ],

    bootstrap: [ AppComponent ]
})
export class AppModule { }

