import {CarItem} from '../cars/car-item';

export class Repair {
  id: number;
  title: string;
  date: string;
  mileage: number;
  totalPrice: number;
  carEntity: CarItem;
  elements: RepairElement[];


  constructor(title: string, date: string, mileage: number) {
    this.title = title;
    this.date = date;
    this.mileage = mileage;
  }
}

export interface RepairElement {
  id: number;
  title: string;
  price: number;
  repairEntity: Repair;
}
