import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { homeRouting }  from './home.routing';

import { HomeComponent } from './home.component';

import { WidgetModule } from '../shared/widgets';


@NgModule({
    imports: [ 
	    WidgetModule, 
	    homeRouting,
	    BrowserModule 
    ],
    declarations: [ 
    	HomeComponent 
    ],
    providers: [ ],
})

export class HomeModule { }
