import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@types/selenium-webdriver/http';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(http: HttpClient) { }

}
