import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  MatAutocompleteModule, MatButtonModule, MatCardModule, MatCommonModule, MatDatepickerModule,
  MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatNativeDateModule, MatPaginatorModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule,
  MatSortModule, MatStepperModule, MatTableModule, MatToolbarModule, MatTooltipModule, MatTreeModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LayoutModule} from '@angular/cdk/layout';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DragdropComponent} from './dragdrop/dragdrop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {TableComponent} from './table/table.component';
import {TreeComponent} from './tree/tree.component';
import {AddressFormComponent} from './address-form/address-form.component';
import {CarsComponent} from './cars/cars.component';
import {TermsComponent} from './terms/terms.component';
import {CalendarComponent} from './calendar/calendar.component';
import {CommonModule} from '@angular/common';
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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DragdropComponent,
    TableComponent,
    TreeComponent,
    AddressFormComponent,
    CarsComponent,
    TermsComponent,
    CalendarComponent,
    AddCustomerComponent,
    CustomersComponent,
    RepairsComponent,
    EventsComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    AddReservationComponent,
    CustomerDetailComponent
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

