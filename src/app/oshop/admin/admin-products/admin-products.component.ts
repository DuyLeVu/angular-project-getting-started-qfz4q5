import { Component, OnInit, OnDestroy } from '@angular/core';
import {ProductService} from '../../product.service';
import {Subscription} from 'rxjs/Subscription';
import {Product}  from '../product';
import {DataTableResource} from 'angular-2-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[]; // save list of products will here and work as backup for products
  //filteredProducts: any[]; // this is array will be dispaly in the template
  subscription: Subscription;
  tableResource: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;

  constructor(private productService: ProductService) { 
    this.subscription = this.productService.getAll()
      .subscribe(products => {
        this.products = products;
        this.initializeTable(products);
      });
  }

  private initializeTable(products: Product[]) {
    // this is about initialising our data table
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({offset: 0})
      .then(items => this.items = items);
    this.tableResource.count()
      .then(count => this.itemCount = count);
  }

  reloadItems(params) {
    if(!this.tableResource) return;

    this.tableResource.query(params)
      .then(items => this.items = items);
  }

  filter(query: string){
    let filteredProducts = (query) ?
      this.products.filter(p => p.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())) : 
      this.products;

    this.initializeTable(filteredProducts);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}