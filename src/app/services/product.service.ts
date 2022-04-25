import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { Product } from '../models/products';
import { environment } from 'src/environments/environment';

//on peut injecter des elents extérieurs par ce service
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //il sera privé et utlisable qu'à ce service
  private products: Product[] = []

  //declaration de l'api ou récupration des information au niveau du fichier json crée dans api
  //on utlise cette méthode pour ne pas à faire tout mais on met à jour lurl au niveau de environnement

 private urlAPI:string= "http://localhost:4200/assets/api/productsAll.json"

 // private urlAPI:string= environment.serverUrl
  //private urlAPI:string= "http://localhost:4200/assets/api/products.json"


  constructor(private http:HttpClient) {
    //c'est une injection des dependdances et http est une varible de stockage

  }

  //créer des méthodes qui sont des fonctions permettant de faire des
  //un service est une classe typescript afin de l'utiliser ailleurs
  //promise en javascript est un jargon connu

  /*getProducts(): Promise<Product[]> {
    //return this.products

    return new Promise((resolve, reject) => {
      if (this.products.length) {
        resolve(this.products)
      } else {
        //on retourne un tabl vide ou un message d'érror

        reject([])
      }
    })
  }*/
  getProducts():Observable<Product[]>{

    /*
    get: recuper sur le serveur
    patch ou put : modification
    delete
    post : envoie
     this.http.get<Product[]>(this.urlAPI)=> nous retourne un observable
    * */
    return this.http.get<Product[]>(this.urlAPI)

  }
  getNumber(): Observable<Number> {
    //programmation reactive avec RxJs
    //une sorte de librairie de js installé dans angular
    return of(405)
    //pour utiliser cette donnée on peut directemetn aller sur la template concernée et l'appeler
    //la méthode of donne un résulat
    //interval va faire des incrémentations

  }
  getSecond(): Observable<Number> {
    //on return la donnée au bout de la période interval(ici 1000ms)
    //return interval(1000)
    return interval(1000)
    1
    2
    3

  }

  addProduct(product: Product) {

  }
  editProduct(_idproduct: string, product: Product) {

  }
  deleteProduct(_idproduct: string) {

  }
}
