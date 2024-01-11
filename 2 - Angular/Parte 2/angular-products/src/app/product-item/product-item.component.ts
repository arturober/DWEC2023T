import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../interfaces/product';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, UpperCasePipe, StarRatingComponent],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  showImage = true;
  @Input({required: true}) product!: Product;
  @Output() deleted = new EventEmitter<void>();

  deleteProduct() {
    this.deleted.emit();
  }

  changeRating(rating: number) {
    this.product.rating = rating;
  }
}
