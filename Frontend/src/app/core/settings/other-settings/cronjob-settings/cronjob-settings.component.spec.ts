import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronjobSettingsComponent } from './cronjob-settings.component';

describe('CronjobSettingsComponent', () => {
  let component: CronjobSettingsComponent;
  let fixture: ComponentFixture<CronjobSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CronjobSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronjobSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
