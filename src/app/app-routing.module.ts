import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListProductComponent} from './product/list-product/list-product.component';
import {CreateProductComponent} from './product/create-product/create-product.component';


const routes: Routes = [
  {
    path: 'products',
    component: ListProductComponent
  },
  {
    path: 'products/create',
    component: CreateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
