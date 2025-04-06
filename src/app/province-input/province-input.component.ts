import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownInput } from '../dropdown-input/dropdown-input.component';

@Component({
  selector: 'app-province-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownInput
  ],
  template: `
    <app-dropdown-input
      [control]="control"
      [items]="provinces"
      [label]="'Province/Territory'"
      [validator]="provinceValidator">
    </app-dropdown-input>
  `,
  styleUrls: ['./province-input.component.css']
})
export class ProvinceInputComponent {
  @Input({ required: true }) control!: FormControl;

  provinces: string[] = [
    'Alberta',
    'British Columbia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Northwest Territories',
    'Nova Scotia',
    'Nunavut',
    'Ontario',
    'Prince Edward Island',
    'Quebec',
    'Saskatchewan',
    'Yukon'
  ];

  provinceValidator: ValidatorFn = (control) => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const isValid = this.provinces.some(province => province.toLowerCase() === value.toLowerCase());
    return isValid ? null : { invalidProvince: true };
  };
}
