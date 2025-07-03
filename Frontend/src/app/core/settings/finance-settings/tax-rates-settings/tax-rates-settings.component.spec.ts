import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxRatesSettingsComponent } from './tax-rates-settings.component';

describe('TaxRatesSettingsComponent', () => {
  let component: TaxRatesSettingsComponent;
  let fixture: ComponentFixture<TaxRatesSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaxRatesSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxRatesSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
