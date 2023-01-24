import { Component, OnInit } from '@angular/core';
import { ProductBuy } from 'src/app/models/Inventory';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  productsBuy: Array<ProductBuy> = [];

  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.cart.productsBuy.subscribe(res => (this.productsBuy = res));
  }
}
