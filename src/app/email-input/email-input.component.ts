import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
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

  @Input({required: true}) control: FormControl;

  constructor() {
    this.control = new FormControl();
  }

}
