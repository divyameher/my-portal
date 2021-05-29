import { fakeAsync, flushMicrotasks } from '@angular/core/testing';
import { of } from 'rxjs';
import { IEmployee } from 'src/app/shared/domain/IEmployee';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;
  const httpSpy = jasmine.createSpyObj('httpClient', ['get']);

  beforeEach(() => {
    service = new EmployeeService(httpSpy);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  describe('#getEmployees', () => {
    it('should get employees data when called', fakeAsync(() => {
      const response: IEmployee[] = [
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
        }
      ]
      httpSpy.get.and.returnValue(of(response));
      let result: IEmployee[] = [];
      service.getEmployees().subscribe((response) => {
        result = response;
      });
      flushMicrotasks();
      expect(result).toEqual(response);
    }))
  });
});