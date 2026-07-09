import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationScrollService {
  constructor(
    private readonly location: Location,
    private readonly router: Router
  ) {}

  /**
   * Vuelve en el historial para restaurar scroll.
   * Si no hay historial útil, navega al home con fragmento opcional.
   */
  backOrHome(fallbackFragment?: string): void {
    if (this.canGoBackInApp()) {
      this.location.back();
      return;
    }

    this.router.navigate(['/'], fallbackFragment ? { fragment: fallbackFragment } : undefined);
  }

  private canGoBackInApp(): boolean {
    if (typeof window === 'undefined') {
      return false;
    }

    const { navigationId } = window.history.state ?? {};
    return typeof navigationId === 'number' && navigationId > 1;
  }
}
