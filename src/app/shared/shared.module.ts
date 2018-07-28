import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutPageComponent } from './components/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [LayoutPageComponent],
  declarations: [LayoutPageComponent]
})
export class SharedModule { }
