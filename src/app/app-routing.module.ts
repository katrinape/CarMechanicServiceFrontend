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

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dragdrop', component: DragdropComponent},
  {path: 'table', component: TableComponent},
  {path: 'tree', component: TreeComponent},
  {path: 'address', component: AddressFormComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'calendar', component: CalendarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
