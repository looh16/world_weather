import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getWeatherDetails } from '../../redux/weatherDetails';

const Details = () => {
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();

  const { state } = useLocation();
  const { capitalName } = state;

  useEffect(() => {
    dispatch(getWeatherDetails(capitalName));
  }, []);

  console.log(details);

  return (
    <div>
      <p>
        Weather in: &nbsp;
        {capitalName}
        {' '}
        Capital from   &nbsp;
        {details?.location?.country}
      </p>
      <p>
        <span className="emphasize">Temperature:</span>
        {' '}
        {details?.current?.temperature}
        {' '}
        &#8451;
        {' '}
        {details?.current?.weather_descriptions}
      </p>
      <p>
        <img
          src={details?.current?.weather_icons[0]}
          width="80"
          alt={details?.current?.weather_descriptions[0]}
        />
      </p>
      <p>
        <span className="emphasize">Wind:</span>
        {' '}
        {details?.current?.wind_speed}
        {' '}
        m/s
        direction
        {' '}
        {details?.current?.wind_dir}
      </p>
      <p>
        Local Time: &nbsp;
        {details?.location?.localtime}
      </p>
      <p>
        Latitude: &nbsp;
        {details?.location?.lat}
      </p>
      <p>
        Longetude: &nbsp;
        {details?.location?.lon}
      </p>
      <p>
        Time Zone ID: &nbsp;
        {details?.location?.timezone_id}
      </p>
    </div>
  );
};

export default Details;
