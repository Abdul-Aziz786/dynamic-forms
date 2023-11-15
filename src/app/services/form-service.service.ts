import { Injectable } from '@angular/core';
import { FormBase } from '../models/form_base.model';
import { Dropdown } from '../models/dropdown.model';
import { TextField } from '../models/text_field.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  getFormData(): Observable<FormBase<string>[]> {
    const data: FormBase<string>[] = [
      new TextField({
        label: 'First Name',
        key: 'fname',
        type: 'text',
        placeholder: 'Enter Name',
        required: true,
        maxLength: 10,
        allowValues: 'A-Z,0-9',
      }),
      new TextField({
        label: 'Last Name',
        key: 'lname',
        type: 'text',
        placeholder: 'Enter Name',
        required: true,
        maxLength: 10,
        allowValues: 'A-Z,0-9',
      }),
      new Dropdown({
        label: 'Country',
        key: 'country',
        value: '',
        required: true,
        options: [
          { key: 'india', value: 'India' },
          { key: 'england', value: 'England' },
          { key: 'autralia', value: 'Autralia' },
          { key: 'srilanka', value: 'Srilanka' },
        ],
      }),
      new Dropdown({
        label: 'City',
        key: 'city',
        value: '',
        required: true,
        options: [
          { key: 'Chennai', value: 'Chennai' },
          { key: 'Villupuram', value: 'Villupuram' },
          { key: 'Tindivanam', value: 'Tindivanam' },
          { key: 'Madurai', value: 'Madurai' },
        ],
      }),
    ];

    return of(data);
  }
}
