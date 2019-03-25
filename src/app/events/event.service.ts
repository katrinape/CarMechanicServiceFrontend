import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EventItem} from './event-item';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventsUrl = 'http://localhost:8080/reservations';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private options = {headers: this.headers};

  constructor(private http: HttpClient) {
  }

  getEvents(): Observable<EventItem[]> {
    return this.http.get<EventItem[]>(this.eventsUrl);
  }

  createEvent(eventItem: EventItem): Observable<EventItem> {
    return this.http.post<EventItem>(this.eventsUrl, eventItem, this.options);
  }

  deleteEvent(id: number): Observable<{}> {
    const url = `${this.eventsUrl}/${id}`;
    return this.http.delete(url, this.options);
  }
}
