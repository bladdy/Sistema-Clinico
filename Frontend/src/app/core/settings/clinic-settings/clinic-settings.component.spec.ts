import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicSettingsComponent } from './clinic-settings.component';

describe('ClinicSettingsComponent', () => {
  let component: ClinicSettingsComponent;
  let fixture: ComponentFixture<ClinicSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClinicSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
