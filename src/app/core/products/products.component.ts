import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import { timeStamp } from 'console';
import {
  ProducstlistingService,
  Products,
} from 'src/app/shared/services/producstlisting.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Products[];

  constructor(
    private productService: ProducstlistingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getProducts();
    this.products = this.productService.getProducts();
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
