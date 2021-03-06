import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { InformationComponent } from './core/information/information.component';
import { ProductsComponent } from './core/products/products.component';
import { ProductInformationComponent } from './core/product-information/product-information.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { SearchResultsComponent } from './core/search-results/search-results.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InformationComponent,
    ProductsComponent,
    ProductInformationComponent,
    ProductCardComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
