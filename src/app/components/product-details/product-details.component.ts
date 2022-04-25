import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
@Input() product:Product |undefined
  constructor() { }

  ngOnInit(): void {
  }
  handleChangeDetails(component:any){
    component.product =this.product
    //console.log({params:component, product:this.product})
    //verifier si les données ont été sauvegardées
    //console.log({params:component})

  }

}
