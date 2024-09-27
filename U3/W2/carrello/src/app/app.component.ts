import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from './models/product.interface';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  sub!: Subscription;
  products: Product[] | undefined;

  cart: Product[] = [];

  constructor(private productSrv: ProductsService) {}

  ngOnInit(): void {
    this.recoveryProducts();
  }

  recoveryProducts() {
    this.sub = this.productSrv.getProducts().subscribe((results: Product[]) => {
      this.products = results;
      console.log(this.products);
    });
  }

  add(product: Product) {
    this.cart.push(product);
  }
}
