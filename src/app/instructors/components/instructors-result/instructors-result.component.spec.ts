import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsResultComponent } from './instructors-result.component';

describe('InstructorsResultComponent', () => {
  let component: InstructorsResultComponent;
  let fixture: ComponentFixture<InstructorsResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorsResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
