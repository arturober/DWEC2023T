import { CurrencyPipe, DatePipe, JsonPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../interfaces/product';
import { ProductFilterPipe } from '../pipes/product-filter.pipe';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'products-page',
  standalone: true,
  imports: [NgClass, JsonPipe, ProductItemComponent, FormsModule, CurrencyPipe, DatePipe, ProductFilterPipe],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
})
export class ProductsPageComponent {
  title = 'Mi lista de productos';
  showImage = true;
  fileName = '';
  search = '';

  newProduct!: Product;

  constructor() {
    this.resetForm();
  }

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

  changeImage(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (!fileInput.files?.length) return;
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', () => {
      this.newProduct.imageUrl = reader.result as string;
    });
  }

  addProduct() {
    this.newProduct.id = Math.max(...this.products.map((p) => p.id!)) + 1;
    this.products = [...this.products, this.newProduct];
    this.resetForm();
  }

  resetForm() {
    this.newProduct = {
      description: '',
      price: 0,
      available: '',
      imageUrl: '',
      rating: 1,
    };
    this.fileName = '';
  }

  deleteProduct(product: Product) {
    this.products = this.products.filter(p => p !== product);
  }
}
