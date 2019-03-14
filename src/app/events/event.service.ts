import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EventItem} from './event-item';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventsUrl = 'http://localhost:8080/reservations';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<EventItem[]> {
    return this.http.get<EventItem[]>(this.eventsUrl);
  }
}
