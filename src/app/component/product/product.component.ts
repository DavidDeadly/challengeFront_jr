import { Component, Input } from '@angular/core';
import { ProductDB, ProductEdit } from 'src/app/models/Inventory';
import { CartService } from 'src/app/services/cart/cart.service';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { StateService } from 'src/app/services/state/state.service';
import { environment } from 'src/environments/environment.development';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product!: ProductDB;

  constructor(
    private state: StateService,
    private requests: RequestsService,
    private cart: CartService
  ) {}

  addProductToCart(productId: string) {
    Swal.fire({
      text: 'Quantity??',
      input: 'number',
      inputAttributes: {
        min: this.product.min.toString(),
        max: this.product.max.toString(),
      },
      icon: 'question',
      background: '#1f2f55',
      color: 'white',
      confirmButtonColor: '#3B82F5',
      confirmButtonText: 'Add cart!',
    }).then(res => {
      const quantity = res.value;
      if (res.isConfirmed && quantity) {
        this.cart.addToCart({
          productId,
          quantity,
        });
      }
    });
  }

  deleteProduct(productID: string): void {
    this.requests
      .deleteProduct(environment.INVENTORY_ID, productID)
      .subscribe(_res => {
        this.state.deleteProduct(productID);
        Swal.fire({
          text: `The product with the ID ${productID.substring(
            0,
            4
          )} was succesfully deleted`,
          icon: 'success',
          background: '#1f2f55',
          color: 'white',
          position: 'bottom-left',
          timer: 2500,
        });
      });
  }

  updateName(id: string, name: string) {
    const product: ProductEdit = {
      inventoryID: environment.INVENTORY_ID,
      productID: id,
      name,
    };

    name &&
      this.requests.updateProduct(product).subscribe({
        next: () => {
          this.state.updateProductName(id, name);
          Swal.fire({
            text: `The name N° ${id.substring(0, 4)} was succesfully updated!`,
            icon: 'success',
            background: '#1f2f55',
            color: 'white',
            position: 'bottom-left',
            timer: 2500,
          });
        },
        error: () => {
          Swal.fire({
            text: `Was not possible to update the name N° ${id.substring(
              0,
              4
            )}`,
            icon: 'error',
            background: '#1f2f55',
            color: 'white',
            position: 'bottom-left',
            timer: 2500,
          });
        },
      });
  }

  updateInInventory(id: string, inInventory: number) {
    const product: ProductEdit = {
      inventoryID: environment.INVENTORY_ID,
      productID: id,
      inInventory,
    };

    inInventory &&
      this.requests.updateProduct(product).subscribe({
        next: () => {
          this.state.updateProductInInventory(id, inInventory);
          Swal.fire({
            text: `The stock N° ${id.substring(0, 4)} was succesfully updated!`,
            icon: 'success',
            background: '#1f2f55',
            color: 'white',
            position: 'bottom-left',
            timer: 2500,
          });
        },
        error: () => {
          Swal.fire({
            text: `Was not possible to update the stock N° ${id.substring(
              0,
              4
            )}`,
            icon: 'error',
            background: '#1f2f55',
            color: 'white',
            position: 'bottom-left',
            timer: 2500,
          });
        },
      });
  }

  updateMin(id: string, min: number) {
    const product: ProductEdit = {
      inventoryID: environment.INVENTORY_ID,
      productID: id,
      min,
    };

    min &&
      this.requests.updateProduct(product).subscribe({
        next: () => {
          this.state.updateProductMin(id, min);
          Swal.fire({
            text: `The minimum N° ${id.substring(
              0,
              4
            )} was succesfully updated!`,
            icon: 'success',
            background: '#1f2f55',
            color: 'white',
            position: 'bottom-left',
            timer: 2500,
          });
        },
        error: () => {
          Swal.fire({
            text: `Was not possible to update the minimum N° ${id.substring(
              0,
              4
            )}`,
            icon: 'error',
            background: '#1f2f55',
            color: 'white',
            position: 'bottom-left',
            timer: 2500,
          });
        },
      });
  }

  updateMax(id: string, max: number) {
    const product: ProductEdit = {
      inventoryID: environment.INVENTORY_ID,
      productID: id,
      max,
    };

    max &&
      this.requests.updateProduct(product).subscribe({
        next: () => {
          this.state.updateProductMax(id, max);
          Swal.fire({
            text: `The maximum N° ${id.substring(
              0,
              4
            )} was succesfully updated!`,
            icon: 'success',
            background: '#1f2f55',
            color: 'white',
            position: 'bottom-left',
            timer: 2500,
          });
        },
        error: () => {
          Swal.fire({
            text: `Was not possible to update the maxium N° ${id.substring(
              0,
              4
            )}`,
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
