import PropTypes from 'prop-types';
import * as BsIcon from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Countries = ({ country }) => {
  const navigate = useNavigate();
  const navigateDetails = () => {
    navigate('/details', { state: { capitalName: country.capital } });
  };

  return (
    <div className="container d-flex flex-column justify-content-center">

      <BsIcon.BsFillArrowRightCircleFill className="align-self-end" name={country.name.official} onClick={navigateDetails} key={country.name.official} />
      <div>
        <h4>{country.name.official}</h4>
        <p>
          Continent: &nbsp;
          {country.continents[0]}
        </p>
        <p>
          <img
            src={country.flags.png}
            width="200"
            alt=""
          />
        </p>
      </div>
    </div>
  );
};

Countries.propTypes = {
  name: PropTypes.string,
}.isRequired;

export default Countries;
