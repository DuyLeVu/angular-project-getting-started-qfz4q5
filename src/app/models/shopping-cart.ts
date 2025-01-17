import {ShoppingCartItem} from '../models/shopping-cart-item';
import {Product}  from '../models/product';

export class ShoppingCart {
  items: ShoppingCartItem[] = [];
  
  constructor(private itemsMap: {[productId: string]: ShoppingCartItem}){
    this.itemsMap = itemsMap || {};
    for(let productId in itemsMap){
      let item = itemsMap[productId];
      this.items.push(new ShoppingCartItem({ ...item, $key:productId }));
    } 
  }

  getQuantity(product: Product){
    let item = this.itemsMap[product.$key];
    return item ? item.quantity : 0;
  }

  get totalPrice() {
    let sum = 0;
    for(let productId in this.items) {
      sum += this.items[productId].totalPrice;
    }
    return sum;
  }

  //this is do calculating total number of items in firebase-database 
  get totalItemsCount(){  
    let count = 0;
      for(let productId in this.itemsMap) {
        count += this.itemsMap[productId].quantity
      };
    return count;
  }
}