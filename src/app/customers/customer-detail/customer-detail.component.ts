import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {CustomerService} from '../customer.service';
import {Customer} from '../customer';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DateAdapter} from '@angular/material';
import {MyDateAdapter} from '../../add-reservation/my-date-adapter';
import {EventItem} from '../../events/event-item';
import {CarItem} from '../../cars/car-item';

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
    let reservation: EventItem = new EventItem(
      this.reservationForm.controls['title'].value,
      this.reservationForm.controls['start'].value,
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
    )
  }

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6 && this.startDate <= d;
  };

}
