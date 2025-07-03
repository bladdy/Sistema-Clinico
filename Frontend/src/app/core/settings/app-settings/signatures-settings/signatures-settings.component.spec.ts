import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignaturesSettingsComponent } from './signatures-settings.component';

describe('SignaturesSettingsComponent', () => {
  let component: SignaturesSettingsComponent;
  let fixture: ComponentFixture<SignaturesSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignaturesSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignaturesSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
