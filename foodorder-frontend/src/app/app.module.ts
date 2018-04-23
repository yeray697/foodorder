import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { OrganizationComponent } from './organization/organization.component';
import { RestaurantGroupComponent } from './restaurant-group/restaurant-group.component';
import { UserComponent } from './user/user.component';
import { UserOrderComponent } from './user-order/user-order.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const ROUTES: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'test', component: TestComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PageNotFoundComponent,
    RestaurantComponent,
    OrganizationComponent,
    RestaurantGroupComponent,
    UserComponent,
    UserOrderComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
