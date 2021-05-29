import { EmployeeService } from "./employee.service";

describe('EmployeeService', () => {
  let service: EmployeeService;
  const httpSpy = jasmine.createSpyObj('httpClient', ['get']);
  beforeEach(() => {
    service = new EmployeeService(httpSpy);
  });
  it('should create service', () => {
    expect(service).toBeTruthy();
  });
});