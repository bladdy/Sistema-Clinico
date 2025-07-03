import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdprCookiesSettingsComponent } from './gdpr-cookies-settings.component';

describe('GdprCookiesSettingsComponent', () => {
  let component: GdprCookiesSettingsComponent;
  let fixture: ComponentFixture<GdprCookiesSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GdprCookiesSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GdprCookiesSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
