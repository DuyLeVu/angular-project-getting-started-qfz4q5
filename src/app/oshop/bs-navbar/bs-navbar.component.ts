import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../app.user';
import {ShoppingCartService} from '../../shopping-cart.service';
import {ShoppingCart}  from './models/shopping-cart';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(private auth: AuthService, 
  private shoppingCartService: ShoppingCartService) { }

  async ngOnInit(){
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);

    // use method to calculating the total number of items from shopping-cart.ts
    this.cart$ = await this.shoppingCartService.getCart();
  }

  logout(){
    this.auth.logout();
  }
}