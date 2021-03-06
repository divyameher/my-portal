import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  searchForm: FormGroup;
  locations: string[] = ['Bangalore', 'Pune', 'Delhi'];
  departments: string[] = ['Front End Development', 'Quality Analyst', 'Human Resource Management'];
  teams: string[] = ['OCBC Singapore', 'IDC', 'Rustify', 'Radian', 'Product Team'];
  years: number[] = [2010, 2011, 2012, 2013, 2014, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
  experience: any[] = [
    { id: 1, description: '1 Year above' },
    { id: 2, description: '2 Year above' },
    { id: 3, description: '3 Year above' },
    { id: 4, description: '4 Year above' },
    { id: 5, description: '5 Year above' }
  ]
  filteredEmployees: IEmployee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
    this.searchForm = new FormGroup({
      location: new FormControl(null),
      department: new FormControl(null),
      team: new FormControl(null),
      dateOfJoining: new FormControl(null),
      experience: new FormControl(null)
    });
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      (response) => {
        this.employeesResponse = this.employees = this.filteredEmployees = response;
      }
    );
  }

  onClickOfCheckbox(event: boolean) {
    if (event) {
      this.employees = _.filter(this.filteredEmployees, { location: 'Bangalore' })
    } else {
      this.employees = this.filteredEmployees;
    }
  }

  submit() {
    // filter employees based on experience
    const experienceFilteredData = _.filter(this.employeesResponse, (key) => {
      if (key?.experience && this.searchForm.value?.experience && key.experience <= this.searchForm.value.experience) {
        return false;
      }
      return true;
    });
    // remove null filters
    let filters = _.pickBy(this.searchForm.value, _.identity);
    // remove experience filter as data is already filetr by this and filter remaining data
    const filteredData = _.filter(experienceFilteredData, _.omit(filters, ['experience']));
    this.employees = filteredData as IEmployee[];
    this.filteredEmployees = this.employees;
  }

  clear() {
    this.searchForm.reset();
    this.employees = this.employeesResponse;
  }

}
