import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferencesSettingsComponent } from './preferences-settings.component';

describe('PreferencesSettingsComponent', () => {
  let component: PreferencesSettingsComponent;
  let fixture: ComponentFixture<PreferencesSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreferencesSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreferencesSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
