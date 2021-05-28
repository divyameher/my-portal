import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { IEmployee } from '../shared/domain/IEmployee';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  employees: IEmployee[];
  isChecked: boolean = false;
  employeesResponse: IEmployee[];
  constructor(private employeeService: EmployeeService) {
    this.employeeService.getEmployees().subscribe(
      (response) => {
        this.employeesResponse = response;
        this.employees = this.employeesResponse;
      }
    );

  }

  ngOnInit(): void {
  }

  onClickOfCheckbox(event: boolean) {
    this.employees = this.employeesResponse
    if (event) {
      this.employees = _.filter(this.employeesResponse, { location: 'Bangalore' })
    }

  }

}
