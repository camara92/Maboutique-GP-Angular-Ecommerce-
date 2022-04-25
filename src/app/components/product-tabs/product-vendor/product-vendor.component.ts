import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-product-vendor',
  templateUrl: './product-vendor.component.html',
  styleUrls: ['./product-vendor.component.css']
})
export class ProductVendorComponent implements OnInit {

  product:Product|undefined
  constructor() { }

  ngOnInit(): void {
    //afficher les info
    console.log("ProductVendorComponent")
    console.log(this.product)
  }

}
