import { Component, Input } from '@angular/core';
import { Product, ProductDB } from 'src/app/models/Inventory';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { environment } from 'src/environments/environment.development';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product!: ProductDB;

  constructor(private requests: RequestsService) {}

  deleteProduct(productID: string): void {
    this.requests
      .deleteProduct(environment.INVENTORY_ID, productID)
      .subscribe(_res =>
        Swal.fire({
          text: `The product with the ID ${productID} was succesfully deleted`,
          icon: 'success',
          background: '#1f2f55',
          color: 'white',
          position: 'bottom-left',
          timer: 2500,
        })
      );
  }
}
