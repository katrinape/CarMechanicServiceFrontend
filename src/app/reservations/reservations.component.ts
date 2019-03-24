import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {EventItem} from '../events/event-item';
import {EventService} from '../events/event.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  displayedColumns = ['id', 'title', 'start', 'description', 'customer'];
  reservations: EventItem[];
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
      },
      error1 => console.log(error1)
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


