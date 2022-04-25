import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-product-additionnal-info',
  templateUrl: './product-additionnal-info.component.html',
  styleUrls: ['./product-additionnal-info.component.css']
})
export class ProductAdditionnalInfoComponent implements OnInit {

  product:Product |undefined
  constructor() { }

  ngOnInit(): void {
    //afficher les info
    console.log("ProductAdditionnalInfoComponent")
    console.log(this.product)
  }

}
