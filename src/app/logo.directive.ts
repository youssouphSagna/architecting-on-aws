import { Directive, ElementRef, Renderer2, AfterViewInit } from "@angular/core";
import { Category } from "./category.enum";

@Directive({ 
  selector: "[appLogo]"
})
export class LogoDirective implements AfterViewInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const category = this.elRef.nativeElement.textContent;
    const img = this.renderer.createElement("img");
    this.renderer.setAttribute(img, "src", this.switchLogo(category));
    this.renderer.setStyle(img, "margin-left", "10px");
    this.renderer.appendChild(this.elRef.nativeElement, img);
  }

  private switchLogo(category: Category) {
    // TODO: Logo
    return "";
  }
}
