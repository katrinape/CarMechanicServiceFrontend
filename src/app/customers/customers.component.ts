import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort} from '@angular/material';
import {CustomersDataSource} from './customers-datasource';
import {CustomerService} from './customer.service';
import {EditDialogComponent} from './edit-dialog/edit-dialog.component';
import {Customer} from './customer';
import {DeleteDialogComponent} from './delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
@Injectable()
export class CustomersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: CustomersDataSource;
  customer: Customer;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'surname', 'telNumber', 'email', 'action'];

  constructor(private customerService: CustomerService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.dataSource = new CustomersDataSource(this.paginator, this.sort, this.customerService);
  }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  openEditDialog(customer): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '400px',
      data: {
        customer: customer,
        id: customer.id,
        name: customer.name,
        surname: customer.surname,
        telNumber: customer.telNumber,
        email: customer.email
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.customerService.updateCustomer(result).subscribe(
          res => this.ngOnInit(),
          err => console.log(err)
        );
      }
    });
  }

  openDeleteDialog(id): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '400px',
      data: {
        id: id,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.customerService.deleteCustomer(result.id).subscribe(
          res => this.ngOnInit(),
          err => console.log(err)
        )
      }
    });
  }
}
