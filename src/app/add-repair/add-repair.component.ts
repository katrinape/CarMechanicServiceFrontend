import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CarService} from '../cars/car.service';
import {CarItem} from '../cars/car-item';
import {DateAdapter} from '@angular/material';
import {MyDateAdapter} from '../add-reservation/my-date-adapter';
import {Repair} from '../repairs/repair';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-repair',
  templateUrl: './add-repair.component.html',
  styleUrls: ['./add-repair.component.css'],
  providers: [{provide: DateAdapter, useClass: MyDateAdapter}]
})
@Injectable()
export class AddRepairComponent implements OnInit {
  repairForm = this.fb.group({
    title: [null, Validators.required],
    car: [null, Validators.required],
    mileage: [null, Validators.required],
    date: [null, Validators.required]
  });
  cars: CarItem[];

  constructor(private fb: FormBuilder,
              private dateAdapter: DateAdapter<Date>,
              private router: Router,
              private carService: CarService) {
    this.dateAdapter.setLocale('pl');
  }

  ngOnInit() {
    this.carService.getCars().subscribe(
      cars => this.cars = cars,
      err => console.log(err)
    );
  }

  onSubmit() {
    console.log(this.repairForm.value);
    let date: Date = new Date(this.repairForm.controls['date'].value);
    let year: string = date.getFullYear() + '';
    let month: string = date.getMonth() + 1 + '';
    let day: string = date.getDate() + '';
    let repair = new Repair(
      this.repairForm.controls['title'].value,
      year + '-' + (month.length > 1 ? month : '0' + month) + '-' + (day.length > 1 ? day : '0' + day),
      this.repairForm.controls['mileage'].value,
    );
    let carId: number = this.repairForm.controls['car'].value.id;
    this.carService.addRepairToCar(repair, carId).subscribe(
      res => this.router.navigate(['repairs']).finally(() => console.log(res)),
      err => console.log(err)
    );

  }

}
