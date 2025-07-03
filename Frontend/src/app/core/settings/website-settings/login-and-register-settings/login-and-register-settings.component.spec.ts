import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAndRegisterSettingsComponent } from './login-and-register-settings.component';

describe('LoginAndRegisterSettingsComponent', () => {
  let component: LoginAndRegisterSettingsComponent;
  let fixture: ComponentFixture<LoginAndRegisterSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginAndRegisterSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAndRegisterSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
