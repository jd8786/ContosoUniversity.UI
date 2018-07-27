import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/components/home/home.component';
import { StudentsResultComponent } from './students/components/students-result/students-result.component';
import { CoursesResultComponent } from './courses/components/courses-result/courses-result.component';
import { InstructorsResultComponent } from './instructors/components/instructors-result/instructors-result.component';
import { DepartmentsResultComponent } from './departments/components/departments-result/departments-result.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
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
    component: PageNotFoundComponent,
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
