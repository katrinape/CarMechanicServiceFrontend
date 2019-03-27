import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarItem} from './car-item';
import {Repair} from '../repairs/repair';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carsUrl = 'http://localhost:8080/cars';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private options = {headers: this.headers};

  constructor(private http: HttpClient) {
  }

  getCars(): Observable<CarItem[]> {
    return this.http.get<CarItem[]>(this.carsUrl);
  }

  addRepairToCar(repair: Repair, id: number): Observable<{}> {
    const url = `${this.carsUrl}/${id}/repairs`;
    return this.http.post(url, repair, this.options);
  }

}
