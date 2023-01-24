import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StateService } from 'src/app/services/state/state.service';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, SweetAlert2Module.forRoot()],
      providers: [StateService, RequestsService, CartService],
      declarations: [ProductComponent],
    }).compileComponents();

    TestBed.inject(StateService);
    TestBed.inject(RequestsService);
    TestBed.inject(CartService);

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = {
      id: '1',
      name: 'Pc',
      enabled: true,
      inInventory: 500,
      min: 5,
      max: 200,
    };

    component.showIcons = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
