import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsTemplatesSettingsComponent } from './sms-templates-settings.component';

describe('SmsTemplatesSettingsComponent', () => {
  let component: SmsTemplatesSettingsComponent;
  let fixture: ComponentFixture<SmsTemplatesSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsTemplatesSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsTemplatesSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
