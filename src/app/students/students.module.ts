import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsResultComponent } from './components/students-result/students-result.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [StudentsResultComponent]
})
export class StudentsModule { }
