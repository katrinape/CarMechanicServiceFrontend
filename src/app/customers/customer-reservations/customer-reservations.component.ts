import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CustomerService} from '../customer.service';
import {EventItem} from '../../events/event-item';

@Component({
  selector: 'app-customer-reservations',
  templateUrl: './customer-reservations.component.html',
  styleUrls: ['./customer-reservations.component.css']
})
export class CustomerReservationsComponent implements OnInit {
  reservations: EventItem[] = [];

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getReservations();
  }

  getReservations() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomerReservations(id).subscribe(
      res => {
        this.reservations = res;
        console.log(res);
      },
      error1 => console.log(error1)
    );
  }

  goBack(): void {
    this.location.back();
  }

}
