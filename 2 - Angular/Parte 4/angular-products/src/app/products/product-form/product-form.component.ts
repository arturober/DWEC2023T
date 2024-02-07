import { Component, EventEmitter, Output, ViewChild, inject } from '@angular/core';
import { Product } from '../interfaces/product';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from '../../interfaces/can-component-deactivate';
import { JsonPipe, NgClass } from '@angular/common';
import { MinDateDirective } from '../../validators/min-date.directive';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [FormsModule, JsonPipe, NgClass, MinDateDirective],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements  CanComponentDeactivate {
  newProduct!: Product;
  saved = false;

  @ViewChild('productForm') productForm!: NgForm;
  @Output() add = new EventEmitter<Product>();

  #productsService = inject(ProductsService);
  #router = inject(Router);

  constructor() {
    this.resetForm();
  }

  canDeactivate() {
    return this.saved || this.productForm.pristine || confirm("¿Estás seguro de salir sin guardar?");
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
    if (!fileInput.files?.length) {
      this.newProduct.imageUrl = '';
      return;
    }
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
  }
}
