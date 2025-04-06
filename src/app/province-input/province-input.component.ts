import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ReactiveFormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-province-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './province-input.component.html',
  styleUrls: ['./province-input.component.css']
})
export class ProvinceInputComponent implements OnInit {

  // Static validator function
  static provinceValidator(provinces: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null; // Don't validate empty values, let 'required' handle that
      }
      const isValid = provinces.some(province => province.toLowerCase() === value.toLowerCase());
      return isValid ? null : { invalidProvince: true }; // Use specific error key
    };
  }

  @Input({ required: true }) control!: FormControl;

  provinces: string[] = [ // Static list of Canadian Provinces and Territories
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
  filteredProvinces!: Observable<string[]>;

  constructor() { }

  ngOnInit() {
    if (!this.control) {
      this.control = new FormControl('', ProvinceInputComponent.provinceValidator(this.provinces));
    } else {
      // Add the validator to the existing control instance
      this.control.addValidators(ProvinceInputComponent.provinceValidator(this.provinces));
      this.control.updateValueAndValidity(); // Ensure validator is checked initially
    }

    this.filteredProvinces = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.provinces.filter(province => province.toLowerCase().includes(filterValue));
  }
}
