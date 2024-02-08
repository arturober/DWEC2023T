import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'productFilter',
  standalone: true,
})
export class ProductFilterPipe implements PipeTransform {
  transform(products: Product[] | null, search: string): Product[] | null {
    if(!products) return null;
    return search ?
    products.filter((p) =>
      p.description.toLocaleLowerCase().includes(search.toLowerCase())
    ) :
    products;
  }
}
