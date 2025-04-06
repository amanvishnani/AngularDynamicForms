export interface FormFieldConfig {
    name: string;
    type: 'text' | 'email' | 'country' | 'province' | 'name' | 'number' | 'dropdown'; 
    options?: string[];
    validations?: {
      required?: boolean;
      pattern?: string;
      min?: number;
      max?: number;
    };
    disabled?: boolean;
  }
  
  export interface FormSubSectionConfig {
    name: string;
    fields: FormFieldConfig[];
  }
  
  export interface FormSectionConfig {
    name: string;
    subSections: FormSubSectionConfig[];
  }
