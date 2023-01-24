import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import { mergeMap } from 'rxjs';
import { Buy, ProductBuy, ProductDB } from 'src/app/models/Inventory';
import { CartService } from 'src/app/services/cart/cart.service';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { StateService } from 'src/app/services/state/state.service';
import { environment } from 'src/environments/environment.development';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-finish-buy',
  templateUrl: './finish-buy.component.html',
  styleUrls: ['./finish-buy.component.scss'],
})
export class FinishBuyComponent implements OnInit {
  productsBuy: Array<ProductDB> = [];
  cartProducts: Array<ProductBuy> = [];
  client = this.formBuilder.group({
    clientName: ['', Validators.required],
    idType: ['', Validators.required],
    idClient: ['', Validators.required],
  });

  constructor(
    private requests: RequestsService,
    private cart: CartService,
    private state: StateService,
    private router: Router,
    private formBuilder: FormBuilder,
    public readonly swalTargets: SwalPortalTargets
  ) {}

  ngOnInit(): void {
    // this.requests.getAllProducts(environment.INVENTORY_ID).subscribe(res => {
    //   this.cartProducts = res.map(r => ({
    //     productId: r.id,
    //     quantity: 15,
    //   }));
    //   this.productsBuy = res;
    // });
    this.cart.productsBuy
      .pipe(
        mergeMap(res => {
          this.cartProducts = res;
          return this.state.products;
        })
      )
      .subscribe(res => {
        this.productsBuy = res.filter(prod =>
          this.cartProducts.map(p => p.productId).includes(prod.id)
        );
        if (!this.cartProducts.length) this.router.navigateByUrl('/');
      });
  }

  removeProductFromCart(productId: string) {
    this.cart.removeFromCart(productId);
  }

  clearCart() {
    this.cart.clearCart();
  }

  handelDismiss(_$event: Swal.DismissReason | undefined) {
    this.client.reset({
      clientName: '',
      idType: '',
      idClient: '',
    });
  }

  buyCartProducts() {
    const clientInfo = this.client.value;
    if (!clientInfo.clientName || !clientInfo.idType || !clientInfo.idClient)
      return;

    const newBuy: Buy = {
      inventoryID: environment.INVENTORY_ID,
      clientName: clientInfo!.clientName,
      idType: clientInfo!.idType,
      idClient: clientInfo!.idClient,
      productsBuy: this.cartProducts,
    };

    this.requests.buyProducts(newBuy).subscribe({
      next: _res => {
        this.clearCart();
        Swal.fire({
          title: `Successful purchase!`,
          icon: 'success',
          background: '#1f2f55',
          color: 'white',
          position: 'bottom-left',
          timer: 2500,
        });
      },
      error: () => {
        Swal.fire({
          title: `There was an error with the cart!!`,
          icon: 'error',
          background: '#1f2f55',
          color: 'white',
          position: 'bottom-left',
          timer: 2500,
        });
      },
    });
  }
}
