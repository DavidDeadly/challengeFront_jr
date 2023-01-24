import { FormControl, FormGroup } from '@angular/forms';

export function mustBePositive(control: FormControl) {
  return control.value >= 0
    ? null
    : {
        err: 'numbers must be positive',
      };
}

export function minMaxCheck(productControl: FormGroup) {
  const min = productControl.value.min;
  const max = productControl.value.max;

  const maxBiggerThanMin = max >= min;

  return maxBiggerThanMin
    ? null
    : {
        err: 'min must be lower or equal to max & max must be bigger or equal to min',
      };
}
