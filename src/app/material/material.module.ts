import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

export const importExport = [
  MatToolbarModule
];
@NgModule({
  imports: [
    CommonModule,
    importExport
  ],
  exports: importExport,
  declarations: []
})
export class MaterialModule { }
