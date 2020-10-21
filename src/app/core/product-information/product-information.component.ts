import { Component, OnInit } from '@angular/core';

import {ProducstlistingService  } from "src/app/shared/services/producstlisting.service";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css']
})
export class ProductInformationComponent implements OnInit {

  ruta:number;
  products;
  product;
 
  constructor( rut: ActivatedRoute, private productsService:ProducstlistingService) {
      rut.params.subscribe((params) => {
        this.ruta = Number(params['id']);
    });

    this.products =  productsService.getProducts();
  }

  ngOnInit(): void {
    this.productsService.setProductActually(Number(this.ruta));
    this.product = this.productsService.getProductActually();
  }

}
