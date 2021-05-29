import { SearchComponent } from "./search.component";



describe('SearchComponent', () => {
  let component: SearchComponent;
  const employeeServiceSpy = jasmine.createSpyObj('EmployeeService', ['getEmployees']);
  beforeEach(() => {
    component = new SearchComponent(employeeServiceSpy);
  });
  it('should create component', () => {
    spyOn(component, 'getEmployees');
    expect(component).toBeTruthy();
  });
});