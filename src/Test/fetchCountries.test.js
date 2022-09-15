import '@testing-library/jest-dom/extend-expect';
import fetchingCountries from '../Mock/fetchCountries';

describe('test fetching data', () => {
  it('test fetching country by name', async () => {
    await fetchingCountries().then((data) => expect(data.data[0].common).toBe('Finland'));
  });
});
