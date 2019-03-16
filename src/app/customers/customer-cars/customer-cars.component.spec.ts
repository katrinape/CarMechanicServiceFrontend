import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCarsComponent } from './customer-cars.component';

describe('CustomerCarsComponent', () => {
  let component: CustomerCarsComponent;
  let fixture: ComponentFixture<CustomerCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
