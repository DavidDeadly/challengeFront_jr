import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishBuyComponent } from './finish-buy.component';
import { HttpClientModule } from '@angular/common/http';
import { StateService } from 'src/app/services/state/state.service';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { FormBuilder } from '@angular/forms';
import {
  SwalPortalTargets,
  SweetAlert2Module,
} from '@sweetalert2/ngx-sweetalert2';
import { Router } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { ProductComponent } from '../product/product.component';

describe('FinishBuyComponent', () => {
  let component: FinishBuyComponent;
  let fixture: ComponentFixture<FinishBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, SweetAlert2Module.forRoot()],
      providers: [
        StateService,
        RequestsService,
        CartService,
        FormBuilder,
        SwalPortalTargets,
        Router,
      ],
      declarations: [FinishBuyComponent, ProductsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FinishBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
