import { Component, OnInit } from '@angular/core';

import { StudentsService } from '../../services/students.service';
import { Student } from '../../../shared/models/student';

@Component({
  selector: 'app-students-result',
  templateUrl: './students-result.component.html',
  styleUrls: ['./students-result.component.css']
})
export class StudentsResultComponent implements OnInit {
  public students: Student[] = [];
  public displayedColumns: string[] = ['lastName', 'firstMidName', 'enrollmentDate'];
  public dataSource = this.students;

  constructor(private studentService: StudentsService) { }

  ngOnInit() {
    this.studentService.students$
      .subscribe(students => { this.students = students; });
  }

}
