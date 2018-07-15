import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { LayoutPageComponent } from './components/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [HomeComponent, LayoutPageComponent]
})
export class CoreModule { }
