import {
  Directive,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type RevealVariant = 'up' | 'fade' | 'scale' | 'left' | 'right';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;
  @Input() revealVariant: RevealVariant = 'up';
  @Input() revealRootMargin = '0px 0px -8% 0px';
  @Input() revealThreshold = 0.12;

  private observer?: IntersectionObserver;
  private revealed = false;

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private readonly platformId: object
  ) {}

  ngOnInit(): void {
    const element = this.el.nativeElement;
    element.classList.add('reveal', `reveal-${this.revealVariant}`);

    if (this.revealDelay > 0) {
      element.style.setProperty('--reveal-delay', `${this.revealDelay}ms`);
    }

    if (!isPlatformBrowser(this.platformId)) {
      element.classList.add('reveal-visible');
      return;
    }

    if (this.prefersReducedMotion()) {
      element.classList.add('reveal-visible');
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      element.classList.add('reveal-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.revealed) {
            this.revealed = true;
            element.classList.add('reveal-visible');
            this.observer?.disconnect();
            this.observer = undefined;
          }
        });
      },
      {
        root: null,
        rootMargin: this.revealRootMargin,
        threshold: this.revealThreshold
      }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
