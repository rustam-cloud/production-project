import { Country, Currency } from '../../../../../entities';
import { TestAsyncThunk } from '../../../../../shared/lib/tests';

import { fetchProfileData } from './fetchProfileData';

const data = {
  userName: 'admin',
  age: 22,
  country: Country.Ukraine,
  lastname: 'Hasymov',
  first: 'Rustam',
  city: 'Dnipro',
  currency: Currency.USD,
};

describe('fetchProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error login', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
