import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/products';
import { ResultRequest } from 'src/app/models/result-request';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

//créezr une variables contenant des produits
resultData: ResultRequest<Product> | undefined;
products: Product[]=[]
isDisplayModal: boolean=false;
ModalProduct:Product | undefined;
productsSub:Subscription|undefined;
isLoading:boolean=true;
  constructor(private productService:ProductService) {

  }

  ngOnInit(): void {
    //asigner les élements de ma varible products
    //j'ai enlèvé tous les objects qui se trouvaient dans le tableaux products
    //ci après on fait une opération d'injection des dépendances afin d'alimenter
    //on va alors récuperer les objects par cette dependance et à travers le service on peut recuperer dans getproducts ou mettre produts en public
    //l'intéret est que dès qu'on a des produits on peut faire des injections et
   // this.products = this.productService.getProducts()

   this.productsSub= this.productService.getProducts()
   .subscribe({
     next:(resultData:ResultRequest<Product>)=>{
//verifier si donnée
if(resultData.isSuccess){

  //sauvegarde des données :

  this.products = resultData.results

}


       this.isLoading=false

     },
     error:(error:any)=>{
       console.log('Error :', error)
       this.isLoading=true
     },
     complete:()=>{
console.log("Completé ou réussie")
     }

   })
 /* this.productsSub= this.productService.getProducts()
   .subscribe({
     next:(products:Product[])=>{
       this.products= products
       this.isLoading=false

     },
     error:(error:any)=>{
       console.log('Error :', error)
       this.isLoading=true
     },
     complete:()=>{
console.log("Completé ou réussie")
     }

   })
    //si tt se passe bine
   /* .then((produits:Product[])=>{
      this.products = produits
    })
    .catch(()=>{

      this.products=[]
    });*/

    //console.log(this.products)
    // this.products = []


  }
  ngOnDestroy(): void {
      this.productsSub?.unsubscribe
  }
  handleDeleteProduct(product:Product){
    //oncherche la liste de tous les produits et chercher le produit que l'on veut effacer ;;;;;;;;;;
    //cette condition va vérifier si le produit est défférent on récupère
    //avec les services il y a une synchronisations de données

    this.products=this.products.filter(p=> p._id!==product._id)
    console.log("Suppression : ", product);
  }
  handleDisplayProductViewModal(product: Product){
    //console.log(product);
   // console.log("Display");
   if(product){
   this.isDisplayModal=true;
   this.ModalProduct=product;
   }

  }
  ClickcloseModal(){
    this.isDisplayModal=false;
   this.ModalProduct=undefined
  }

}


