import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

import { SwiperComponent }   from './swiper.component';

@NgModule({
    imports: [ CommonModule ],
    exports: [ SwiperComponent ],
    declarations: [ SwiperComponent ]
})
export class SwiperModule { }