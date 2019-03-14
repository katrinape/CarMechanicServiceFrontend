import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  MatIconModule,
  MatListModule,
  MatNativeDateModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTreeModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule, MatCommonModule, MatTooltipModule, MatRippleModule, MatDialogModule
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
import { EditDialogComponent } from './customers/edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './customers/delete-dialog/delete-dialog.component';

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
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    LayoutModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    DragDropModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatRippleModule,
    MatTooltipModule,
    MatCommonModule,
    CommonModule,
    FormsModule,
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

