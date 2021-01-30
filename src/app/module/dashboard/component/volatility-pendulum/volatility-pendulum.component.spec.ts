import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolatilityPendulumComponent } from './volatility-pendulum.component';

describe('VolatilityPendulumComponent', () => {
  let component: VolatilityPendulumComponent;
  let fixture: ComponentFixture<VolatilityPendulumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolatilityPendulumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolatilityPendulumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
