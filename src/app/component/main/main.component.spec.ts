import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { HttpClientModule } from '@angular/common/http';
import {
  SwalPortalTargets,
  SweetAlert2Module,
} from '@sweetalert2/ngx-sweetalert2';
import { StateService } from 'src/app/services/state/state.service';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { CartComponent } from '../cart/cart.component';
import { CreateProductComponent } from '../create-product/create-product.component';
import { ProductsComponent } from '../products/products.component';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapBagHeart, bootstrapTrash } from '@ng-icons/bootstrap-icons';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        SweetAlert2Module.forRoot(),
        NgIconsModule.withIcons({ bootstrapTrash, bootstrapBagHeart }),
      ],
      providers: [StateService, RequestsService, SwalPortalTargets],
      declarations: [
        MainComponent,
        CartComponent,
        CreateProductComponent,
        ProductsComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
