import { Injectable } from '@angular/core';
import { FormService } from './form-service.service';
import { FormBase } from '../models/form_base.model';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormControlService {
  toFormGroup(data: FormBase<string>[]): FormGroup {
    let group: { [key: string]: FormControl } = {};

    data.forEach((e, i) => {
      let validators: ValidatorFn[] = [];
      console.log(e.data.maxLength);
      if (e.data.maxLength) {
        validators.push(Validators.maxLength(e.data.maxLength));
      }
      if (e.data.allowValues) {
        validators.push(Validators.pattern(/^[a-zA-Z0-9 ]*$/));
      }
      if (e.data.required) {
        validators.push(Validators.required);
      }
      group[e.data.key] = new FormControl(e.data.value || '', {
        validators: validators,
      });
    });
    console.log(group);

    return new FormGroup(group);
  }
}
