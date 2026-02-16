export interface UserData {
  name: string;
  email: string;
  password: string;
  title: 'Mr' | 'Mrs' | 'Miss';
  birth_date: string;
  birth_month: string;
  birth_year: string;
  firstname: string;
  lastname: string;
  company: string;
  address1: string;
  address2: string;
  country: string;
  zipcode: string;
  state: string;
  city: string;
  mobile_number: string;
}

export function createRandomUser(overrides?: Partial<UserData>): UserData {
  const timestamp = Date.now();

  const baseUser: UserData = {
    name: `User${timestamp}`,
    email: `user${timestamp}@testmail.com`,
    password: 'Test123!',
    title: 'Mr',
    birth_date: '10',
    birth_month: '5',
    birth_year: '1990',
    firstname: 'John',
    lastname: 'Doe',
    company: 'QA Automation',
    address1: '123 Main St',
    address2: 'Apt 456',
    country: 'United States',
    zipcode: '12345',
    state: 'California',
    city: 'Los Angeles',
    mobile_number: '1234567890'
  };

  return {
    ...baseUser,
    ...overrides
  };
}