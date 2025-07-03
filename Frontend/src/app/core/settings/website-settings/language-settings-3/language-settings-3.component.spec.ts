import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSettings3Component } from './language-settings-3.component';

describe('LanguageSettings3Component', () => {
  let component: LanguageSettings3Component;
  let fixture: ComponentFixture<LanguageSettings3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanguageSettings3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageSettings3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
