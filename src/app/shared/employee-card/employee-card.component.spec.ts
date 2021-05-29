import { EmployeeCardComponent } from "./employee-card.component";

describe('EmployeeCardComponent', () => {
  let component: EmployeeCardComponent;
  beforeEach(() => {
    component = new EmployeeCardComponent();
  });
  it('should create component and initialize default values', () => {
    expect(component).toBeTruthy();
    expect(component.employee).toBeUndefined();
  });
});