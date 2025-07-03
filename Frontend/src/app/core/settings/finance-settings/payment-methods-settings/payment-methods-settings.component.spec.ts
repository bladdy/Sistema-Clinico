import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodsSettingsComponent } from './payment-methods-settings.component';

describe('PaymentMethodsSettingsComponent', () => {
  let component: PaymentMethodsSettingsComponent;
  let fixture: ComponentFixture<PaymentMethodsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentMethodsSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentMethodsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
