import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { BiHome, BiMicrophone } from 'react-icons/bi';
import { IoMdSettings } from 'react-icons/io';
import './Navigation.css';

const Navigation = () => (
  <Navbar expand="lg" variant="light" className="shadow menu">
    <Container className="d-flex bd-highlight">
      <Nav.Link className="p-2 flex-fill bd-highlight" as={Link} to="/"><BiHome /></Nav.Link>
      <Navbar.Text className="flex-grow-1 bd-highlight">COUNTRIES WEATHER INFORMATION</Navbar.Text>
      <BiMicrophone className="m-3 flex-shrink-1 bd-highlight" />
      <IoMdSettings className="m-1 flex-shrink-1 bd-highlight" />
    </Container>
  </Navbar>
);

export default Navigation;
