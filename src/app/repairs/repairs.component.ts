import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {RepairService} from './repair.service';
import {Repair} from './repair';

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
  styleUrls: ['./repairs.component.css']
})
@Injectable()
export class RepairsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['id', 'title', 'date', 'mileage', 'totalPrice', 'car', 'customer', 'action'];
  dataSource: MatTableDataSource<Repair>;
  repairs: Repair[];

  constructor(private repairService: RepairService) {
  }

  ngOnInit() {
    this.repairService.getRepairs().subscribe(
      res => {
        this.repairs = res;
        this.dataSource = new MatTableDataSource(this.repairs);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sortingDataAccessor = (item, property) => {
          switch(property) {
            case 'car': return item.carEntity.brand;
            case 'customer': return item.carEntity.customerEntity.name + ' ' +
                                    item.carEntity.customerEntity.surname;
            default: return item[property];
          }
        };
        this.dataSource.filterPredicate = (data: Repair, filter: string) => {
          const dataStr =
            data.id + ' ' +
            data.title + ' ' +
            data.mileage + ' ' +
            data.totalPrice + ' ' +
            data.carEntity.brand + ' ' +
            data.carEntity.customerEntity.name + ' ' +
            data.carEntity.customerEntity.surname;
          return dataStr.trim().toLocaleLowerCase().indexOf(filter) != -1;
        }
      },
      err => console.log(err)
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
