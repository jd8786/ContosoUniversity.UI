import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from '../../../../node_modules/rxjs';
import { Student } from '../../shared/models/student';
import { ApiResponseOfStudents } from '../../shared/models/api-response-of-students';
import { ApiResponseOfStudent } from '../../shared/models/api-response-of-student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  public students$: BehaviorSubject<Student[]> = new BehaviorSubject([]);
  public student$: BehaviorSubject<Student> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  public getStudents() {
    (<Observable<ApiResponseOfStudents>>this.http.get('http://localhost:23263/api/students'))
      .subscribe(apiResponse => this.students$.next(apiResponse.students));
  }

  public getStudentById(id: number) {
    (<Observable<ApiResponseOfStudent>>this.http.get('http://localhost:23263/api/students/' + id))
      .subscribe(apiResponse => this.student$.next(apiResponse.student));
  }
}
