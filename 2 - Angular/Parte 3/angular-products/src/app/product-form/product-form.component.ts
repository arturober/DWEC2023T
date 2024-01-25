import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../interfaces/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  fileName = '';
  newProduct!: Product;

  @Output() add = new EventEmitter<Product>();

  constructor() {
    this.resetForm();
  }

  addProduct() {
    this.add.emit(this.newProduct);
    this.resetForm();
  }

  changeImage(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (!fileInput.files?.length) return;
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', () => {
      this.newProduct.imageUrl = reader.result as string;
    });
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
}
