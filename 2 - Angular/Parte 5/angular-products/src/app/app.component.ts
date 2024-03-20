import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductsPageComponent } from './products/products-page/products-page.component';
import { trigger, transition, style, group, animate, query } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ProductsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('routeAnimation', [
      transition('productsPage => productDetail', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' })),
        query(':enter', style({ transform: 'translateX(100%)' })),
        group([
          query(':leave', [
            animate('0.5s', style({ transform: 'translateX(-100%)',  opacity: 0 })),
          ]),
          query(':enter', [animate('0.5s', style({ transform: 'none' }))]),
        ]),
      ]),
      transition('productDetail => productsPage', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' })),
        query(':enter', style({ transform: 'translateX(-100%)' })),
        group([
          query(':leave', [
            animate('0.5s', style({ transform: 'translateX(100%)', opacity: 0 })),
          ]),
          query(':enter', [animate('0.5s', style({ transform: 'none' }))]),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'Angular products';
  getState(routerOutlet: RouterOutlet) {
    return routerOutlet.activatedRouteData['animation'] || 'None';
  }
}
