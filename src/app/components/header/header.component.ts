import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ProductService } from 'src/app/services/product.service';
import { auth_items, nav_items } from 'src/assets/api/nav.';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  data: Number | undefined;
  seconde: Number | undefined;
  secondeSub: Subscription | undefined;
  siteName:string= environment.siteName
  navs_data: Item[]= nav_items
  auths_data: Item[]= auth_items
  //pour l'affichage de burger navs
  isDisplayMobileNav:boolean= false;
/**
 *  navs_data: Object[]= nav_items
  auths_data: Object[]= auth_items
*/
  constructor(private productService: ProductService) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    /* this.productService.getNumber()
     //on s'abonne pour écouter l'element
     .subscribe(
       (value)=>{
         this.data=value;
       }
     )*/



    /* (value)=>{
      this.seconde=value
    }*/

    //créer une variable pour sauvegarer -secondeSub
    console.log(this.navs_data)
    console.log(this.auths_data)



    this.secondeSub = this.productService.getSecond()
      .subscribe({
        next: (value: Number) => {
          this.seconde = value
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {
          console.log("complete Daouda");
        }
      }

      )
  }
  ngOndestroy(): void {
    this.secondeSub?.unsubscribe();
  }
  handleDisplayMobileNav(){
    this.isDisplayMobileNav= !this.isDisplayMobileNav
    console.log(this.isDisplayMobileNav)
  }
  //fonction du close modale de la mobile nav
  handlecloseMobileNav(){
    this.isDisplayMobileNav= false;
  }

}
