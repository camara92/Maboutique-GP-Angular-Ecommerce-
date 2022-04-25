import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  //transmission des deonnés par du parent à l'entfant product item
  //on met undefined car il se peut qu'il n'est pas défini
  //envoie de l'enfant ver parent
  //output
  //event emitter de angular core
  //eventemitter : permet de mettre des evenements : partout où on met productitemComponent

  @Input() product:Product | undefined
  @Output() deleteProductItem:EventEmitter<Product> = new EventEmitter<Product>()
  @Output() displayProductViewModal:EventEmitter<Product> = new EventEmitter<Product>()

  constructor() { }

  ngOnInit(): void {
    console.log("--------------Product item ------------Daouda -");
    //console.log(this.product)
  }

  //handleClickProduct
  //on met undefined car dans product-itemhtml product n'est pas définie
  handleClickProduct(product: Product | undefined){
    //afficher
    //console.log(product);
    //on essaie de mettre l'evenement view modal
    this.displayProductViewModal.emit(product)
  }
  //fonction pour affacer un element
  //
 deleteProduct(product: Product | undefined){
    //afficher
    //pour pouvoir effacé un élément fils il faut en infomer son parent (product-list)

    //console.log(product);
    //notez ien que cette supprimer n'affectra pas la donnée source

   // this.deleteProductItem.emit(product);

  }
  


}
