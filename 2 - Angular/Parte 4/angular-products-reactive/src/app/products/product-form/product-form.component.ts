import { Component, EventEmitter, Output, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from '../../interfaces/can-component-deactivate';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';
import { JsonPipe, NgClass } from '@angular/common';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, NgClass],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements  CanComponentDeactivate {
  @Output() add = new EventEmitter<Product>();

  #fb = inject(NonNullableFormBuilder);
  #productsService = inject(ProductsService);
  #router = inject(Router);

  imageBase64 = '';
  saved = false;

  description = this.#fb.control('', [Validators.required, Validators.minLength(5)]);
  productForm = this.#fb.group({
    description: this.description,
    price: [0, [Validators.required, Validators.min(0.1)]],
    available: ['', [Validators.required]],
    imageUrl: ['', [Validators.required]],
  });

  canDeactivate() {
    return this.saved || confirm("¿Estás seguro de salir sin guardar?");
  }

  addProduct() {
    const product: Product = {
      ...this.productForm.getRawValue(),
      rating: 1,
      imageUrl: this.imageBase64,
    };
    this.#productsService.addProduct(product).subscribe({
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
      this.imageBase64 = reader.result as string;
    });
  }

  resetForm() {
    this.productForm.reset();
  }
}
