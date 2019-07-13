import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, find } from 'rxjs/operators';


export interface IEmployee {
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  host = 'http://dummy.restapiexample.com/api/v1';
  employee;
  url;
  constructor(
    private httpClient: HttpClient
  ) {
    this.url = `${this.host}`;
  }

  getEmployees() {
    return this.httpClient.get(this.url + '/employees')
      .pipe(map((employees: Array<IEmployee>) => {
        const employeesTransformed = employees.map((employee) => {
          const { id, employee_name, employee_salary, employee_age } = employee;
          const employeeTransformed = {
            id,
            name: employee_name,
            salary: employee_salary,
            age: employee_age
          };
          return employeeTransformed;
        });
        return employeesTransformed;
      }));
  }
}


