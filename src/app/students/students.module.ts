import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { StudentsResultComponent } from './components/students-result/students-result.component';
import { MaterialModule } from '../material/material.module';

const STUDENTSROUTES: Route[] = [
  { path: 'students', component: StudentsResultComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(STUDENTSROUTES)
  ],
  declarations: [StudentsResultComponent]
})
export class StudentsModule { }
