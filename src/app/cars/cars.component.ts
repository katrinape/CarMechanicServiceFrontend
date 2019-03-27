import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {CarService} from './car.service';
import {CarItem} from './car-item';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
@Injectable()
export class CarsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['id', 'brand', 'regNumber', 'vin', 'owner'];
  dataSource: MatTableDataSource<CarItem>;
  cars: CarItem[];

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.carService.getCars().subscribe(res => {
        this.cars = res;
        this.dataSource = new MatTableDataSource(this.cars);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sortingDataAccessor = (item, property) => {
          switch (property) {
            case 'owner':
              return item.customerEntity.name + item.customerEntity.surname;
            default:
              return item[property];
          }
        };
        this.dataSource.filterPredicate = (data: CarItem, filter: string) => {
          const dataStr =
            data.id + ' ' +
            data.brand + ' ' +
            data.regNumber + ' ' +
            data.vin + ' ' +
            data.customerEntity.name + ' ' +
            data.customerEntity.surname;
          return dataStr.trim().toLocaleLowerCase().indexOf(filter) != -1;
        };
      },
      error1 => console.log(error1)
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
