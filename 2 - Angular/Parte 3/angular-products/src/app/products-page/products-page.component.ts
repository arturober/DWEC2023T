import { CurrencyPipe, DatePipe, JsonPipe, NgClass } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../interfaces/product';
import { ProductFilterPipe } from '../pipes/product-filter.pipe';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'products-page',
  standalone: true,
  imports: [
    NgClass,
    JsonPipe,
    ProductItemComponent,
    FormsModule,
    CurrencyPipe,
    DatePipe,
    ProductFilterPipe,
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
})
export class ProductsPageComponent implements OnInit {
  title = 'Mi lista de productos';
  showImage = true;
  search = '';

  products: Product[] = [];

  #productsService = inject(ProductsService);

  ngOnInit(): void {
    this.#productsService.getProducts().subscribe(
      products => this.products = products
    );
  }

  addProduct(product: Product) {
    this.#productsService.addProduct(product).subscribe({
      next: product => this.products = [...this.products, product],
      error: () => console.error('Error añadiendo el producto!')
    });
  }

  deleteProduct(product: Product) {
    this.products = this.products.filter((p) => p !== product);
  }
}
