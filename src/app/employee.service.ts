import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

export interface IEmployee {
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
host = 'http://dummy.restapiexample.com/api/v1';
  constructor(
    private httpClient: HttpClient

  ) {}

  getEmployee(employeeID) {
    return this.httpClient.get<IEmployee>(`${this.host}/employee/${employeeID}`);
  }
}
