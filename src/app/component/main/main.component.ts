import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductDB } from 'src/app/models/Inventory';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { environment } from 'src/environments/environment.development';
import {
  SwalPortalTarget,
  SwalPortalTargets,
} from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  products: Array<ProductDB> = [];

  constructor(
    private requests: RequestsService,
    public readonly swalTargets: SwalPortalTargets
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.requests
      .getAllProducts(environment.INVENTORY_ID)
      .subscribe(res => (this.products = res));
  }

  addProduct() {
    alert('Product added!');
  }
}
