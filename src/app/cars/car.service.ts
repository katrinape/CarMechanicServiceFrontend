import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarItem} from './car-item';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carsUrl = 'http://localhost:8080/cars';

  constructor(private http: HttpClient) {
  }

  getCars(): Observable<CarItem[]> {
    return this.http.get<CarItem[]>(this.carsUrl);
  }

}
