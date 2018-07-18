import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesResultComponent } from './courses-result.component';

describe('CoursesResultComponent', () => {
  let component: CoursesResultComponent;
  let fixture: ComponentFixture<CoursesResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
