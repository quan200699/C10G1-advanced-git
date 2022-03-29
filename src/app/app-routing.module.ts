import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListProductComponent} from './product/list-product/list-product.component';
import {CreateProductComponent} from './product/create-product/create-product.component';
import {EditProductComponent} from './product/edit-product/edit-product.component';


const routes: Routes = [
  {
    path: 'products',
    component: ListProductComponent
  },
  {
    path: 'products/create',
    component: CreateProductComponent
  },
  {
    path: 'products/edit/:id',
    component: EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
