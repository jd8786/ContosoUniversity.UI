import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

export const importExport = [
  MatToolbarModule,
  MatButtonModule
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
