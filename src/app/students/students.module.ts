import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsResultComponent } from './components/students-result/students-result.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [StudentsResultComponent],
  declarations: [StudentsResultComponent]
})
export class StudentsModule { }
