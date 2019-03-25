import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {EventItem} from '../events/event-item';
import {EventService} from '../events/event.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ReservationsComponent implements OnInit {
  displayedColumns = ['id', 'title', 'start', 'description', 'customer'];
  reservations: EventItem[];
  expandedElement: EventItem | null;
  dataSource: MatTableDataSource<EventItem>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private reservationService: EventService) {
  }

  ngOnInit() {
    this.reservationService.getEvents().subscribe(
      res => {
        this.reservations = res;
        this.dataSource = new MatTableDataSource(this.reservations);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sortingDataAccessor = (item, property) => {
          switch(property) {
            case 'customer': return item.customerEntity.name + item.customerEntity.surname;
            default: return item[property];
          }
        };
        this.dataSource.filterPredicate = (data: EventItem, filter: string) => {
          const dataStr =
            data.id + ' ' +
            data.title + ' ' +
            data.start + ' ' +
            data.description + ' ' +
            data.customerEntity.name + ' ' +
            data.customerEntity.surname;
          return dataStr.trim().toLocaleLowerCase().indexOf(filter) != -1;
        }
      },
      error1 => console.log(error1)
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


