import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesSettingsComponent } from './currencies-settings.component';

describe('CurrenciesSettingsComponent', () => {
  let component: CurrenciesSettingsComponent;
  let fixture: ComponentFixture<CurrenciesSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrenciesSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrenciesSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
