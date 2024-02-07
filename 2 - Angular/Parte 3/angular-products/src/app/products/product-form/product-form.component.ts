import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Product } from '../interfaces/product';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from '../../interfaces/can-component-deactivate';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements  CanComponentDeactivate {
  fileName = '';
  newProduct!: Product;
  saved = false;

  @Output() add = new EventEmitter<Product>();

  #productsService = inject(ProductsService);
  #router = inject(Router);

  constructor() {
    this.resetForm();
  }

  canDeactivate() {
    return this.saved || confirm("¿Estás seguro de salir sin guardar?");
  }

  addProduct() {
    this.#productsService.addProduct(this.newProduct).subscribe({
      next: () => {
        this.saved = true;
        this.#router.navigate(['/products']);
      },
      error: () => console.error('Error añadiendo el producto!')
    });
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
