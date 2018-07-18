import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from '../../../../node_modules/rxjs';
import { Student } from '../../shared/models/student';
import { ApiResponseOfStudents } from '../../shared/models/api-response-of-students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  public students$: BehaviorSubject<Student[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  getStudents() {
    (<Observable<ApiResponseOfStudents>>this.http.get('http://localhost:23263/api/students'))
      .subscribe(apiResponse => this.students$.next(apiResponse.data));
  }
}
