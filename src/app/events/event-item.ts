import {Customer} from '../customers/customer';

export class EventItem {
  id: number;
  title: string;
  start: string;
  description: string;
  customerEntity: Customer;

  constructor(title: string, start: string, description: string) {
    this.title = title;
    this.start = start;
    this.description = description;
  }

}
