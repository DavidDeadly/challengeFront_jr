import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductBuy } from 'src/app/models/Inventory';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productsBuy = new BehaviorSubject<Array<ProductBuy>>([]);

  constructor() {}

  addToCart(product: ProductBuy) {
    const productsBuy = this.productsBuy.getValue();
    productsBuy.push(product);

    this.productsBuy.next(productsBuy);
  }

  removeFromCart(stringId: string) {
    const productsBuy = this.productsBuy.getValue();
    const newProductsBuy = productsBuy.filter(p => p.productId !== stringId);

    this.productsBuy.next(newProductsBuy);
  }

  clearCart() {
    this.productsBuy.next([]);
  }
}
