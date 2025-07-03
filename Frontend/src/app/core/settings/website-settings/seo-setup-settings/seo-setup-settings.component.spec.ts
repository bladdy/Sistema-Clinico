import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoSetupSettingsComponent } from './seo-setup-settings.component';

describe('SeoSetupSettingsComponent', () => {
  let component: SeoSetupSettingsComponent;
  let fixture: ComponentFixture<SeoSetupSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeoSetupSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeoSetupSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
