import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ModalProductViewComponent } from './components/modal-product-view/modal-product-view.component';
import {HttpClientModule} from '@angular/common/http';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';
import { PaiementCardComponent } from './components/paiement-card/paiement-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductDescriptionComponent } from './components/product-tabs/product-description/product-description.component';
import { ProductAdditionnalInfoComponent } from './components/product-tabs/product-additionnal-info/product-additionnal-info.component';
import { ProductVendorComponent } from './components/product-tabs/product-vendor/product-vendor.component';
import { ProductReviewsComponent } from './components/product-tabs/product-reviews/product-reviews.component';
import { AsideNavComponent } from './components/aside-nav/aside-nav.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
import { PageTitleComponent } from './components/page-title/page-title.component';

//mport forms modules

//impportation du module http
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    ProductComponent,
    ProductListComponent,
    ProductItemComponent,
    ModalProductViewComponent,
    SigninComponent,
    SignupComponent,
    LoadingComponent,
    PaiementCardComponent,
    ProductDetailsComponent,
    ProductDescriptionComponent,
    ProductAdditionnalInfoComponent,
    ProductVendorComponent,
    ProductReviewsComponent,
    AsideNavComponent,
    HomeSliderComponent,
    ProductsContainerComponent,
    PageTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
