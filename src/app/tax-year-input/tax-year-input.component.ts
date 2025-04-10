import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tax-year-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './tax-year-input.component.html',
  styleUrl: './tax-year-input.component.css',
})
export class TaxYearInputComponent {

  private _control!: FormControl;

  @Input({required: true})
  set control(control: FormControl) {
    this._control = control;
    this._control.addValidators([Validators.pattern('^\\d{4}$')]);
  }
  get control(): FormControl {
    return this._control;
  }

  constructor() {
  }

  getErrorMessage() {
    if (this.control.hasError('required')) {
      return 'Tax year is required';
    }

    return this.control.hasError('pattern') ? 'Not a valid tax year' : 'Not a valid Tax Year';
  }

}
