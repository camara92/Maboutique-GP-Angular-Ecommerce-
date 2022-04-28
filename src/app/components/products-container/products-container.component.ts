import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/products';
import { ResultRequest } from 'src/app/models/result-request';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent implements OnInit, OnDestroy {


  categories: ResultRequest<Category> | undefined
  //  categories : Category[] | undefined
  productSub: Subscription | undefined
  products: Product | undefined
  categoriesSub: Subscription | undefined
  constructor(private categoriesService: CategoriesService,
    private productService: ProductService) { }

  ngOnInit(): void {
    //recuperer l'observable
    this.categoriesSub = this.categoriesService.getCategories()
      .subscribe({
        next: (value: ResultRequest<Category>) => {

          this.categories = value;
          console.log(value);

        }
      })

  }

  //click pour afficher les categories de produits
  handleClick(event: any, category: Category) {
    //enlever le comportement par défaut de l'evenement ou annuler

    event.preventDefault();
    this.productSub = this.productService.getProducts()
      //ecoueteur
      .subscribe({
        next: (resultData: ResultRequest<Product>) => {
          //vérifie si la requête est passée afin de les afficher
          if (resultData.isSuccess) {
            let products = resultData.results
         products = products.filter((product: Product) => {

              //deux manière si oui on affiche
              //faire une boucle pour parcourir les objects dans products

              for (let index = 0; index < product.categories.length; index++) {
                //const element = product.categories[index].slug;
                if (product.categories[index].slug === category.slug) {
                  return true

                }
                //comparer le slug de boucle avec ceux du paramètre


              } return false
            })
            //console pour voir si les catégories de produits s'affichenet
            console.log(products);

          }

        }
      })


    console.log(category);
    //

  }

  ngOnDestroy(): void {
    this.categoriesSub?.unsubscribe()
    this.productSub?.unsubscribe()
  }

}
