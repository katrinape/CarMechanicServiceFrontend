import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DragdropComponent} from './dragdrop/dragdrop.component';
import {TableComponent} from './table/table.component';
import {TreeComponent} from './tree/tree.component';
import {AddressFormComponent} from './address-form/address-form.component';
import {CarsComponent} from './cars/cars.component';
import {TermsComponent} from './terms/terms.component';
import {CalendarComponent} from './calendar/calendar.component';
import {AddCustomerComponent} from './add-customer/add-customer.component';
import {CustomersComponent} from './customers/customers.component';
import {RepairsComponent} from './repairs/repairs.component';
import {EventsComponent} from './events/events.component';
import {AddReservationComponent} from './add-reservation/add-reservation.component';
import {CustomerDetailComponent} from './customers/customer-detail/customer-detail.component';
import {CustomerReservationsComponent} from './customers/customer-reservations/customer-reservations.component';
import {CustomerCarsComponent} from './customers/customer-cars/customer-cars.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dragdrop', component: DragdropComponent},
  {path: 'table', component: TableComponent},
  {path: 'tree', component: TreeComponent},
  {path: 'address', component: AddressFormComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'calendar', component: CalendarComponent},
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
