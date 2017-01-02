import 'rxjs/add/operator/filter';

import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
    selector: '[lazyLoad]'
})
export class LazyLoadImageDirective {
    @Input() threshold: number = 300;
    @Input() fadeIn: boolean = true;
    @Input() fadeInDuration: number = 1000;
    @Input() imageSrc: string;

    public displayed : boolean = false;
    elementRef: ElementRef;
    renderer: Renderer
    constructor(
        el: ElementRef,
        renderer: Renderer
    ){
        this.elementRef = el;
        this.renderer = renderer;
    }

    ngOnInit(){
        this.displayImage();
    }

    displayImage() {
        const nativeElement = this.elementRef.nativeElement;
        const styles = nativeElement.className
            .split(' ')
            .filter(s => !!s);
        if( this.displayed ) return;

        this.renderer.setElementAttribute(nativeElement, 'src', this.imageSrc);

        nativeElement.onload = () => {
            this.displayed  = true;
            if(this.fadeIn)
            {
                this.animateFadeIn( nativeElement )
            }
            styles.filter(s => s === 'loading')
            styles.pop('loading');
            styles.filter(s => s !== 'loaded')
            styles.push('loaded');
            this.elementRef.nativeElement.className = styles.join(' ');
        }

    }

    animateFadeIn( element, time = +this.fadeInDuration ){
        const start = new Date().getTime(),
        timer = setInterval(function() {
            let step = Math.min(1,(new Date().getTime()-start)/time);
            element.style.opacity = step * 1;
            if( step == 1) clearInterval(timer);
        },25);
        element.style.opacity = 0;
    }
}