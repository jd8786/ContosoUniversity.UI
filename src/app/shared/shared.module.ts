import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutPageComponent } from './components/layout-page/layout-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule
  ],
  exports: [LayoutPageComponent],
  declarations: [LayoutPageComponent]
})
export class SharedModule { }
