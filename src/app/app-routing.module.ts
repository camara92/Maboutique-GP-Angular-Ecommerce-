import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ContainerComponent } from './components/container/container.component';
import { ProductAdditionnalInfoComponent } from './components/product-tabs/product-additionnal-info/product-additionnal-info.component';
import { ProductDescriptionComponent } from './components/product-tabs/product-description/product-description.component';
import { ProductReviewsComponent } from './components/product-tabs/product-reviews/product-reviews.component';
import { ProductVendorComponent } from './components/product-tabs/product-vendor/product-vendor.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
//creation des routes
//au cas où on a initié les imports, on peu ne pas importer car appmdoule l'a dejà fait lors de la création du projet


export const routes: Routes = [
  {
    path: "", component: ContainerComponent,
    pathMatch: "full"
  },
  { path: "product/:slug", component: ProductComponent,

//pathMatch: "full",
children:[
  {
    path: "",
    redirectTo: "description",
    pathMatch: "prefix"
  },
  {
    path: "description", component:ProductDescriptionComponent
  },
  {
    path: "additionnal-info", component:ProductAdditionnalInfoComponent
  },
  {
    path: "vendor-info", component: ProductVendorComponent
  },
  {
    path: "reviews", component:ProductReviewsComponent
  }

]


},
  {
    path: 'product/:_id', component: ProductComponent,
    pathMatch: "full"
  },

  {
    path: "products", component: ProductsContainerComponent,
    pathMatch: "full"
  },
  {
    path: "signin", component: SigninComponent,
    pathMatch: "full"
  },
  {
    path: "signup", component: SignupComponent,
    pathMatch: "full"
  }

];
//les routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
