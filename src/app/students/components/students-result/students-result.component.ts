import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '../../../../../node_modules/@angular/material/table';

import { StudentsService } from '../../services/students.service';
import { Student } from '../../../shared/models/student';

@Component({
  selector: 'app-students-result',
  templateUrl: './students-result.component.html',
  styleUrls: ['./students-result.component.css']
})
export class StudentsResultComponent implements OnInit {
  public displayedColumns: string[] = ['lastName', 'firstMidName', 'enrollmentDate'];
  public dataSource: MatTableDataSource<Student>;

  constructor(private studentService: StudentsService) {
  }

  ngOnInit() {
    this.studentService.students$
      .subscribe(students => {
        this.dataSource = new MatTableDataSource<Student>(students);
      });
  }
}
