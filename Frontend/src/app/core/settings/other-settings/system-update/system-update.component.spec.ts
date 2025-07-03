import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemUpdateComponent } from './system-update.component';

describe('SystemUpdateComponent', () => {
  let component: SystemUpdateComponent;
  let fixture: ComponentFixture<SystemUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SystemUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
