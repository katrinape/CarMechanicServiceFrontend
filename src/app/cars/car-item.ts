export interface CarItem {
  id: number;
  brand: string;
  regNumber: string;
  vin: string;
  mileage: number;
  customerEntity: object;
  repairs: object[];
}
