export interface Customer {
  id: number;
  name: string;
  surname: string;
  telNumber: string;
  email: string;
  reservations: object[];
  cars: object[]
}
