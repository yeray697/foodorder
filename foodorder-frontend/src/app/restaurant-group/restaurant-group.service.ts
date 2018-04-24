import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { RestaurantGroup } from './restaurant-group';
import { Restaurant } from '../restaurant/restaurant';
import { Organization } from '../organization/organization';

@Injectable()
export class RestaurantGroupService {

  constructor() { }

  public getRestaurantGroups():  Observable<RestaurantGroup[]>{
    return Observable.of([
      new RestaurantGroup(1, 1, 1, new Date(), 20.5, "", 0, 1, new Date(), new Restaurant(1, "Asakusa", "Japonés con buenos menús", "976678252", 23, 50, "", "", false, 1, new Date(), new Date()), new Organization()),
      new RestaurantGroup(1, 1, 1, new Date(), 20.5, "", 0, 1, new Date(), new Restaurant(1, "Corte Inglés", "Terracita con varios restaurantes", "976678252", 23, 50, "", "", false, 1, new Date(), new Date()), new Organization()),
      new RestaurantGroup(1, 1, 1, new Date(2018, 4, 5), 20.5, "", 0, 1, new Date(2018, 4, 5), new Restaurant(1, "Asakusa", "Japonés con buenos menús", "976678252", 23, 50, "", "", false, 1, new Date(), new Date()), new Organization()),
      new RestaurantGroup(1, 1, 1, new Date(2018, 4, 12), 20.5, "", 0, 1, new Date(2018, 4, 12), new Restaurant(1, "Corte Inglés", "Terracita con varios restaurantes", "976678252", 23, 50, "", "", false, 1, new Date(), new Date()), new Organization()),
      new RestaurantGroup(1, 1, 1, new Date(2018, 3, 27), 20.5, "", 0, 1, new Date(2018, 3, 27), new Restaurant(1, "Asakusa", "Japonés con buenos menús", "976678252", 23, 50, "", "", false, 1, new Date(), new Date()), new Organization()) 
    ]);
  }

}
