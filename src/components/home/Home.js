import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';
import { getAllcountries } from '../../redux/countries';
import Countries from '../country/Countries';
import './Home.css';

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
    <section className="d-flex flex-column justify-content-center">
      <div className="d-flex justify-content-center m-5">
        <input type="text" placeholder="Search" onChange={(event) => { setTextFilterInput(event.target.value); }} />
      </div>
      <Container>
        <Row className="columnI">
          { countries.filter((filteredCountry) => filteredCountry.name.official.toLocaleLowerCase()
            .includes(textFilterInput.toLocaleLowerCase())).map((country) => (
              <Col className="columnItem" sm={4} key={country.name.official}>
                <Countries
                  key={country.name.official}
                  country={country}
                />
              </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Home;
