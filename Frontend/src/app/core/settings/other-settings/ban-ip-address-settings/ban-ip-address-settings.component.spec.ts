import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanIpAddressSettingsComponent } from './ban-ip-address-settings.component';

describe('BanIpAddressSettingsComponent', () => {
  let component: BanIpAddressSettingsComponent;
  let fixture: ComponentFixture<BanIpAddressSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BanIpAddressSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanIpAddressSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
