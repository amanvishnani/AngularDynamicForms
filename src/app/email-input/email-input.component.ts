import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-input',
  standalone: true,
  imports: [
    CommonModule, // Added for *ngIf
    ReactiveFormsModule,
    MatFormFieldModule, // Added for <mat-form-field>
    MatInputModule, // Added for matInput
  ],
  templateUrl: './email-input.component.html',
  styleUrl: './email-input.component.css',
})
export class EmailInputComponent {

  private _control!: FormControl;

  @Input({required: true})
  set control(control: FormControl) {
    this._control = control;
    this._control.addValidators(Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'));
  }
  get control(): FormControl {
    return this._control;
  }

  constructor() {
  }

}
