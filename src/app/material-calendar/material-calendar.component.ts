import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {
  CalendarDateFormatter,
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarMonthViewBeforeRenderEvent,
  CalendarView
} from 'angular-calendar';
import {isSameDay, isSameMonth} from 'date-fns';
import {Subject} from 'rxjs';
import {CustomDateFormatter} from './custom-date-formatter.provider';

@Component({
  selector: 'app-material-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './material-calendar.component.html',
  styleUrls: ['./material-calendar.component.css'],
  providers: [{provide: CalendarDateFormatter, useClass: CustomDateFormatter}]
})
export class MaterialCalendarComponent {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  activeDayIsOpen: boolean;
  refresh: Subject<any> = new Subject();
  clickedDate: Date;
  locale: string = 'pl';
  events: CalendarEvent[] = [
    {
      title: 'Editable event',
      color: colors.yellow,
      start: new Date(),
      actions: [
        {
          label: '<i class="fa fa-fw fa-pencil"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            console.log('Edit event', event);
          }
        }
      ]
    },
    {
      title: 'Deletable event',
      color: colors.blue,
      start: new Date(),
      actions: [
        {
          label: '<i class="fa fa-fw fa-times"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            this.events = this.events.filter(iEvent => iEvent !== event);
            console.log('Event deleted', event);
          }
        }
      ]
    },
    {
      title: 'Non editable and deletable event',
      color: colors.red,
      start: new Date(),
    },
    {
      title: 'Draggable event',
      color: colors.yellow,
      start: new Date(),
      draggable: true
    }
  ];

  eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event);
  }

  beforeMonthViewRender(renderEvent: CalendarMonthViewBeforeRenderEvent): void {
    renderEvent.body.forEach(day => {
      const dayOfMonth = day.date.getDate();
      if (day.inMonth  && day.isWeekend) {
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

