import { Directive, ElementRef, HostListener, Renderer, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {

  @Input() brightness = '70%';

  constructor(
    private el: ElementRef,
    // tslint:disable-next-line: deprecation
    private render: Renderer
  ){}

  @HostListener('mouseover')
  darkenOn() {
    this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(70%)');
  }

  @HostListener('mouseleave')
  darkenOff() {
    this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }

}
