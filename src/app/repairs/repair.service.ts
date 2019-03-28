import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Repair} from './repair';

@Injectable({
  providedIn: 'root'
})
export class RepairService {

  private repairsUrl = 'http://localhost:8080/repairs';

  constructor(private http: HttpClient) { }

  getRepairs(): Observable<Repair[]> {
    return this.http.get<Repair[]>(this.repairsUrl);
  }

  getRepair(id: number): Observable<Repair> {
    const url = `${this.repairsUrl}/${id}`;
    return this.http.get<Repair>(url);
  }
}
