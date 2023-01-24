import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import {
  mustBePositive,
  minMaxCheck,
} from 'src/app/services/validators/validators';
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
    public readonly swalTargets: SwalPortalTargets
  ) {}

  addProduct() {
    this.isProductEnabled();
    console.log(this.product.value);
    alert('Product created!!');
  }

  setName() {}

  submit() {
    alert('submit it!!');
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
