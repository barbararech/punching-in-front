import { faker } from "@faker-js/faker";

export default function createUserFactory() {
  return {
    email: faker.internet.email(),
    username: faker.internet.userName(),
    password: faker.random.alphaNumeric(10) + 'A',
  };
}
