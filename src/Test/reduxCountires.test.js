import reducer, { countries } from '../redux/countries';
import CountriesData from '../Mock/countriesApi';


describe('check reducer', () => {
  test('return initail state', () => {
    expect(reducer(undefined, {})).toEqual(countries);
  });

  test('fetch countries list', () => {
    const action = {
      type: 'countries/GET_ALL_COUNTRIES',
      payload: CountriesData
    };
    expect(reducer(countries, action)).toEqual(countries);
  });
});



