import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countriesReducer from './countries';
import detailsWeather from './weatherDetails';

const rootReducer = combineReducers({
  countries: countriesReducer,
  details: detailsWeather,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export default store;
