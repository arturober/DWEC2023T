import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { NgClass } from '@angular/common';

@Component({
  selector: 'products-page',
  standalone: true,
  imports: [NgClass],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
})
export class ProductsPageComponent {
  title = 'Mi lista de productos';
  showImage = true;

  products: Product[] = [
    {
      id: 1,
      description: 'Pollo de goma gritón',
      available: '2016-10-03',
      price: 75,
      imageUrl: 'assets/chicken.jpg',
      rating: 5,
    },
    {
      id: 2,
      description: 'Mano auxiliar',
      available: '2016-09-15',
      price: 96.95,
      imageUrl: 'assets/hand.jpg',
      rating: 4,
    },
  ];
}
