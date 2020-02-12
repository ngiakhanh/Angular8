import { Directive, Input, ElementRef, Renderer2, OnInit, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @Input('appDropdown') position = 0;
  addingClass = 'show';
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

  }

  @HostListener('document:click', ['$event']) mouseClick(eventData: Event) {
    const childElement = this.elRef.nativeElement.children[this.position];
    if (!this.elRef.nativeElement.contains(eventData.target) && !childElement.contains(eventData.target)) {
      this.toggleClass(childElement, false);
    } else {
      this.toggleClass(childElement, true);
    }
  }

  toggleClass(element: HTMLElement, toggle: boolean) {
    if (toggle && !element.classList.contains(this.addingClass)) {
      this.renderer.addClass(element, this.addingClass);
    } else {
      this.renderer.removeClass(element, this.addingClass);
    }
  }
}
