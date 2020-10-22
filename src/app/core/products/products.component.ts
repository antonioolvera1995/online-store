import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import { timeStamp } from 'console';
import { ProducstlistingService , Products  } from 'src/app/shared/services/producstlisting.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  products:Products[];

  constructor(
    private productService: ProducstlistingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getProducts();
    this.products = this.productService.getProducts();
  }

  goToProduct(id:string) {
    this.router.navigate(['/product', id]);
    
  }
}
