import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from 'src/app/shared/domain/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }
  getEmployees(): Observable<IEmployee[]> {
    const url = '../../../assets/employee-data/employees.json'
    return this.httpClient.get<IEmployee[]>(url);
  }
}
