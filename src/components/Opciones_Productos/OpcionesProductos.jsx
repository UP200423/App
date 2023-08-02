import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NuevoProducto from '../Productos/NuevoProducto';

function OpcionesProductos() {
  return (
    <Navbar expand="sm" className="bg-body-tertiary" sticky="top"   >
      <Container fluid>
        <Navbar.Brand href="#">Pedidos</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Activos</Nav.Link>
            <Nav.Link href="#action2">Lista de Tabla</Nav.Link>
                
            <NuevoProducto/>
            <Nav.Link href="/TablaTipoProducto">
              Administrar Tipos
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default OpcionesProductos;