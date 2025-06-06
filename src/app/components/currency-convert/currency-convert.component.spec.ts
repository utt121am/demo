import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyConvertComponent } from './currency-convert.component';

describe('CurrencyConvertComponent', () => {
  let component: CurrencyConvertComponent;
  let fixture: ComponentFixture<CurrencyConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyConvertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
