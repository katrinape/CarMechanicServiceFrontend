import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Repair} from '../repair';
import {RepairService} from '../repair.service';
import {MatDialog} from '@angular/material';
import {DeleteDialogComponent} from '../../customers/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-repair-detail',
  templateUrl: './repair-detail.component.html',
  styleUrls: ['./repair-detail.component.css']
})
export class RepairDetailComponent implements OnInit {
  repair: Repair;
  displayedColumns = ['name', 'price', 'action'];

  constructor(private location: Location,
              private route: ActivatedRoute,
              public dialog: MatDialog,
              private repairService: RepairService) { }

  ngOnInit() {
    this.getRepair();
  }

  refresh() {
    this.ngOnInit();
  }

  getRepair(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.repairService.getRepair(id).subscribe(repair => {
      this.repair = repair;
    });
  }

  goBack(): void {
    this.location.back();
  }

  openDeleteDialog(id: number, text: string) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '400px',
      data: {
        id: id,
        name: text
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.repairService.deleteElement(result.id).subscribe(
          res => this.ngOnInit(),
          err => console.log(err)
        );
      }
    });
  }
}
