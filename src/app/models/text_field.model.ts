import { FormBase } from './form_base.model';

export class TextField extends FormBase<string> {
  override controlType = 'Text';
}
