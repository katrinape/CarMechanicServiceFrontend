import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {CustomerService} from '../customer.service';
import {Customer} from '../customer';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DateAdapter, MatDialog} from '@angular/material';
import {MyDateAdapter} from '../../add-reservation/my-date-adapter';
import {EventItem} from '../../events/event-item';
import {CarItem} from '../../cars/car-item';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
  providers: [{provide: DateAdapter, useClass: MyDateAdapter}]
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer;
  customerForm: FormGroup;
  reservationForm: FormGroup;
  addCarForm: FormGroup;
  startDate = new Date();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private dateAdapter: DateAdapter<Date>,
    private customerService: CustomerService,
    private location: Location) {
    this.dateAdapter.setLocale('pl');
  }

  ngOnInit() {
    this.getCustomer();
    this.reservationForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      start: ['', Validators.required]
    });
    this.addCarForm = this.fb.group({
        brand: [null, Validators.required],
        regNumber: [null, Validators.required],
        vin: [null, Validators.required],
        mileage: [null, Validators.required]
      }
    );
  }

  getCustomer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomer(id)
      .subscribe(customer => {
        this.customer = customer;
        this.customerForm = this.fb.group({
          name: [this.customer.name, Validators.required],
          surname: [this.customer.surname, Validators.required],
          telNumber: [this.customer.telNumber, Validators.compose([Validators.required, Validators.minLength(9)])],
          email: [this.customer.email, Validators.compose([Validators.required, Validators.email])],
        });
      });
  }

  goBack(): void {
    this.location.back();
  }

  customerFormSubmit() {
    let updatedCustomer: Customer = new Customer(
      this.customerForm.controls['name'].value,
      this.customerForm.controls['surname'].value,
      this.customerForm.controls['telNumber'].value,
      this.customerForm.controls['email'].value
    );
    updatedCustomer.id = this.customer.id;
    this.customerService.updateCustomer(updatedCustomer).subscribe(
      res => this.goBack(),
      error1 => console.log(error1)
    );
  }

  reservationFormSubmit() {
    let date: Date = new Date(this.reservationForm.controls['start'].value);
    let year: string = date.getFullYear() + '';
    let month: string = date.getMonth() + 1 + '';
    let day: string = date.getDate() + '';
    let reservation: EventItem = new EventItem(
      this.reservationForm.controls['title'].value,
      year + '-' + (month.length > 1 ? month : '0' + month) + '-' + (day.length > 1 ? day : '0' + day),
      this.reservationForm.controls['description'].value
    );
    this.customerService.addReservationToCustomer(reservation, this.customer.id).subscribe(
      res => this.router.navigate([`customers/${this.customer.id}/reservations`]),
      error1 => console.log(error1)
    );
  }

  addCarFormSubmit() {
    let car: CarItem = new CarItem(
      this.addCarForm.controls['brand'].value,
      this.addCarForm.controls['regNumber'].value,
      this.addCarForm.controls['vin'].value,
      this.addCarForm.controls['mileage'].value,
    );
    this.customerService.addCarToCustomer(car, this.customer.id).subscribe(
      res => this.router.navigate([`customers/${this.customer.id}/cars`]),
      error1 => console.log(error1)
    );
  }

  openDeleteDialog(id: number, name: string): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '400px',
      data: {
        id: id,
        name: name
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.customerService.deleteCustomer(result.id).subscribe(
          res => this.goBack(),
          err => console.log(err)
        )
      }
    });
  }

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6 && this.startDate <= d;
  };

}
