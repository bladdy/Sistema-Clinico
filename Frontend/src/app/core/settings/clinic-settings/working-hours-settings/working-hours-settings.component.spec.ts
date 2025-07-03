import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingHoursSettingsComponent } from './working-hours-settings.component';

describe('WorkingHoursSettingsComponent', () => {
  let component: WorkingHoursSettingsComponent;
  let fixture: ComponentFixture<WorkingHoursSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkingHoursSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingHoursSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
