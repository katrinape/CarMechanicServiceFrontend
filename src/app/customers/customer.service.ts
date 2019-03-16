import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from './customer';
import {CarItem} from '../cars/car-item';
import {EventItem} from '../events/event-item';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customersUrl = 'http://localhost:8080/customers';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private options = {headers: this.headers};

  constructor(private http: HttpClient) {
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl);
  }

  getCustomer(id: number): Observable<Customer> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.get<Customer>(url);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.customersUrl, customer, this.options);
  }

  addCarToCustomer(car: CarItem, id: number): Observable<{}> {
    const url = `${this.customersUrl}/${id}/cars`;
    return this.http.post(url, car, this.options);
  }

  addReservationToCustomer(event: EventItem, id: number): Observable<{}> {
    const url = `${this.customersUrl}/${id}/reservations`;
    return this.http.post(url, event, this.options);
  }

  getCustomerReservations(id: number): Observable<EventItem[]> {
    const url = `${this.customersUrl}/${id}/reservations`;
    return this.http.get<EventItem[]>(url);
  }

  getCustomerCars(id: number): Observable<CarItem[]> {
    const url = `${this.customersUrl}/${id}/cars`;
    return this.http.get<CarItem[]>(url);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.patch<Customer>(this.customersUrl, customer, this.options);
  }

  deleteCustomer(id: number): Observable<{}> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.delete(url, this.options);
  }
}
