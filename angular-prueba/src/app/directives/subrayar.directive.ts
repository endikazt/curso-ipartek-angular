import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSubrayar]'
})
export class SubrayarDirective {

  @Input() subrayar : string;
  @Input() colorSeleccionado : string;

  constructor(private element: ElementRef) {
    console.trace("SubrayarDirective constructor")
   } // constructor

   @HostListener('mouseenter')
    publiconMouseEnter(){
      console.trace("SubrayarDirective MouseEnter")
      this.element.nativeElement.style.textDecoration = "underline";

      if(this.subrayar != null) {

        this.element.nativeElement.style.textDecorationColor = this.subrayar;

      } else {

        this.element.nativeElement.style.textDecorationColor = this.colorSeleccionado;

      }
 
    }
 
    @HostListener('mouseleave')
    publiconMouseLeave(){
      console.trace("SubrayarDirective MouseLeave")
      this.element.nativeElement.style.textDecoration = "none";
    }


}
