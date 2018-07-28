import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { DepartmentsResultComponent } from './components/departments-result/departments-result.component';

const DEPARTMENTSROUTES: Route[] = [
  { path: 'departments', component: DepartmentsResultComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DEPARTMENTSROUTES)
  ],
  declarations: [DepartmentsResultComponent]
})
export class DepartmentsModule { }
