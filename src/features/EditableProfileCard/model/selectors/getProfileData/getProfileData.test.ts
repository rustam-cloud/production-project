import { StateSchema } from '../../../../../app';
import { Country, Currency } from '../../../../../entities';

import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
  test('should return error', () => {
    const data = {
      userName: 'admin',
      age: 22,
      country: Country.Ukraine,
      lastname: 'Hasymov',
      first: 'Rustam',
      city: 'Dnipro',
      currency: Currency.USD,
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };

    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
