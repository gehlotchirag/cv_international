import { NgModule } from '@angular/core';

import { homeRouting }  from './home.routing';

import { HomeComponent } from './home.component';

@NgModule({
    imports: [ homeRouting ],
    declarations: [ HomeComponent ],
    providers: [ ],
})

export class HomeModule { }
