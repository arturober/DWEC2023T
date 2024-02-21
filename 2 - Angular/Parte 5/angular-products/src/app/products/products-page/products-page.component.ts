import { CurrencyPipe, DatePipe, JsonPipe, NgClass } from '@angular/common';
import {
  Component,
  Injector,
  OnInit,
  WritableSignal,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
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
  showImage = signal(true);
  search = signal('');

  products: WritableSignal<Product[]> = signal([]);

  filteredProducts = computed(() =>
    this.products().filter((p) =>
      p.description.toLowerCase().includes(this.search().toLowerCase())
    )
  );

  #productsService = inject(ProductsService);
  #injector = inject(Injector);

  constructor() {
    effect(() =>
      console.log(`Products filtered: ${this.filteredProducts().length}`)
    );
  }

  ngOnInit(): void {
    this.#productsService
      .getProducts()
      .subscribe((products) => this.products.set(products));
  }

  deleteProduct(product: Product) {
    this.products.update((p) => p.filter((p) => p !== product));
  }

  toggleImage() {
    // this.showImage.set(!this.showImage());
    this.showImage.update((v) => !v);
  }
}
