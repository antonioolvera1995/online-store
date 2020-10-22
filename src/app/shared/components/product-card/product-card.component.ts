import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() nombre:string = '';
  @Input() quantit:string = '';
  @Output() nombreSalida = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }


  addProducts(produ:string){
    this.nombreSalida.emit(produ);

  }

}
