import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairDetailComponent } from './repair-detail.component';

describe('RepairDetailComponent', () => {
  let component: RepairDetailComponent;
  let fixture: ComponentFixture<RepairDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
