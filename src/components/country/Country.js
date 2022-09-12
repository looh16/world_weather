import PropTypes from 'prop-types';
import * as BsIcon from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Country = ({ country }) => {
  const navigate = useNavigate();
  const navigateDetails = () => {
    navigate('/details', { state: { capitalName: country.capital } });
  };

  return (
    <div>
      <div>
        <h1>{country.name.official}</h1>
        <p>
          Capital: &nbsp;
          {country.capital}
        </p>
        <p>
          Continent: &nbsp;
          {country.continents[0]}
        </p>
        <p>
          Flag: &nbsp;
          <img
            src={country.flags.png}
            width="200"
            alt=""
          />
        </p>
        <BsIcon.BsFillArrowRightCircleFill className="arrow" name={country.name.official} onClick={navigateDetails} key={country.name.official} />
      </div>
    </div>
  );
};

Country.propTypes = {
  name: PropTypes.string,
}.isRequired;

export default Country;
