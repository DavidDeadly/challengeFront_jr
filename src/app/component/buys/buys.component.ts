import { Component, OnInit } from '@angular/core';
import { BuyDB } from 'src/app/models/Inventory';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-buys',
  templateUrl: './buys.component.html',
  styleUrls: ['./buys.component.scss'],
})
export class BuysComponent implements OnInit {
  buys: Array<BuyDB> = [];

  constructor(private request: RequestsService) {}
  ngOnInit(): void {
    this.request
      .getAllBuys(environment.INVENTORY_ID)
      .subscribe(res => (this.buys = res.reverse()));
  }
}
