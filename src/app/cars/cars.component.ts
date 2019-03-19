import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {CarsDataSource} from './cars-datasource';
import {CarService} from './car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
@Injectable()
export class CarsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: CarsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'brand', 'regNumber', 'vin', 'mileage', 'owner'];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.dataSource = new CarsDataSource(this.paginator, this.sort, this.carService);
  }
}
