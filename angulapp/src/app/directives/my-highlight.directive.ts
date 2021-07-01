import { Directive, ElementRef, Input, HostListener } from "@angular/core";

@Directive({
  selector: '[apphighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('red');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('yellow')
  }

  private highlight(color: String){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
