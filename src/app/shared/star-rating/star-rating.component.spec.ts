import { StarRatingComponent } from "./star-rating.component";


describe('StarRatingComponent', () => {
  let component: StarRatingComponent;
  beforeEach(() => {
    component = new StarRatingComponent();
  });
  it('should create component and initialize input prop with default value', () => {
    expect(component).toBeTruthy();
    expect(component.ratings).toEqual(5);
  });
});