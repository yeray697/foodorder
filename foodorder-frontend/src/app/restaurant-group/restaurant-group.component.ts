import { Component, OnInit, Input } from '@angular/core';
import { RestaurantGroup } from './restaurant-group';

@Component({
  selector: 'app-restaurant-group',
  templateUrl: './restaurant-group.component.html',
  styleUrls: ['./restaurant-group.component.scss']
})
export class RestaurantGroupComponent implements OnInit {
  @Input() restaurantGroup: RestaurantGroup;


  constructor() { }

  ngOnInit() {
  }

}
