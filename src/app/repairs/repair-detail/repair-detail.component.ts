import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Repair} from '../repair';
import {RepairService} from '../repair.service';

@Component({
  selector: 'app-repair-detail',
  templateUrl: './repair-detail.component.html',
  styleUrls: ['./repair-detail.component.css']
})
export class RepairDetailComponent implements OnInit {
  repair: Repair;
  displayedColumns = ['name', 'price', 'action'];

  constructor(private location: Location, private route: ActivatedRoute, private repairService: RepairService) { }

  ngOnInit() {
    this.getCustomer();
  }

  getCustomer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.repairService.getRepair(id).subscribe(repair => {
      this.repair = repair;
    });
  }

  goBack(): void {
    this.location.back();
  }

}
