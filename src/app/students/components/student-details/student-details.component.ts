import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StudentsService } from '../../services/students.service';
import { Student } from '../../../shared/models/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  public student: Student;

  constructor(private studentService: StudentsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.studentService.getStudentById(id);
    this.studentService.student$.subscribe(s => this.student = s);
  }
}
