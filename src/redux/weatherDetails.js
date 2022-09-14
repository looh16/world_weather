import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const details = [];
const key = '80a9080ffc6c68f4a9b318e94a26b439';
const GET_WEATHER_DETAILS = 'rockets/GET_WEATHER_DETAILS';

export const getWeatherDetails = createAsyncThunk(
  GET_WEATHER_DETAILS,
  async (cord) => {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${cord.lat}&lon=${cord.lon}&appid=${key}`);
    const responseResult = response.data;
    return { details: responseResult };
  },
);

const reducer = (state = details, action) => {
  const { type, payload } = action;
  switch (type) {
    case `${GET_WEATHER_DETAILS}/fulfilled`:
      return payload.details;
    default:
      return state;
  }
};

export default reducer;
