import { EmployeeCardComponent } from "./employee-card.component";

describe('EmployeeCardComponent', () => {
  let component: EmployeeCardComponent;
  beforeEach(() => {
    component = new EmployeeCardComponent();
  });
  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});