import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CarsComponent} from './cars/cars.component';
import {AddCustomerComponent} from './add-customer/add-customer.component';
import {CustomersComponent} from './customers/customers.component';
import {RepairsComponent} from './repairs/repairs.component';
import {EventsComponent} from './events/events.component';
import {AddReservationComponent} from './add-reservation/add-reservation.component';
import {CustomerDetailComponent} from './customers/customer-detail/customer-detail.component';
import {CustomerReservationsComponent} from './customers/customer-reservations/customer-reservations.component';
import {CustomerCarsComponent} from './customers/customer-cars/customer-cars.component';
import {MaterialCalendarComponent} from './material-calendar/material-calendar.component';

const routes: Routes = [
  {path: '', redirectTo: 'customers', pathMatch: 'full'},
  {path: 'cars', component: CarsComponent},
  {path: 'calendar', component: MaterialCalendarComponent},
  {path: 'add-customer', component: AddCustomerComponent},
  {path: 'add-reservation', component: AddReservationComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'customers/:id', component: CustomerDetailComponent},
  {path: 'customers/:id/reservations', component: CustomerReservationsComponent},
  {path: 'customers/:id/cars', component: CustomerCarsComponent},
  {path: 'repairs', component: RepairsComponent},
  {path: 'reservations', component: EventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
