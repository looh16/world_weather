import PropTypes from 'prop-types';

const Country = ({ country }) => (
  <div>
    <div>
      <h1>{country.name.official}</h1>
    </div>
  </div>
);

Country.propTypes = {
  name: PropTypes.string,
}.isRequired;

export default Country;
