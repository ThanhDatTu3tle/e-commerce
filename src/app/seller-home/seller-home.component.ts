import {Component, OnInit} from '@angular/core';
import {ProductService} from "../seller-add-product/data-access/product.service";
import {Product} from "../data-type";

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent implements OnInit {

  productList: undefined | Product[]
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.productList().subscribe((result) => {
      console.log(result)
      this.productList = result;
    })
  }
}
