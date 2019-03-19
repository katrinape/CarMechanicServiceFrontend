import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
import { DatePipe } from '@angular/common';

export class CustomDateFormatter extends CalendarDateFormatter {
  // you can override any of the methods defined in the parent class

  public monthViewColumnHeader({ date, locale }: DateFormatterParams): string {
    return new DatePipe(locale).transform(date, 'EEEE', locale);
  }

  public monthViewTitle({ date, locale }: DateFormatterParams): string {
    return new DatePipe(locale).transform(date, 'LLLL y', locale);
  }

  public weekViewColumnHeader({ date, locale }: DateFormatterParams): string {
    return new DatePipe(locale).transform(date, 'EEEE', locale);
  }

  public dayViewHour({ date, locale }: DateFormatterParams): string {
    return new DatePipe(locale).transform(date, 'HH:mm', locale);
  }
}
