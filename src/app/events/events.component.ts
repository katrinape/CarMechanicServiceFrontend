import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { EventsDataSource } from './events-datasource';
import {EventService} from './event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: EventsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'title', 'start', 'description', 'customer'];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.dataSource = new EventsDataSource(this.paginator, this.sort, this.eventService);
  }
}
