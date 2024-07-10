import { Injectable } from '@angular/core';
import{AngularFireDatabase} from '@angular/fire/database';
import {ShoppingCartService} from '../shopping-cart.service';

@Injectable()
export class OrderService {

  constructor(private db: AngularFireDatabase, private shoppingCartService: ShoppingCartService) { }

  async placeOrder(order){
    let result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrders() {
    return this.db.list('/orders');
  }
    
  getOrdersbyUser(userId: string){
    // return this.db.list('/orders', {
    //   query: {
    //     orderByChild: 'userId',
    //     equalTo: userId
    //   }
    // });
  }

}