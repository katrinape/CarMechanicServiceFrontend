export class Customer {
  id: number;
  name: string;
  surname: string;
  telNumber: string;
  email: string;
  reservations: object[];
  cars: object[];

  constructor(name: string, surname: string, telNumber: string, email: string) {
    this.name = name;
    this.surname = surname;
    this.telNumber = telNumber;
    this.email = email;
  }
}
