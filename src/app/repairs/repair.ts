import {CarItem} from '../cars/car-item';

export interface Repair {
  id: number;
  title: string;
  mileage: number;
  totalPrice: number;
  carEntity: CarItem;
  elements: RepairElement[];
}

export interface RepairElement {
  id: number;
  title: string;
  price: number;
  repairEntity: Repair;
}
