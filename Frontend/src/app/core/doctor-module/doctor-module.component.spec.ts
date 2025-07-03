import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorModuleComponent } from './doctor-module.component';

describe('DoctorModuleComponent', () => {
  let component: DoctorModuleComponent;
  let fixture: ComponentFixture<DoctorModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
