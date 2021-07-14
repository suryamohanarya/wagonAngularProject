import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowProductComponent } from './show-product/show-product.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/addProduct',
		pathMatch: 'full'
	},
	{
		path: 'addProduct',
		component: AddProductComponent,
		data: { title: 'Add Product'}
	},
	{
		path: 'showProduct',
		component: ShowProductComponent,
		data: { title: 'Show Product List'}
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
