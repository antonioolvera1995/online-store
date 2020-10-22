import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})


export class ProducstlistingService {
  products: Products[] = [
    { name: 'Legia', precio: 1.21, weight: 1, tipe: 'liquido' },
    { name: 'Manzana', precio: 0.46, weight: 0.2, tipe: 'solido' },
    { name: 'Pera', precio: 0.43, weight: 0.15, tipe: 'solido' },
    { name: 'Melon', precio: 1.45, weight: 1.3, tipe: 'solido' },

    { name: 'Galletas', precio: 1.43, weight: 0.35, tipe: 'solido' },
    { name: 'Pepsi', precio: 1.5, weight: 2.0, tipe: 'liquido' },
    { name: 'Cerveza', precio: 0.33, weight: 0.25, tipe: 'liquido' },
    { name: 'Café', precio: 3, weight: 0.15, tipe: 'solido' },

    { name: 'Legia', precio: 1.21, weight: 1, tipe: 'liquido' },
    { name: 'Manzana', precio: 0.46, weight: 0.2, tipe: 'solido' },
    { name: 'Pera', precio: 0.43, weight: 0.15, tipe: 'solido' },
    { name: 'Melon', precio: 1.45, weight: 1.3, tipe: 'solido' },
  ];

  actuallyProduct: Products;

  constructor() {}

  getProducts(): Products[] {
    return this.products;
  }

  getProductActually(): Products {
    return this.actuallyProduct;
  }

  setProductActually(id: number): void {
    this.actuallyProduct = this.products[id];
  }
}

export interface Products {
  name: string;
  precio: number;
  weight: number;
  tipe: string;
}