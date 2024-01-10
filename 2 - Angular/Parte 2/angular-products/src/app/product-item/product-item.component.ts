import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'tr[product-item]',
  standalone: true,
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  showImage = true;
  product = {
    id: 1,
    description: 'Pollo de goma gritón',
    available: '2016-10-03',
    price: 75,
    imageUrl: 'assets/chicken.jpg',
    rating: 5,
  };

  deleteProduct() {

  }
}
