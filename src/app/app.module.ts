import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // this is for navigation bar dropdown list
import { CustomFormsModule } from 'ng2-validation';

import { environment } from './environments/environment'; // this is for firebaseConfig
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

//import { DataTableModule } from 'angular-2-data-table'; // import problem
//import { DataTableModule } from 'angular';
//import {DataTablesModule} from 'angular-datatables';
import { NzTableModule } from 'ng-zorro-antd/table';

import { LoginComponent } from './oshop/login/login.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OshopComponent } from './oshop/oshop.component';
import { BsNavbarComponent } from './oshop/bs-navbar/bs-navbar.component';
import { HomeComponent } from './oshop/home/home.component';
import { ProductsComponent } from './oshop/products/products.component';
import { ShoppingCartComponent } from './oshop/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './oshop/check-out/check-out.component';
import { OrderSuccessComponent } from './oshop/order-success/order-success.component';
import { MyOrdersComponent } from './oshop/my-orders/my-orders.component';

import { AdminProductsComponent } from './oshop/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './oshop/admin/admin-orders/admin-orders.component';

import { AuthService } from './oshop/auth.service';
import { AuthGuardService } from './oshop/auth-guard.service'; // to provider firebase with home page 
import { AdminAuthGuardService } from './oshop/admin-auth-guard.service';

import {APP_BASE_HREF} from '@angular/common';

import { UserService } from './oshop/user.service';
import { ProductFormComponent } from './oshop/admin/product-form/product-form.component';
import { CategoryService } from './oshop/category.service';
import { ProductService } from './oshop/product.service';
import { ProductFilterComponent } from './oshop/products/product-filter/product-filter.component';
//import { ProductCardComponent } from './product-card/product-card.component';
import {ShoppingCartService} from './shopping-cart.service';
//import { ProductQuantityComponent } from './oshop/product-quantity/product-quantity.component';
import { OrderService } from './oshop/order.service';
import { ShoppingCartSummaryComponent } from './oshop/shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './oshop/shipping-form/shipping-form.component';
import { MyOrderComponent } from './oshop/my-order/my-order.component';
import { SharedModule } from './shared/shared.module'; // import module

console.log('environment', environment.firebase)

@NgModule({
  imports: [
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),

    SharedModule, // import modules
    BrowserModule,
    CustomFormsModule,
    FormsModule,
    //DataTableModule, // import problem
    NzTableModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: ProductsComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'login', component: LoginComponent},

      {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
      {path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuardService]},
      {path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService]},
      
      {path: 'admin/products/new', 
      component: ProductFormComponent, 
      canActivate: [AuthGuardService, AdminAuthGuardService]},
      {path: 'admin/products/:id', 
      component: ProductFormComponent, 
      canActivate: [AuthGuardService, AdminAuthGuardService]},
      {path: 'admin/products', 
      component: AdminProductsComponent, 
      canActivate: [AuthGuardService, AdminAuthGuardService]},
      {path: 'admin/orders', 
      component: AdminOrdersComponent, 
      canActivate: [AuthGuardService, AdminAuthGuardService]},
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    OshopComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
 //   ProductCardComponent,
  //  ProductQuantityComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    MyOrderComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ 
    {provide: APP_BASE_HREF, useValue: '/'},
   // APP_BASE_HREF, 
    AuthService,
    AuthGuardService, 
    UserService, 
    AdminAuthGuardService, 
    CategoryService, 
    ProductService, 
    ShoppingCartService, 
    OrderService ] //{provide: APP_BASE_HREF, useValue: '/'}
})
export class AppModule {}
