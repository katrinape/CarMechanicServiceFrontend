import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Repair, RepairElement} from './repair';

@Injectable({
  providedIn: 'root'
})
export class RepairService {

  private repairsUrl = 'http://localhost:8080/repairs';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private options = {headers: this.headers};

  constructor(private http: HttpClient) { }

  getRepairs(): Observable<Repair[]> {
    return this.http.get<Repair[]>(this.repairsUrl);
  }

  getRepair(id: number): Observable<Repair> {
    const url = `${this.repairsUrl}/${id}`;
    return this.http.get<Repair>(url);
  }

  updateRepair(repair: Repair): Observable<Repair> {
    return this.http.put<Repair>(this.repairsUrl, repair, this.options);
  }

  deleteRepair(id: number): Observable<{}> {
    const url = `${this.repairsUrl}/${id}`;
    return this.http.delete(url, this.options);
  }

  addElement(element: RepairElement, id: number): Observable<Repair> {
    const url = `${this.repairsUrl}/${id}/elements`;
    return this.http.post<Repair>(url, element, this.options);
  }

  deleteElement(id: number): Observable<{}> {
    const url = `${this.repairsUrl}/elements/${id}`;
    return this.http.delete(url, this.options);
  }
}
