import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  events: Event[];

  constructor(private http: HttpClient) {
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
      header: {
        left: 'month,agendaWeek,agendaDay today',
        center: 'title',
        right: 'prev,next'
      },
      defaultView: 'month',
      selectable: true,
      timeFormat: 'H:mm',
      slotLabelFormat: 'H:mm',
      slotLabelInterval: '01:00:00',
      slotDuration: '01:00:00',
      minTime: '06:00:00',
      maxTime: '22:00:00',
      firstDay: 1,
      dayClick: date => {
        let eventTitle = prompt('Co mam dodać?');
        if (eventTitle !== null && eventTitle.trim().length > 1) {
          $('#calendar').fullCalendar(
            'renderEvent', {
              title: eventTitle,
              start: date.toDate(),
              allDay: true
            }, true
          );
        }
        this.createEvent({
          title: "Naprawa zawieszenia",
          start: "2019-04-15",
          description: "godz 15"
        });
      },
      eventClick: event => alert(event.title + ' ' + event.description),
      eventRender: (event, element) => { element.css({
          fontSize: '1.5rem',
          background: 'white',
          padding: '5px',
        });
      },
      eventReceive: event1 => {
        this.http.post('http://localhost:8080/reservations', event1);
        console.log(event1)
      },
      eventTextColor: '#000',
      contentHeight: 'auto',
      editable: true
    });
  }
}

export interface Event {
  title: string;
  id: string;
  start: string;
}


