import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceModeSettingsComponent } from './maintenance-mode-settings.component';

describe('MaintenanceModeSettingsComponent', () => {
  let component: MaintenanceModeSettingsComponent;
  let fixture: ComponentFixture<MaintenanceModeSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceModeSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceModeSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
