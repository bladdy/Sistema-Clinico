import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineConsultationsComponent } from './online-consultations.component';

describe('OnlineConsultationsComponent', () => {
  let component: OnlineConsultationsComponent;
  let fixture: ComponentFixture<OnlineConsultationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnlineConsultationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineConsultationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
