import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFieldsSettingsComponent } from './custom-fields-settings.component';

describe('CustomFieldsSettingsComponent', () => {
  let component: CustomFieldsSettingsComponent;
  let fixture: ComponentFixture<CustomFieldsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomFieldsSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFieldsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
