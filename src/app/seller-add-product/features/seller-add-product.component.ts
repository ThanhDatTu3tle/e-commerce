import { Component, OnInit } from '@angular/core';
import { ProductService } from "../data-access/product.service";
import {Product} from "../../data-type";

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.scss']
})
export class SellerAddProductComponent implements OnInit{

  addProductMessage: string | undefined;
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
  }

  submit(data: Product) {
    this.productService.addProduct(data).subscribe((result) => {
      console.log(result);
      if (result) {
        this.addProductMessage = "Product is successful added!"
      }
      setTimeout(() => this.addProductMessage = undefined, 2000)
    })
  }
}
