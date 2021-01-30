import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyBadgeComponent } from './currency-badge.component';

describe('CurrencyBadgeComponent', () => {
  let component: CurrencyBadgeComponent;
  let fixture: ComponentFixture<CurrencyBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
