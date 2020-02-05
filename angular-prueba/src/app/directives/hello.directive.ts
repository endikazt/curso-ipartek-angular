import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective {

  @Input() appHello : string;

  constructor(private element: ElementRef) {
    console.trace("HelloDirective constructor")

   } // constructor

   @HostListener('mouseenter')
    publiconMouseEnter(){
      console.trace("HelloDirective MouseEnter")
      this.element.nativeElement.style.backgroundColor = this.appHello;
 
    }
 
    @HostListener('mouseleave')
    publiconMouseLeave(){
      this.element.nativeElement.style.backgroundColor = "green";
   
    }

}
