import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl: string = 'https://dummyjson.com/products'
  constructor(private http: HttpClient) { }

  getProducts()  {
    return this.http.get<{products: Product[]}>(this.apiUrl).pipe(map(ris => ris.products));
  }
}
