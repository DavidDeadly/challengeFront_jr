import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import { delay, mergeMap } from 'rxjs';
import { RequestsService } from 'src/app/services/requests/requests.service';
import { StateService } from 'src/app/services/state/state.service';
import {
  mustBePositive,
  minMaxCheck,
} from 'src/app/services/validators/validators';
import { environment } from 'src/environments/environment.development';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent {
  product: FormGroup = this.formBuilder.group(
    {
      name: ['', [Validators.required]],
      inInventory: [NaN, [Validators.required, mustBePositive]],
      enabled: true,
      min: [NaN, [Validators.required, mustBePositive]],
      max: [NaN, [Validators.required, mustBePositive]],
    },
    {
      validators: [minMaxCheck],
    }
  );

  constructor(
    private formBuilder: FormBuilder,
    private requests: RequestsService,
    private state: StateService,
    public readonly swalTargets: SwalPortalTargets
  ) {}

  addProduct() {
    this.isProductEnabled();
    const newProduct = this.product.value;
    newProduct.inventoryID = environment.INVENTORY_ID;
    this.requests
      .addProduct(newProduct)
      .pipe(
        delay(250),
        mergeMap(_res => {
          Swal.fire({
            title: `Product succesfully created!`,
            icon: 'success',
            background: '#1f2f55',
            color: 'white',
            position: 'bottom-left',
            timer: 2500,
          });
          return this.requests.getAllProducts(environment.INVENTORY_ID);
        })
      )
      .subscribe(res => {
        console.log(res);
        this.state.products.next(res);
      });
  }

  isProductEnabled() {
    const inInventory = this.product.value.inInventory;
    const min = this.product.value.min;

    const enabled = this.product.get('enabled');

    enabled?.setValue(inInventory >= min);
  }

  handelDismiss(_$event: Swal.DismissReason | undefined) {
    this.product.reset({
      name: '',
      inInventory: NaN,
      enabled: true,
      min: NaN,
      max: NaN,
    });
  }
}
