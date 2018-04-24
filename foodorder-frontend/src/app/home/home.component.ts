import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RestaurantGroup } from '../restaurant-group/restaurant-group';
import { RestaurantGroupService } from '../restaurant-group/restaurant-group.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ RestaurantGroupService ]
})
export class HomeComponent implements OnInit {
  restaurantGroups$: Observable<RestaurantGroup[]>;

  constructor(private restaurantGroupService: RestaurantGroupService) { }

  ngOnInit() {
    this.restaurantGroups$ = this.restaurantGroupService.getRestaurantGroups();
  }

}
