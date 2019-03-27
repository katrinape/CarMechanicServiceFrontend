import {Customer} from '../customers/customer';

export class CarItem {
  id: number;
  brand: string;
  regNumber: string;
  vin: string;
  customerEntity: Customer;
  repairs: object[];

  constructor(brand: string, regNumber: string, vin: string) {
    this.brand = brand;
    this.regNumber = regNumber;
    this.vin = vin;
  }
}
