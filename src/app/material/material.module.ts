import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

export const importExport = [
  MatToolbarModule,
  MatButtonModule,
  MatTableModule
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
