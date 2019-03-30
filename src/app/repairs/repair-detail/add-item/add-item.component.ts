import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {RepairService} from '../../repair.service';
import {Repair, RepairElement} from '../../repair';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  itemForm = this.fb.group({
    name: ['', Validators.required],
    price: ['', Validators.required]
  });
  repair: Repair;

  constructor(private fb: FormBuilder,
              private router: Router,
              private repairService: RepairService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRepair();
  }

  addItem() {
    let item: RepairElement = new RepairElement(
      this.itemForm.controls['name'].value,
      this.itemForm.controls['price'].value
    );
    console.log(this.repair);
    this.repairService.addElement(item, this.repair.id).subscribe(
      res => {
        console.log(res);
        this.router.navigate([`repairs/${this.repair.id}`]).finally()
      },
      error1 => console.log(error1)
    )
  }

  getRepair(): void {
    const id = +this.route.parent.snapshot.paramMap.get('id');
    console.log(id);
    this.repairService.getRepair(id).subscribe(repair => {
      this.repair = repair;
      console.log(repair)
    });
  }
}
