import { Component, Input } from '@angular/core';
import { Product, ProductDB } from 'src/app/models/Inventory';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  @Input() products: Array<ProductDB> = [];

  constructor() {}
}
