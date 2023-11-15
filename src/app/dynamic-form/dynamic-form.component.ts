import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBase } from '../models/form_base.model';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormControlService } from '../services/form-control.service';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../shared/input/input.component';
import { ToFormControlPipe } from '../pipes/to-form-control.pipe';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    ToFormControlPipe,
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit, OnDestroy {
  formControlService: FormControlService = inject(FormControlService);
  @Input() formData: FormBase<string>[] | null = [];
  form!: FormGroup;

  values: string = '';

  ngOnInit(): void {
    this.form = this.formControlService.toFormGroup(this.formData!);
  }

  submit() {
    this.values = this.form.getRawValue();
  }
  ngOnDestroy(): void {}
}
