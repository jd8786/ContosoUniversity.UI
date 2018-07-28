import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

import { StudentsService } from '../../services/students.service';
import { Student } from '../../../shared/models/student';

@Component({
  templateUrl: './students-result.component.html',
  styleUrls: ['./students-result.component.scss']
})
export class StudentsResultComponent implements OnInit {
  public displayedColumns: string[] = ['lastName', 'firstMidName', 'enrollmentDate', 'otherFunctions'];
  public dataSource: MatTableDataSource<Student>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private studentService: StudentsService) {
  }

  ngOnInit() {
    this.studentService.getStudents();
    this.studentService.students$
      .subscribe(students => {
        this.dataSource = new MatTableDataSource<Student>(students);
        this.dataSource.filterPredicate = this.filterStudentsByNames;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

  private filterStudentsByNames(data: Student, filter: string): boolean {
    filter = filter.toLowerCase();
    return data.lastName.toLowerCase().indexOf(filter) >= 0 || data.firstMidName.toLowerCase().indexOf(filter) >= 0;
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
