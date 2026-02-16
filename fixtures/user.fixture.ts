import { test as base, expect } from '@playwright/test';
import { createRandomUser, UserData } from '../utils/user.factory';

type UserFixture = {
  createdUser: UserData;
};

export const test = base.extend<UserFixture>({
  createdUser: async ({ request }, use) => {
    const userData = createRandomUser();

    const response = await request.post(
      'https://automationexercise.com/api/createAccount',
      {
        form: Object.fromEntries(
          Object.entries(userData).map(([key, value]) => [key, String(value)])
        )
      }
    );

    expect(response.ok()).toBeTruthy();

    await use(userData);
  }
});

export { expect };