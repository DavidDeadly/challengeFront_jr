import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductComponent } from './create-product.component';
import { HttpClientModule } from '@angular/common/http';
import {
  SwalPortalTargets,
  SweetAlert2Module,
} from '@sweetalert2/ngx-sweetalert2';
import { StateService } from 'src/app/services/state/state.service';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { FormBuilder } from '@angular/forms';

describe('CreateProductComponent', () => {
  let component: CreateProductComponent;
  let fixture: ComponentFixture<CreateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, SweetAlert2Module.forRoot()],
      providers: [
        StateService,
        RequestsService,
        SwalPortalTargets,
        FormBuilder,
      ],
      declarations: [CreateProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
