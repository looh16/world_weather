import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const details = [];
const key = 'c34f51086fa8ad0afba440ec3377ae1c';
const GET_WEATHER_DETAILS = 'rockets/GET_WEATHER_DETAILS';

export const getWeatherDetails = createAsyncThunk(
  GET_WEATHER_DETAILS,
  async (capital) => {
    const response = await axios.get(`http://api.weatherstack.com/current?access_key=${key}&query=${capital}&units=m`);
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
