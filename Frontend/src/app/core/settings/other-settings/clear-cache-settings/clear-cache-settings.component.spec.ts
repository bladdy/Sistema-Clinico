import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearCacheSettingsComponent } from './clear-cache-settings.component';

describe('ClearCacheSettingsComponent', () => {
  let component: ClearCacheSettingsComponent;
  let fixture: ComponentFixture<ClearCacheSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClearCacheSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClearCacheSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
