import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  inject,
} from '@angular/core';

@Directive({
  selector: '[setColor]',
  standalone: true,
})
export class SetColorDirective {
  @Input({alias: "setColor"})
  set color(color: string) {
    this.bgColor = color || "yellow";
  }
  @HostBinding('style.backgroundColor') bgColor!: string;
  @HostBinding('style.color') textColor?: string;

  @HostListener('click')
  onClick() {
    this.textColor = this.textColor !== "white" ? "white" : "black";
  }
}
