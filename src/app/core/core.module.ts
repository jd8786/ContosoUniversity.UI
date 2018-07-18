import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { LayoutPageComponent } from './components/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    LayoutPageComponent
  ],
  declarations: [
    HomeComponent,
    LayoutPageComponent]
})
export class CoreModule { }
