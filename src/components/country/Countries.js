import PropTypes from 'prop-types';
import * as BsIcon from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

const Countries = ({ country }) => {
  const navigate = useNavigate();
  const navigateDetails = () => {
    navigate('/details', { state: { lat: country.latlng[0], lon: country.latlng[1], countryName: country.name.official } });
  };

  return (
    <div className="container d-flex flex-column justify-content-center">

      <BsIcon.BsFillArrowRightCircleFill className="align-self-end mt-2" name={country.name.official} onClick={navigateDetails} key={country.name.official} />
      <div>
        <h4>{country.name.official}</h4>
        <h5>
          Continent: &nbsp;
          {country.continents[0]}
        </h5>
        <p>
          <Image
            fluid
            src={country.flags.png}
            rounded
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
