import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Product } from '../interfaces/product';
import { StarRatingComponent } from '../../star-rating/star-rating.component';
import { ProductsService } from '../services/products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, UpperCasePipe, StarRatingComponent, RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  showImage = true;
  @Input({required: true}) product!: Product;
  @Output() deleted = new EventEmitter<void>();
  selected = false;

  #productsService = inject(ProductsService);

  deleteProduct() {
    this.#productsService.deleteProduct(this.product.id!).subscribe({
      next: () => this.deleted.emit(),
      error: () => console.error("Error deleting product!")
    })

  }

  changeRating(rating: number) {
    const oldRating = this.product.rating;
    this.product.rating = rating;
    this.#productsService
    .changeRating(this.product.id!, rating)
    .subscribe({
      error: () => this.product.rating = oldRating
    });
  }
}
