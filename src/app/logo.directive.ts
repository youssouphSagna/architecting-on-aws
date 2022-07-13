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
    switch (category) { 
      case Category.JAVASCRIPT:
        return "https://c.staticblitz.com/assets/media/client/homepage/images/stack_icons/js-8608e5f34d31caa152040cb3b7555ffb.png";
      default: 
      return "https://www.ffe.com/var/ezwebin_site/storage/images/media/images/logo-et-visuels-divers/mails/lien-mail/404531-1-fre-FR/Lien-mail_imagelarge.png"
   
    }
  }
}
