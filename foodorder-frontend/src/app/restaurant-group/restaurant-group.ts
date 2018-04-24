import { Restaurant } from "../restaurant/restaurant";
import { Organization } from "../organization/organization";

export class RestaurantGroup {

    constructor(
        public id: number,
        public restaurantId: number,
        public organizationId: number,
        public date: Date,
        public price: number,
        public request: string,
        public groupModified: number,
        public createdBy: number,
        public createdDate: Date,
        public restaurant: Restaurant,
        public organization: Organization
    ){}
}