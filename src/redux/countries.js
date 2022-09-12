import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const countries = [];
const GET_ALL_COUNTRIES = 'countries/GET_ALL_COUNTRIES';

export const getAllcountries = createAsyncThunk(
  GET_ALL_COUNTRIES,
  async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const responseResult = response.data;
    return { countries: responseResult };
  },
);

const reducer = (state = countries, action) => {
  const { type, payload } = action;
  switch (type) {
    case `${GET_ALL_COUNTRIES}/fulfilled`:
      return payload.countries;
    default:
      return state;
  }
};

export default reducer;
