import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllcountries } from '../../redux/countries';
import Countries from '../country/Countries';

const Home = () => {
  const countries = useSelector((state) => state.countries);
  const [textFilterInput, setTextFilterInput] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (!countries.length) {
      dispatch(getAllcountries());
    }
  }, []);

  return (
    <section>
      <div>
        <h2>Information about all Countries and their weather</h2>
        <input type="text" placeholder="Search" onChange={(event) => { setTextFilterInput(event.target.value); }} />
      </div>
      <div>
        { countries.filter((filteredCountry) => filteredCountry.name.official.toLocaleLowerCase()
          .includes(textFilterInput.toLocaleLowerCase())).map((country) => (
            <Countries
              key={country.name.official}
              country={country}
            />
        ))}
      </div>
    </section>
  );
};

export default Home;
