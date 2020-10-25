import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { ProducstlistingService, Products } from 'src/app/shared/services/producstlisting.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  products:Products[];
  productsSearch:Products[] = [];
  textSearch:string = '';
  constructor(products:ProducstlistingService , private router:Router) {
    this.textSearch = products.textSearch;
    this.products = products.getProducts();;
   }

  ngOnInit(): void {

    for (let i = 0; i < this.products.length; i++) {
      const element = this.products[i];
      if ((element.name.toLocaleLowerCase()).search(this.textSearch.toLocaleLowerCase()) >-1) {
        this.productsSearch.push(element);
      }
      
    }


  }

  goToProduct(id: string) {
    this.router.navigate(['/product', id]);
  }


  addProducts(produ: string) {
    let block: boolean = false;

    for (let i = 0; i < this.products.length; i++) {
      const element = this.products[i];
      if (element.name.toLocaleLowerCase() === produ.toLocaleLowerCase()) {
        block = true;
        this.products[i].quantity = element.quantity + 1;
      }
    }

  }

}
