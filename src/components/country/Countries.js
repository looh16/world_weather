import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllcountries } from '../../redux/countries';
import Country from './Country';

const Countries = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!countries.length) {
      dispatch(getAllcountries());
    }
  }, []);

  return (
    <div>
      {
        countries.map((country) => (
          <Country
            key={country.name.official}
            country={country}
          />
        ))
      }
    </div>
  );
};

export default Countries;
