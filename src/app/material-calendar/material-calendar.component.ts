import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {
  CalendarDateFormatter,
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarMonthViewBeforeRenderEvent,
  CalendarView
} from 'angular-calendar';
import {isSameDay, isSameMonth} from 'date-fns';
import {Observable, Subject} from 'rxjs';
import {CustomDateFormatter} from './custom-date-formatter.provider';
import {EventService} from '../events/event.service';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-material-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './material-calendar.component.html',
  styleUrls: ['./material-calendar.component.css'],
  providers: [{provide: CalendarDateFormatter, useClass: CustomDateFormatter}]
})
export class MaterialCalendarComponent implements OnInit {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  activeDayIsOpen: boolean;
  refresh: Subject<any> = new Subject();
  clickedDate: Date;
  locale: string = 'pl';
  // events: CalendarEvent[] = [
  //   {
  //     title: 'Editable event',
  //     color: colors.yellow,
  //     start: new Date(),
  //     actions: [
  //       {
  //         label: '<i class="fa fa-fw fa-pencil"></i>',
  //         onClick: ({ event }: { event: CalendarEvent }): void => {
  //           console.log('Edit event', event);
  //         }
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Deletable event',
  //     color: colors.blue,
  //     start: new Date(),
  //     actions: [
  //       {
  //         label: '<i class="fa fa-fw fa-times"></i>',
  //         onClick: ({ event }: { event: CalendarEvent }): void => {
  //           this.events = this.events.filter(iEvent => iEvent !== event);
  //           console.log('Event deleted', event);
  //         }
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Non editable and deletable event',
  //     color: colors.red,
  //     start: new Date(),
  //   },
  //   {
  //     title: 'Draggable event',
  //     color: colors.yellow,
  //     start: new Date(),
  //     draggable: true
  //   }
  // ];

  events: Observable<CalendarEvent[]>;

  constructor(private eventService: EventService, private router: Router) {
  }

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {
    this.events = this.eventService.getEvents().pipe(
      map(
        res => {
          return res.map(
            res => {
              return {
                title:
                  res.title + ' - ' +
                  res.customerEntity.name + ' ' +
                  res.customerEntity.surname + ', tel: ' +
                  res.customerEntity.telNumber,
                start: new Date(res.start),
                color: colors.yellow,
                allDay: true,
                customerId: res.customerEntity.id,
                meta: { res },
                actions: [
                  {
                    label: '<i class="fas fa-edit" title="Edit reservation"></i>',
                    cssClass: 'edit-res',
                    onClick: ({ event }: { event: CalendarEvent }): void => {
                      console.log('Show reservation', event);
                      this.router.navigate([`customers/${res.customerEntity.id}/reservations`]).finally()
                    },
                  },
                  {
                    label: '<i class="fas fa-user-alt" title="Show customer"></i>',
                    cssClass: 'edit-usr',
                    onClick: ({event}: { event: CalendarEvent }): void => {
                      console.log('Show customer');
                      this.router.navigate([`customers/${res.customerEntity.id}`]).finally()
                    }
                  }
                ]
              }
            }
          )
        }
      )
    )
  }


  eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }

  dayClicked({date, events}: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventClicked({event}: { event: CalendarEvent }): void {
    console.log('Event clicked', event);
    // this.router.navigate([`customers/${event.customerId}/reservations`]).finally()
  }

  beforeMonthViewRender(renderEvent: CalendarMonthViewBeforeRenderEvent): void {
    renderEvent.body.forEach(day => {
      const dayOfMonth = day.date.getDate();
      if (day.inMonth && day.isWeekend) {
        day.cssClass = 'bg-pink';
      }
    });
  }
}

export const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

