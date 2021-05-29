import { StarRatingComponent } from "./star-rating.component";


describe('StarRatingComponent', () => {
  let component: StarRatingComponent;
  beforeEach(() => {
    component = new StarRatingComponent();
  });
  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});