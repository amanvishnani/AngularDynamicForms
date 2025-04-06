import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceInputComponent } from './province-input.component';

describe('ProvinceInputComponent', () => {
  let component: ProvinceInputComponent;
  let fixture: ComponentFixture<ProvinceInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvinceInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvinceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
