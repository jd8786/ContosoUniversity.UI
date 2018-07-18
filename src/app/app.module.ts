import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';
import { InstructorsModule } from './instructors/instructors.module';
import { DepartmentsModule } from './departments/departments.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { StudentsService } from './students/services/students.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    StudentsModule,
    CoursesModule,
    InstructorsModule,
    DepartmentsModule,
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
