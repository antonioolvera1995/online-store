import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformationComponent } from './core/information/information.component';
import { ProductInformationComponent } from './core/product-information/product-information.component';
import { ProductsComponent } from './core/products/products.component';
import { SearchResultsComponent } from './core/search-results/search-results.component';

const routes: Routes = [
{path:'information',component:InformationComponent},
{path:'products',component:ProductsComponent},
{path:'product/:id',component:ProductInformationComponent},
{path:'search',component:SearchResultsComponent},

{path:'**',component:InformationComponent,  pathMatch: 'full'},
{path:'',component:InformationComponent,  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
