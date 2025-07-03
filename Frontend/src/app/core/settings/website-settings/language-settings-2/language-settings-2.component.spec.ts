import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSettings2Component } from './language-settings-2.component';

describe('LanguageSettings2Component', () => {
  let component: LanguageSettings2Component;
  let fixture: ComponentFixture<LanguageSettings2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanguageSettings2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageSettings2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
