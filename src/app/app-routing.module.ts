import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/components/home/home.component';
import { StudentsResultComponent } from './students/components/students-result/students-result.component';
import { CoursesResultComponent } from './courses/components/courses-result/courses-result.component';
import { InstructorsResultComponent } from './instructors/components/instructors-result/instructors-result.component';
import { DepartmentsResultComponent } from './departments/components/departments-result/departments-result.component';

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'students',
    component: StudentsResultComponent
  },
  {
    path: 'courses',
    component: CoursesResultComponent
  },
  {
    path: 'instructors',
    component: InstructorsResultComponent
  },
  {
    path: 'departments',
    component: DepartmentsResultComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
