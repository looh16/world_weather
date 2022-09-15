import '@testing-library/jest-dom/extend-expect';
import fetchingWeather from '../Mock/fetchWeatherApi';

describe('test fetching data', () => {
  it('test fetching weather by component name', async () => {
    await fetchingWeather().then((data) => expect(data.data[0].components.co).toBe(201.94053649902344));
  });
});

