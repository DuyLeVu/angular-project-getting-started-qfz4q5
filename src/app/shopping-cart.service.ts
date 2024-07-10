import { Injectable } from '@angular/core';
import { AngularFireDatabase  } from '@angular/fire/database';
// import { FirebaseObjectObservable  } from '@angular/fire/database';
import {Product}  from './models/product';
import {ShoppingCart}  from '../app/models/shopping-cart';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }
  // these are public API of this shopping cart
  async getCart() {
  // async getCart(): Promise<Observable<ShoppingCart>> {

    let cartId = await this.getOrCreateCartId();
    // return this.db.object('/shopping-carts/' + cartId)
    // .map(x => new ShoppingCart(x.items));
  }

  async addToCart(product: Product) {
    this.updateItem(product, 1);
  }

  async removeFromCart(product: Product) {
    this.updateItem(product, -1);
  }

  async clearCart() {
    let cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }

  // these have private are implementation detail that can come and go 
  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  // this for getting reference for shopping cart
  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async getOrCreateCartId(): Promise<string>{
    let cartId = localStorage.getItem('cartId');
    // if you have card ID
    if(cartId) return cartId 

    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key; // Add product to cart
  
  }

  private async updateItem(product: Product, change: number) {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId, product.$key);
    // item$.take(1).subscribe(item => {
    //   let quantity = (item.quantity || 0) + change;
    //   if(quantity === 0) items$.remove();
    //   else item$.update({
    //     title: product.title,
    //     imageUrl: product.imageUrl,
    //     price: product.price, 
    //     quantity: quantity
    //   });
    // });
  }
}