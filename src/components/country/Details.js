import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getWeatherDetails } from '../../redux/weatherDetails';
import './Details.css';

const Details = () => {
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();

  const { state } = useLocation();
  const { lat, lon, countryName } = state;
  const cord = {
    lat,
    lon,
  };

  useEffect(() => {
    dispatch(getWeatherDetails(cord));
  }, []);
  const detailsResult = details.list || [];

  return (
    <div className="container d-flex flex-column justify-content-center mt-5">
      <h1 className="align-self-center mb-5">{countryName}</h1>
      <Table responsive>
        <thead>
          <tr>
            <th>COMPONENTS</th>
            <th>VALUE</th>
            <th>AIR QUALITY INDEX</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Сoncentration of CO (Carbon monoxide)</td>
            <td>
              {detailsResult[0]?.components?.co}
              {' '}
              μg/m3
            </td>
            <td />
          </tr>
          <tr>
            <td>Сoncentration of NO (Nitrogen monoxide)</td>
            <td>
              {detailsResult[0]?.components?.no}
              {' '}
              μg/m3
            </td>
            <td />
          </tr>
          <tr>
            <td>Сoncentration of NO2 (Nitrogen dioxide)</td>
            <td>
              {detailsResult[0]?.components?.no2}
              {' '}
              μg/m3
            </td>
            <td />
          </tr>
          <tr>
            <td>Сoncentration of O3 (Ozone)</td>
            <td>
              {detailsResult[0]?.components?.o3}
              {' '}
              μg/m3
            </td>
            <td>{detailsResult[0]?.main?.aqi}</td>
          </tr>
          <tr>
            <td>Сoncentration of SO2 (Sulphur dioxide)</td>
            <td>
              {detailsResult[0]?.components?.so2}
              {' '}
              μg/m3
            </td>
            <td />
          </tr>
          <tr>
            <td>Сoncentration of PM2.5 (Fine particles matter)</td>
            <td>
              {detailsResult[0]?.components?.pm2_5}
              {' '}
              μg/m3
            </td>
            <td />
          </tr>
          <tr>
            <td>Сoncentration of PM10 (Coarse particulate matter)</td>
            <td>
              {detailsResult[0]?.components?.pm10}
              {' '}
              μg/m3
            </td>
            <td />
          </tr>
          <tr>
            <td>Сoncentration of NH3 (Ammonia)</td>
            <td>
              {detailsResult[0]?.components?.nh3}
              {' '}
              μg/m3
            </td>
            <td />
          </tr>
        </tbody>
      </Table>
      <div>
        <p className="air_quality">
          *Air Quality Index. Possible values: 1, 2, 3, 4, 5.
          Where 1 = Good, 2 = Fair, 3 = Moderate, 4 = Poor, 5 = Very Poor.
        </p>
      </div>
    </div>
  );
};

export default Details;
