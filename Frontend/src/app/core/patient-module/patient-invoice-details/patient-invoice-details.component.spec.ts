import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInvoiceDetailsComponent } from './patient-invoice-details.component';

describe('PatientInvoiceDetailsComponent', () => {
  let component: PatientInvoiceDetailsComponent;
  let fixture: ComponentFixture<PatientInvoiceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientInvoiceDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientInvoiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
