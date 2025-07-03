import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceTemplatesSettingsComponent } from './invoice-templates-settings.component';

describe('InvoiceTemplatesSettingsComponent', () => {
  let component: InvoiceTemplatesSettingsComponent;
  let fixture: ComponentFixture<InvoiceTemplatesSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvoiceTemplatesSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceTemplatesSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
