import CountriesData from './countriesApi';

const fetchCountries = () => CountriesData().then((data) => (data));

export default fetchCountries;
