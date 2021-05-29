import { fakeAsync, flushMicrotasks } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { IEmployee } from '../shared/domain/IEmployee';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  const employeeServiceSpy = jasmine.createSpyObj('EmployeeService', ['getEmployees']);
  const employeesMockData = [
    {
      'profilePic': '../../assets/images/employees/chandler_bing.PNG',
      'name': 'Chandler Bing',
      'designation': 'Sr.UI Developer',
      'ratings': 3.5,
      'experience': 5.8,
      'dateOfJoining': 2017,
      'team': 'OCBC Singapore',
      'manager': 'Janice',
      'mobileNo': '7406559241',
      'email': 'cbing@infrrd.ai',
      'location': 'Bangalore',
      'department': 'Front End Development'
    },
    {
      'profilePic': '../../assets/images/employees/monica_geller.PNG',
      'name': 'Monica Geller',
      'designation': 'Sr.UI Developer',
      'ratings': 4,
      'experience': 4,
      'dateOfJoining': 2018,
      'team': 'IDC',
      'manager': 'Janice',
      'mobileNo': '7406559241',
      'email': 'mgeller@infrrd.ai',
      'location': 'Pune',
      'department': 'Front End Development'
    }
  ];
  beforeEach(() => {
    component = new SearchComponent(employeeServiceSpy);
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should initalize data when called', fakeAsync(() => {
      spyOn(component, 'getEmployees');
      component.ngOnInit();
      expect(component.getEmployees).toHaveBeenCalled();
      expect(component.searchForm).toBeDefined();
    }))
  });

  describe('#getEmployees', () => {
    it('should get employees data when called', fakeAsync(() => {
      const response: IEmployee[] = employeesMockData;
      employeeServiceSpy.getEmployees.and.returnValue(of(response));
      component.getEmployees();
      flushMicrotasks();
      expect(component.employeesResponse).toEqual(response);
      expect(component.employees).toEqual(response);
      expect(component.filteredEmployees).toEqual(response);
    }))
  });

  describe('#onClickOfCheckbox', () => {
    beforeEach(() => {
      component.filteredEmployees = employeesMockData;
    });
    it('should filter employee data when checked', fakeAsync(() => {
      component.onClickOfCheckbox(true);
      expect(component.employees.length).toBe(1);
    }));
    it('should not filter employee data when unchecked', fakeAsync(() => {
      component.onClickOfCheckbox(false);
      expect(component.employees.length).toBe(2);
    }))
  });
});