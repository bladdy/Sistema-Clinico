import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemBackupSettingsComponent } from './system-backup-settings.component';

describe('SystemBackupSettingsComponent', () => {
  let component: SystemBackupSettingsComponent;
  let fixture: ComponentFixture<SystemBackupSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SystemBackupSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemBackupSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
