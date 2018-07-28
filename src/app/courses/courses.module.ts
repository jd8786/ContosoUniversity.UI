import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { CoursesResultComponent } from './components/courses-result/courses-result.component';

const COURSESROUTES: Route[] = [
  {path: 'courses', component: CoursesResultComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(COURSESROUTES)
  ],
  declarations: [CoursesResultComponent]
})
export class CoursesModule { }
