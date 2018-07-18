import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsResultComponent } from './departments-result.component';

describe('DepartmentsResultComponent', () => {
  let component: DepartmentsResultComponent;
  let fixture: ComponentFixture<DepartmentsResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
