import {Component, Injectable} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

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

  private customersUrl = 'http://localhost:8080/customers';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
  }

  onSubmit() {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    let options = {headers: headers};
    let customer: Customer = new Customer(
      this.addressForm.controls['name'].value,
      this.addressForm.controls['surname'].value,
      this.addressForm.controls['telNumber'].value,
      this.addressForm.controls['email'].value
    );
    let car: Car = new Car(
      this.addressForm.controls['brand'].value,
      this.addressForm.controls['regNumber'].value,
      this.addressForm.controls['vin'].value,
      this.addressForm.controls['mileage'].value
    );

    this.http.post<Customer>(this.customersUrl, customer, options).subscribe(
      res => {
        console.log(res);
        this.http.post<Car>(this.customersUrl + '/' + res.id + '/cars', car, options).subscribe(
          carRes => this.router.navigate(['customers']),
          error2 => console.log(error2)
        );
      },
      error1 => console.log(error1)
    );
  }
}

export class Customer {
  id: string;
  name: string;
  surname: string;
  telNumber: string;
  email: string;

  constructor(name: string, surname: string, telNumber: string, email: string) {
    this.name = name;
    this.surname = surname;
    this.telNumber = telNumber;
    this.email = email;
  }
}

export class Car {
  id: string;
  brand: string;
  regNumber: string;
  vin: string;
  mileage: string;

  constructor(brand: string, regNumber: string, vin: string, mileage: string) {
    this.brand = brand;
    this.regNumber = regNumber;
    this.vin = vin;
    this.mileage = mileage;
  }
}
