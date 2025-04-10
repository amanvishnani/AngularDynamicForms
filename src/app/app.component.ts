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
            { name: 'Email', type: 'email', validations: {  } },
            { name: 'Country', type: 'country' },
            { name: 'Province', type: 'province' },
            { name: 'Tax Year', type: 'taxYear'}
          ]
        }
      ]
    },
    {
      name: 'Address',
      subSections: [
        {
          name: 'Address Info',
          fields: [
            { name: 'Street', type: 'text', validations: { required: true } },
            { name: 'City', type: 'text', validations: { required: true } },
            { name: 'Zip Code', type: 'text', validations: { required: true } }
          ]
        }
      ]
    },
    {
      name: 'Preferences',
      subSections: [
        {
          name: 'Theme',
          fields: [
            { name: 'Dark Mode', type: 'dropdown', options: ['Yes', 'No'] },
            { name: 'Font Size', type: 'text', validations: { required: false } }
          ]
        },
        {
          name: 'Notifications',
          fields: [
            { name: 'Email Notifications', type: 'dropdown', options: ['Yes', 'No'] },
            { name: 'SMS Notifications', type: 'dropdown', options: ['Yes', 'No'] }
          ]
        }
      ]
    }
  ];
  


}
