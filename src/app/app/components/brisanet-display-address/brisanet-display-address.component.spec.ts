import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrisanetDisplayAddressComponent } from './brisanet-display-address.component';

describe('BrisanetDisplayAddressComponent', () => {
  let component: BrisanetDisplayAddressComponent;
  let fixture: ComponentFixture<BrisanetDisplayAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrisanetDisplayAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrisanetDisplayAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
