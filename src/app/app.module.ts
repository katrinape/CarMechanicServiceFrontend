import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCommonModule, MatDatepickerModule,
  MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatNativeDateModule, MatPaginatorModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule,
  MatSortModule, MatStepperModule, MatTableModule, MatToolbarModule, MatTooltipModule, MatTreeModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LayoutModule} from '@angular/cdk/layout';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CarsComponent} from './cars/cars.component';
import {CommonModule, registerLocaleData} from '@angular/common';
import localePl from '@angular/common/locales/pl';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {AddCustomerComponent} from './add-customer/add-customer.component';
import {CustomersComponent} from './customers/customers.component';
import {RepairsComponent} from './repairs/repairs.component';
import {EventsComponent} from './events/events.component';
import {EditDialogComponent} from './customers/edit-dialog/edit-dialog.component';
import {DeleteDialogComponent} from './customers/delete-dialog/delete-dialog.component';
import {AddReservationComponent} from './add-reservation/add-reservation.component';
import {CustomerDetailComponent} from './customers/customer-detail/customer-detail.component';
import {TextFieldModule} from '@angular/cdk/text-field';
import { CustomerCarsComponent } from './customers/customer-cars/customer-cars.component';
import { CustomerReservationsComponent } from './customers/customer-reservations/customer-reservations.component';
import { CalendarHeaderComponent } from './material-calendar/calendar-header/calendar-header.component';
import {MaterialCalendarComponent} from './material-calendar/material-calendar.component';

registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    AddCustomerComponent,
    CustomersComponent,
    RepairsComponent,
    EventsComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    AddReservationComponent,
    CustomerDetailComponent,
    CustomerCarsComponent,
    CustomerReservationsComponent,
    MaterialCalendarComponent,
    CalendarHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatCardModule,
    MatCommonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTooltipModule,
    MatTreeModule,
    ReactiveFormsModule,
    TextFieldModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  entryComponents: [EditDialogComponent, DeleteDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

