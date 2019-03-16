import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CustomerService} from '../customer.service';
import {CarItem} from '../../cars/car-item';

@Component({
  selector: 'app-customer-cars',
  templateUrl: './customer-cars.component.html',
  styleUrls: ['./customer-cars.component.css']
})
export class CustomerCarsComponent implements OnInit {
  cars: CarItem[] = [];

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getReservations();
  }

  getReservations() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomerCars(id).subscribe(
      res => {
        this.cars = res;
        console.log(res);
      },
      error1 => console.log(error1)
    );
  }

  goBack(): void {
    this.location.back();
  }

}
