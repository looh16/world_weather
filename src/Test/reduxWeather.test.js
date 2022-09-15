import reducer, { details } from '../redux/weatherDetails';
import WeatherApi from '../Mock/weatherApi';

describe('check reducer', () => {
  test('return initail state', () => {
    expect(reducer(undefined, {})).toEqual(details);
  });

  test('fetch weather details list', () => {
    const action = {
      type: 'details/GET_WEATHER_DETAILS',
      payload: WeatherApi,
    };
    expect(reducer(details, action)).toEqual(details);
  });
});
