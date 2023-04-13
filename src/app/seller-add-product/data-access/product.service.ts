import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../data-type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  addProduct(data: Product) {
    return this.httpClient.post('http://localhost:3000/products', data)
  }

  productList() {
    return this.httpClient.get<Product[]>('http://localhost:3000/products');
  }
}
