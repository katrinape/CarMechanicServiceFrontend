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
  displayedColumns = ['id', 'title', 'description', 'price'];
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
      },
      err => console.log(err)
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
