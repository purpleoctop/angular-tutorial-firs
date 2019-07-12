import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeregisterService {
  host = 'http://dummy.restapiexample.com/api/v1';

  constructor(
    private httpClient: HttpClient

  ) { }

  addEmployee(employee) {
    const url = `${this.host}/create`;
    return this.httpClient.post(url, employee);
  }
}
