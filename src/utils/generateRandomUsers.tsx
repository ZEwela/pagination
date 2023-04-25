import { faker } from "@faker-js/faker";
export interface User {
  id: string;
  fullName: string;
  avatar: string;
  location: {
    city: string;
    country: string;
  };
}

function createRandomUser(): User {
  return {
    id: faker.datatype.uuid(),
    fullName: faker.name.fullName(),
    avatar: faker.image.avatar(),
    location: {
      city: faker.address.city(),
      country: faker.address.country(),
    },
  };
}

export function generateRandomUsers(length: number): User[] {
  const users: User[] = [];

  Array.from({ length: length }).forEach(() => {
    users.push(createRandomUser());
  });
  return users;
}
