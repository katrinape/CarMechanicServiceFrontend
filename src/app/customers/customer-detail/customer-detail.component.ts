import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CustomerService} from '../customer.service';
import {Customer} from '../customer';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer;
  customerForm: FormGroup;
  // customerForm = this.fb.group({
  //   name: [this.customer.name, Validators.required],
  //   surname: [this.customer.surname, Validators.required],
  //   telNumber: [this.customer.telNumber, Validators.compose([Validators.required, Validators.minLength(9)])],
  //   email: [this.customer.email, Validators.compose([Validators.required, Validators.email])],
  //   brand: [null, Validators.required],
  //   regNumber: [null, Validators.required],
  //   vin: [null, Validators.required],
  //   mileage: [null, Validators.required]
  // });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private location: Location) {}

  ngOnInit() {
    this.getCustomer();
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
          // brand: [null, Validators.required],
          // regNumber: [null, Validators.required],
          // vin: [null, Validators.required],
          // mileage: [null, Validators.required]
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

}
