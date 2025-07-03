import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsGatewaysSettingsComponent } from './sms-gateways-settings.component';

describe('SmsGatewaysSettingsComponent', () => {
  let component: SmsGatewaysSettingsComponent;
  let fixture: ComponentFixture<SmsGatewaysSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsGatewaysSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsGatewaysSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
