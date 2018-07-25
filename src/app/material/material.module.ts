import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatCardModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

export const importExport = [
  MatToolbarModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule
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
