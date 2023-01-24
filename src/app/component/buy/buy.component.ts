import { Component, Input } from '@angular/core';
import { BuyDB } from 'src/app/models/Inventory';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss'],
})
export class BuyComponent {
  @Input()
  buy!: BuyDB;
}
