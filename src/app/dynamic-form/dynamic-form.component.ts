import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormFieldConfig, FormSectionConfig } from './DynamicFormConfig';
import { EmailInputComponent } from '../email-input/email-input.component';
import { CountryInputComponent } from '../country-input/country-input.component'; // Import CountryInputComponent

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    EmailInputComponent,
    CountryInputComponent, // Add CountryInputComponent here
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css',
})
export class DynamicFormComponent implements OnInit{
  @Input() formConfig: FormSectionConfig[] = [];
  form: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    const controls: any = {};

    this.formConfig.forEach(section => {
      section.subSections.forEach(subSection => {
        subSection.fields.forEach(field => {
          controls[field.name] = [
            { value: '', disabled: !!field.disabled },
            this.getValidators(field)
          ];
        });
      });
    });

    this.form = this.fb.group(controls);
  }

  getValidators(field: FormFieldConfig) {
    const validators = [];
    if (field.validations?.required) validators.push(Validators.required);
    if (field.validations?.pattern) validators.push(Validators.pattern(field.validations.pattern));
    if (field.validations?.min !== undefined) validators.push(Validators.min(field.validations.min));
    if (field.validations?.max !== undefined) validators.push(Validators.max(field.validations.max));
    return validators;
  }

}
