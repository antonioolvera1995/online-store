import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProducstlistingService {

  products: object[] = [
    { name: 'Legia', precio: 1.21, weight:1, tipe:'liquido'},
    { name: 'Manzana', precio: 0.46, weight:0.200, tipe:'solido' },
    { name: 'Pera', precio: 0.43, weight:0.150, tipe:'solido' },
    { name: 'Melon', precio: 1.45, weight:1.300, tipe:'solido' },

    { name: 'Galletas', precio: 1.43, weight:0.350, tipe:'solido' },
    { name: 'Pepsi', precio: 1.50, weight:2.00, tipe:'liquido' },
    { name: 'Cerveza', precio: 0.33, weight:0.250, tipe:'liquido' },
    { name: 'Café', precio: 3, weight:0.150, tipe:'solido' },

    { name: 'Legia', precio: 1.21, weight:1, tipe:'liquido'},
    { name: 'Manzana', precio: 0.46, weight:0.200, tipe:'solido' },
    { name: 'Pera', precio: 0.43, weight:0.150, tipe:'solido' },
    { name: 'Melon', precio: 1.45, weight:1.300, tipe:'solido' }
  ];

  actuallyProduct:object;
  
  constructor() {}



  getProducts():object{

    return this.products;
  }

  getProductActually():object{

    return this.actuallyProduct;
  }

  setProductActually(id:number):void{
    this.actuallyProduct = this.products[id];

  }

}
