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

  getProductByID(productID: string): [Array<ProductDB>, ProductDB | undefined] {
    const products = this.products.getValue();

    return [products, products.find(prod => prod.id === productID)];
  }

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

  updateProductName(productID: string, newName: string) {
    const [products, product] = this.getProductByID(productID);

    if (!product) return;

    product.name = newName;
    this.products.next(products);
  }

  updateProductInInventory(productID: string, newInventory: number) {
    const [products, product] = this.getProductByID(productID);

    if (!product) return;

    product.inInventory = newInventory;
    this.products.next(products);
  }

  updateProductMin(productID: string, newMin: number) {
    const [products, product] = this.getProductByID(productID);

    if (!product) return;

    product.min = newMin;
    this.products.next(products);
  }

  updateProductMax(productID: string, newMax: number) {
    const [products, product] = this.getProductByID(productID);

    if (!product) return;

    product.max = newMax;
    this.products.next(products);
  }
}
