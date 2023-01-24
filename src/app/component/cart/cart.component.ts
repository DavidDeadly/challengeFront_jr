import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductBuy } from 'src/app/models/Inventory';
import { CartService } from 'src/app/services/cart/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  productsBuy: Array<ProductBuy> = [];

  constructor(private cart: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cart.productsBuy.subscribe(res => (this.productsBuy = res));
  }

  goToFinishBuy() {
    if (!this.productsBuy.length) {
      Swal.fire({
        title: 'You cart is empty!!',
        text: 'Nothing to buy',
        icon: 'warning',
        background: '#1f2f55',
        color: 'white',
        showConfirmButton: false,
        timer: 2500,
        position: 'bottom-left',
      });
    } else this.router.navigateByUrl('/finish');
  }
}
