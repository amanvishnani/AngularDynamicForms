import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component";
import { FormSectionConfig } from './dynamic-form/DynamicFormConfig';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  async ngOnInit() {
  }
  title = 'app';

  config: FormSectionConfig[] = [
    {
      name: 'Personal Details',
      subSections: [
        {
          name: 'Basic Info',
          fields: [
            { name: 'First Name', type: 'text', validations: { required: false } },
            { name: 'Last Name', type: 'text', validations: { required: true }, disabled: true },
            { name: 'Email', type: 'email', validations: { pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$' } },
            { name: 'Country', type: 'country' },
          ]
        }
      ]
    }
  ];
  


}
