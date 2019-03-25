import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DateAdapter} from '@angular/material';
import {MyDateAdapter} from './my-date-adapter';
import {CustomerService} from '../customers/customer.service';
import {EventItem} from '../events/event-item';
import {Customer} from '../customers/customer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css'],
  providers: [{provide: DateAdapter, useClass: MyDateAdapter}]
})
export class AddReservationComponent implements OnInit {
  startDate = new Date();
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  options: Customer[] = [];

  constructor(private _formBuilder: FormBuilder,
              private dateAdapter: DateAdapter<Date>,
              private customerService: CustomerService,
              private router: Router) {
    this.dateAdapter.setLocale('pl');
  }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(
      res => this.options = res,
      error1 => console.log(error1)
    );
    this.firstFormGroup = this._formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      start: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      customer: ['', Validators.required]
    });
  }

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6 && this.startDate <= d;
  };

  form1(){
    console.log(this.firstFormGroup.value);
  }

  form2(){
    console.log(this.secondFormGroup.value);
  }

  onSubmit(){
    let date: Date = new Date(this.firstFormGroup.controls['start'].value);
    let year: string = date.getFullYear() + '';
    let month: string = date.getMonth() + 1 + '';
    let day: string = date.getDate() + '';
    let eventItem: EventItem = new EventItem(
      this.firstFormGroup.controls['title'].value,
      year + '-' + (month.length > 1 ? month : '0' + month) + '-' + (day.length > 1 ? day : '0' + day),
      this.firstFormGroup.controls['description'].value
    );
    let customer: Customer = this.secondFormGroup.controls['customer'].value;
    this.customerService.addReservationToCustomer(eventItem, customer.id).subscribe(
      res => this.router.navigate(['calendar']),
      error1 => console.log(error1)
    );
  }

  displayFun(customer: Customer): string {
    return customer ? customer.name + ' ' + customer.surname : undefined;
  }
}


