

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  geo: Geo;
  phone: string;
  website: string;
  company: Company;
}


export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  companyName: string;
  catchPhrase: string;
  bs: string;
}
