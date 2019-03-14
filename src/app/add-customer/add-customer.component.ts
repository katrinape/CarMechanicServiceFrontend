import {Component, Injectable} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Customer} from '../customers/customer';
import {CustomerService} from '../customers/customer.service';
import {CarItem} from '../cars/car-item';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
@Injectable()
export class AddCustomerComponent {
  addressForm = this.fb.group({
    name: [null, Validators.required],
    surname: [null, Validators.required],
    telNumber: [null, Validators.compose([Validators.required, Validators.minLength(9)])],
    email: [null, Validators.compose([Validators.required, Validators.email])],
    brand: [null, Validators.required],
    regNumber: [null, Validators.required],
    vin: [null, Validators.required],
    mileage: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router, private customerService: CustomerService) {}

  onSubmit() {
    let customer: Customer = new Customer(
      this.addressForm.controls['name'].value,
      this.addressForm.controls['surname'].value,
      this.addressForm.controls['telNumber'].value,
      this.addressForm.controls['email'].value
    );
    let car: CarItem = new CarItem(
      this.addressForm.controls['brand'].value,
      this.addressForm.controls['regNumber'].value,
      this.addressForm.controls['vin'].value,
      this.addressForm.controls['mileage'].value
    );

    this.customerService.createCustomer(customer).subscribe(
      res => {
        this.customerService.addCarToCustomer(car, res.id).subscribe(
          carRes => this.router.navigate(['customers']),
          error2 => console.log(error2)
        )
      },
      error1 => console.log(error1)
    )
  }
}
