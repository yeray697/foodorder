import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantGroupComponent } from './restaurant-group.component';

describe('RestaurantGroupComponent', () => {
  let component: RestaurantGroupComponent;
  let fixture: ComponentFixture<RestaurantGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
