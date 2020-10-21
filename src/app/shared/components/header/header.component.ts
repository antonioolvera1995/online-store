import { Component, OnInit } from '@angular/core';

import {ProducstlistingService  } from "src/app/shared/services/producstlisting.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  acti: boolean = false;

  producto;
  constructor(private product:ProducstlistingService) {}

  ngOnInit(): void {this.activ();}

  activ() {
    setInterval(() => {
      let url: string = window.location.href;
      const regex = /^[0-9]*$/;
      if (regex.test(url.substring(url.length - 1))) {
        this.acti = true;
        this.producto = this.product.getProductActually();

      } else {
        this.acti = false;
      }

    }, 100);
  }

}
