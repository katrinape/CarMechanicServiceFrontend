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
  MatRadioModule, MatCommonModule,
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
    CalendarComponent
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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCommonModule,
    CommonModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

