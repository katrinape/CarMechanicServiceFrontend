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
    this.elements = [];
  }
}

export class RepairElement {
  id: number;
  name: string;
  price: number;
  repairEntity: Repair;

  constructor(title: string, price: number) {
    this.name = title;
    this.price = price;
  }
}
