import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { InstructorsResultComponent } from './components/instructors-result/instructors-result.component';

const INSTRUCTORSROUTES: Route[] = [
  { path: 'instructors', component: InstructorsResultComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(INSTRUCTORSROUTES)
  ],
  declarations: [InstructorsResultComponent]
})
export class InstructorsModule { }
