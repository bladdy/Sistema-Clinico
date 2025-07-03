import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseBackupSettingsComponent } from './database-backup-settings.component';

describe('DatabaseBackupSettingsComponent', () => {
  let component: DatabaseBackupSettingsComponent;
  let fixture: ComponentFixture<DatabaseBackupSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabaseBackupSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseBackupSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
