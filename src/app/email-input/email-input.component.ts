import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-email-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './email-input.component.html',
  styleUrl: './email-input.component.css'
})
export class EmailInputComponent {

  @Input({required: true}) control: FormControl;

  constructor() {
    this.control = new FormControl();
  }

}
