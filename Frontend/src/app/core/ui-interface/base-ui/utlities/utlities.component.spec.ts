import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtlitiesComponent } from './utlities.component';

describe('UtlitiesComponent', () => {
  let component: UtlitiesComponent;
  let fixture: ComponentFixture<UtlitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UtlitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtlitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
