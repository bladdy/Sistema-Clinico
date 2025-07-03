import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTemplatesSettingsComponent } from './email-templates-settings.component';

describe('EmailTemplatesSettingsComponent', () => {
  let component: EmailTemplatesSettingsComponent;
  let fixture: ComponentFixture<EmailTemplatesSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailTemplatesSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailTemplatesSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
