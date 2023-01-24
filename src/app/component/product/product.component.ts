import { Component, Input } from '@angular/core';
import { merge, mergeMap } from 'rxjs';
import { Product, ProductDB, ProductEdit } from 'src/app/models/Inventory';
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

  constructor(private state: StateService, private requests: RequestsService) {}

  deleteProduct(productID: string): void {
    this.requests
      .deleteProduct(environment.INVENTORY_ID, productID)
      .subscribe(_res => {
        this.state.deleteProduct(productID);
        Swal.fire({
          text: `The product with the ID ${productID} was succesfully deleted`,
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
          text: `Was not possible to update the name N° ${id.substring(0, 4)}`,
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
          text: `Was not possible to update the stock N° ${id.substring(0, 4)}`,
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
    this.requests.updateProduct(product).subscribe({
      next: () => {
        this.state.updateProductMin(id, min);
        Swal.fire({
          text: `The minimum N° ${id.substring(0, 4)} was succesfully updated!`,
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
    this.requests.updateProduct(product).subscribe({
      next: () => {
        this.state.updateProductMax(id, max);
        Swal.fire({
          text: `The maximum N° ${id.substring(0, 4)} was succesfully updated!`,
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
