import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { RepairsDataSource } from './repairs-datasource';
import {RepairService} from './repair.service';

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
  styleUrls: ['./repairs.component.css']
})
@Injectable()
export class RepairsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: RepairsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'title', 'description', 'price'];

  constructor(private repairService: RepairService) {}

  ngOnInit() {
    this.dataSource = new RepairsDataSource(this.paginator, this.sort, this.repairService);
  }
}
