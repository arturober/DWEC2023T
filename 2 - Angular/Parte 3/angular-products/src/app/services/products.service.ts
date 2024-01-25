import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../interfaces/product';
import {
  ProductsResponse,
  SingleProductResponse,
} from '../interfaces/responses';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  #http = inject(HttpClient);
  #productsUrl = 'products';

  // Con promesas
  // async getProducts(): Promise<Product[]> {
  //   const resp =  await firstValueFrom(this.#http.get<ProductsResponse>('https://api.fullstackpro.es/products-example'));
  //   return resp.products;
  // }

  getProducts(): Observable<Product[]> {
    return this.#http
      .get<ProductsResponse>(this.#productsUrl)
      .pipe(map((res) => res.products));
  }

  addProduct(product: Product): Observable<Product> {
    return this.#http
      .post<SingleProductResponse>(this.#productsUrl, product)
      .pipe(map(resp => resp.product));
  }

  deleteProduct(id: number): Observable<void> {
    return this.#http.delete<void>(`${this.#productsUrl}/${id}`);
  }

  changeRating(idProduct: number, rating: number): Observable<void> {
    return this.#http.put<void>(`${this.#productsUrl}/${idProduct}/rating`, {
      rating: rating,
    });
  }
}
