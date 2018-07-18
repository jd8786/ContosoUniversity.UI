import { Component, OnInit } from '@angular/core';

import { StudentsService } from '../../../students/services/students.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent implements OnInit {

  constructor(private studentService: StudentsService) { }

  ngOnInit() {
  }

  public getStudents() {
    this.studentService.getStudents();
  }
}
