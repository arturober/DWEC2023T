import { Routes } from '@angular/router';
import { leavePageGuard } from '../guards/leave-page.guard';
import { numericIdGuard } from '../guards/numeric-id.guard';
import { productResolver } from './resolvers/product.resolver';

export const productRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./products-page/products-page.component').then(
        (m) => m.ProductsPageComponent
      ),
    title: 'Product list | Angular Products',
    data: { animation: 'productsPage' }
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./product-form/product-form.component').then(
        (m) => m.ProductFormComponent
      ),
    title: 'Add product | Angular Products',
    canDeactivate: [leavePageGuard],
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./product-detail/product-detail.component').then(
        (m) => m.ProductDetailComponent
      ),
    title: 'Product detail | Angular Products',
    canActivate: [numericIdGuard],
    resolve: {
      product: productResolver,
    },
    data: { animation: 'productDetail' }
  },
];
