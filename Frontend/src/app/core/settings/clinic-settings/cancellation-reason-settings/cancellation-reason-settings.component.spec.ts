import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellationReasonSettingsComponent } from './cancellation-reason-settings.component';

describe('CancellationReasonSettingsComponent', () => {
  let component: CancellationReasonSettingsComponent;
  let fixture: ComponentFixture<CancellationReasonSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CancellationReasonSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancellationReasonSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
