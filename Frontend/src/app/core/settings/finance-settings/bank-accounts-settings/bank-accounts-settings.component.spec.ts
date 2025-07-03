import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountsSettingsComponent } from './bank-accounts-settings.component';

describe('BankAccountsSettingsComponent', () => {
  let component: BankAccountsSettingsComponent;
  let fixture: ComponentFixture<BankAccountsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankAccountsSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankAccountsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
