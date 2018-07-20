import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

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

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private studentService: StudentsService) {
  }

  ngOnInit() {
    this.studentService.students$
      .subscribe(students => {
        this.dataSource = new MatTableDataSource<Student>(students);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }
}
