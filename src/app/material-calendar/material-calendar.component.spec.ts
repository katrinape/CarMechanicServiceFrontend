import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCalendarComponent } from './material-calendar.component';

describe('MaterialCalendarComponent', () => {
  let component: MaterialCalendarComponent;
  let fixture: ComponentFixture<MaterialCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
