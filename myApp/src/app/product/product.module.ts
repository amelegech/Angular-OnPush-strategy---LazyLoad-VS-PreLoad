import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import {RouterModule, Routes} from'@angular/router';
import { ProdDetailsComponent } from './prod-details.component';


const MyRoutes:Routes =[
  {path:"prods", component: ProductsComponent},
  {path:"prods/productDetails", component: ProdDetailsComponent},
]
@NgModule({
  declarations: [ProductsComponent, ProdDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MyRoutes)
  ],
   exports:[ProductsComponent, ProdDetailsComponent]
})
export class ProductModule { }
