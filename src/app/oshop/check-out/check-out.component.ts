import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from '../../shopping-cart.service';
import {ShoppingCart}  from './models/shopping-cart';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  cart$: Observable<ShoppingCart>;
  
  constructor( private shoppingCartService: ShoppingCartService){}

  async ngOnInit(){
    this.cart$ = await this.shoppingCartService.getCart();
  }
}

// $key : this is use when you read notes from firebase 
// key : this is use for store something in firebase