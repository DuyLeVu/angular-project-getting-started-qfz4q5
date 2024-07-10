import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductQuantityComponent } from '../oshop/product-quantity/product-quantity.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent
  ], 
  providers: [

  ]
})
export class SharedModule { }