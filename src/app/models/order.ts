import {ShoppingCart} from '../models/shopping-cart';

export class Order {
  datePlaced: number;
  items: any[];

  constructor(public userId: string, public shipping: any, shippingCart: ShoppingCart){
    this.datePlaced = new Date().getTime();

    this.items = ShoppingCart.items.map(i => {
      return {
        product: {
          title: i.title,
          imageUrl: i.imageUrl,
          price: i.price
        },
        quantity: i.quantity,
        totalPrice: i.totalPrice
      }
    })
  }
}