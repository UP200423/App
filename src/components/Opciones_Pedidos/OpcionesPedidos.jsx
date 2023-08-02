import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function OpcionesPedidos() {
  return (
    <Navbar expand="sm" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" sticky="top"   >
      <Container fluid>
        <Navbar.Brand href="/pedidos">Pedidos</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/pedidos" >Activos</Nav.Link>
            <Nav.Link href="/pedidos/nuevo">Nuevo</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default OpcionesPedidos;