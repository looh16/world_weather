import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { IoIosSearch } from 'react-icons/io';
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
        <InputGroup className="mt-5 shadow">
          <InputGroup.Text id="country-name"><IoIosSearch /></InputGroup.Text>
          <Form.Control
            placeholder="Search by Country name"
            aria-label="name"
            aria-describedby="country-name"
            onChange={(event) => { setTextFilterInput(event.target.value); }}
          />
        </InputGroup>
      </div>
      <Container>
        <Row className="columnI">
          { countries.filter((filteredCountry) => filteredCountry.name.official.toLocaleLowerCase()
            .includes(textFilterInput.toLocaleLowerCase())).map((country) => (
              <Col className="columnItem shadow" sm={4} key={country.name.official}>
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
