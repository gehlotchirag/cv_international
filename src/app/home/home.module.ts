import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { homeRouting }  from './home.routing';

import { HomeComponent } from './home.component';

import { WidgetModule } from '../shared/widgets';
import { HomeMetaService } from './home-meta.service';
import { MetaService } from '../shared/services/meta.service';


@NgModule({
    imports: [ 
	    WidgetModule, 
	    homeRouting,
	    BrowserModule 
    ],
    declarations: [ 
    	HomeComponent 
    ],
    providers: [ HomeMetaService, MetaService ],
})

export class HomeModule { }
