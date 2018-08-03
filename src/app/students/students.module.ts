import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { StudentsResultComponent } from './components/students-result/students-result.component';
import { MaterialModule } from '../material/material.module';
import { StudentDetailsComponent } from './components/student-details/student-details.component';

const STUDENTSROUTES: Route[] = [
  { path: 'students', component: StudentsResultComponent },
  { path: 'students/:id', component: StudentDetailsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(STUDENTSROUTES)
  ],
  declarations: [StudentsResultComponent, StudentDetailsComponent]
})
export class StudentsModule { }
