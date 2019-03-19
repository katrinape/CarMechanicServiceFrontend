import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {EventItem} from '../events/event-item';
import * as $ from 'jquery';
import 'fullcalendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  events: EventItem[];

  constructor(private http: HttpClient, private router: Router) {
  }

  createEvent(event: Object) {
    this.http.post('http://localhost:8080/reservations', event);
    console.log(event.toString())
  }

  ngOnInit() {
    $('#calendar').fullCalendar({
      eventSources: ['http://localhost:8080/reservations'],
      locale: 'pl',
      aspectRatio: 2,
      header: {left: 'month,agendaWeek,agendaDay today', center: 'title', right: 'prev,next'},
      defaultView: 'month',
      selectable: true,
      timeFormat: 'H:mm',
      slotLabelFormat: 'H:mm',
      slotLabelInterval: '01:00:00',
      slotDuration: '01:00:00',
      minTime: '06:00:00',
      maxTime: '22:00:00',
      contentHeight: 'auto',
      editable: false,
      firstDay: 1,
      dayClick: date => this.router.navigateByUrl('/add-reservation'),
      eventClick: event => {this.router.navigate(['/reservations']);},
      eventRender: (event, element) => { element.css({
          fontSize: '1rem',
          background: 'rgba(0,0,0,0)',
          borderColor: 'white',
          cursor: 'pointer',
          padding: '5px'
        });
      }
    });
  }
}

export interface Event {
  title: string;
  id: string;
  start: string;
}


