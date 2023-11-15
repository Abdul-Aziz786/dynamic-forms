import { Component } from '@angular/core';
import { FormService } from './services/form-service.service';
import { FormBase } from './models/form_base.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dynamic-forms';

  formList$: Observable<FormBase<any>[]>;

  constructor(public formService: FormService) {
    this.formList$ = formService.getFormData();
  }
}
