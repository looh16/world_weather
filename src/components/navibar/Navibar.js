import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { BiHome, BiMicrophone } from 'react-icons/bi';
import { IoMdSettings } from 'react-icons/io';

const Navibar = () => (
  <Navbar expand="lg" variant="light" bg="light">
    <Container>
      <Nav.Link href="#home"><BiHome /></Nav.Link>
      <Navbar.Text>World Weather</Navbar.Text>
      <Nav.Link href="#"><BiMicrophone /></Nav.Link>
      <Nav.Link href="#"><IoMdSettings /></Nav.Link>
    </Container>
  </Navbar>
);

export default Navibar;
