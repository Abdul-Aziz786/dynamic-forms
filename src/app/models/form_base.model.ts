export interface IFormBase<T> {
  label: string;
  key: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  value?: T | null;
  maxLength?: number;
  allowValues?: string;
  options?: { key: string; value: string }[];
}
export class FormBase<T> {
  controlType?: string;
  constructor(public data: IFormBase<T>) {}
}
