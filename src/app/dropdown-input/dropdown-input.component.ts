import { Component, Input, OnInit, ViewChild, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-dropdown-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    MatButtonModule,
    TranslatePipe
  ],
  templateUrl: './dropdown-input.component.html',
  styleUrls: ['./dropdown-input.component.css']
})
export class DropdownInput implements OnInit {

  @Input({ required: true }) control!: FormControl;
  @Input({ required: true }) items!: string[];
  @Input({ required: true }) label!: string;
  @Input() placeholderKey?: string;

  @Output() optionSelected = new EventEmitter<MatAutocompleteSelectedEvent>();
  @ViewChild(MatAutocomplete) autocomplete!: MatAutocomplete;

  public getPlaceholder(): string {
    return this.placeholderKey ? this.placeholderKey : 'Select an item';
  }

  filteredItems!: Observable<string[]>;

  ngOnInit() {
    if (!this.control) {
      this.control = new FormControl('', this.itemValidator);
    } else {
      this.control.addValidators(this.itemValidator);
      this.control.updateValueAndValidity();
    }

    this.filteredItems = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.items.filter(item => item.toLowerCase().includes(filterValue));
  }

  clearValue() {
    this.control.setValue(null);
  }

  itemValidator: ValidatorFn = (control) => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const isValid = this.items.some(item => item.toLowerCase() === value.toLowerCase());
    return isValid ? null : { invalidItem: true };
  };

  ngAfterViewInit() {
    this.autocomplete.optionSelected.subscribe(event => {
      this.optionSelected.emit(event);
    });
  }
}
