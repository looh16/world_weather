import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { BiHome, BiMicrophone } from 'react-icons/bi';
import { IoMdSettings } from 'react-icons/io';

const Navigation = () => (
  <Navbar expand="lg" variant="light" bg="light">
    <Container>
      <Nav.Link as={Link} to="/"><BiHome /></Nav.Link>
      <Navbar.Text>Countries Weather Information</Navbar.Text>
      <Nav.Link href="#"><BiMicrophone /></Nav.Link>
      <Nav.Link href="#"><IoMdSettings /></Nav.Link>
    </Container>
  </Navbar>
);

export default Navigation;
