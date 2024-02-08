import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/product';

export const productResolver: ResolveFn<Product> = (route) => {
  const router = inject(Router);
  return inject(ProductsService).getProduct(+route.params['id']).pipe(
    catchError(() => {
      router.navigate(['/products']);
      return EMPTY;
    })
  );
};
