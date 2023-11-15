import { FormBase } from './form_base.model';

export class Dropdown extends FormBase<string> {
  override controlType = 'Combo';
}
