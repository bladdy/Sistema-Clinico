import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsDoctorDetailsComponent } from './patients-doctor-details.component';

describe('PatientsDoctorDetailsComponent', () => {
  let component: PatientsDoctorDetailsComponent;
  let fixture: ComponentFixture<PatientsDoctorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientsDoctorDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientsDoctorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
