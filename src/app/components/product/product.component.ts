import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/products';
import { ResultRequest } from 'src/app/models/result-request';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit , OnDestroy {
slug: string | undefined
product: Product | undefined
//varible resultdata
resultData:ResultRequest<Product> | undefined
currentImage: string | undefined
productSub: Subscription | undefined
//variable loading : l'evenement affiche au cours de chargement des données et disparait après
isLoading:boolean=true;

  constructor(private route:ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    //pour voir entièrement
    window.scrollTo(0,0)
this.slug = this.route.snapshot.params["slug"]
this.productSub = this.productService.getProducts()
.subscribe(
  {
    next: (resultData:ResultRequest<Product> ) =>{

      if(resultData.isSuccess){

//on vérifie à cette étape si la condition est ok
// puis chargement des données via la template html


        this.product = resultData.results.filter(p => p.slug === this.slug)[0]
        //currentImage prend la 1ere image et au cick il y a l'evenement
        this.currentImage = this.product.imageUrl[0]
        console.log(this.product);
      }
 this.isLoading =false;
    },
    error:(error:any)=>{
console.log("erreur : ", error)
this.isLoading=true;
    },
    complete: ()=>{
      console.log("réussie.. Daouda")
    }
  }
)

    console.log(this.route);
  }
  ngOnDestroy(){
    this.productSub?.unsubscribe()
  }

  handleChangeCurrentImage(url: string ){
    //pour changer au click des images
    this.currentImage =url
  }
}
