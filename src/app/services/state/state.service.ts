import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductDB } from 'src/app/models/Inventory';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  products = new BehaviorSubject<Array<ProductDB>>([]);
  buys = new BehaviorSubject([]);

  constructor() {}

  deleteProduct(productID: string) {
    const products = this.products.getValue();
    const newProducts = products.filter(product => product.id !== productID);

    this.products.next(newProducts);
  }

  addProduct(product: ProductDB) {
    const products = this.products.getValue();
    products.push(product);

    this.products.next(products);
  }
}
