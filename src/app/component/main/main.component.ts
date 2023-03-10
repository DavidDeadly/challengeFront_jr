import { Component, OnInit } from '@angular/core';
import { ProductDB } from 'src/app/models/Inventory';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { environment } from 'src/environments/environment.development';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  products: Array<ProductDB> = [];

  constructor(
    private requests: RequestsService,
    private state: StateService,
    public readonly swalTargets: SwalPortalTargets
  ) {}

  ngOnInit(): void {
    this.state.products.subscribe(nextProds => (this.products = nextProds));
    this.getProducts();
  }

  getProducts(): void {
    this.requests
      .getAllProducts(environment.INVENTORY_ID)
      .subscribe(res => this.state.products.next(res));
  }
}
