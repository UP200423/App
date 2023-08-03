import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AddInsumoModal from './AddInsumoModal';
import { useContext } from 'react';
import { DataContext } from '../../views/Insumos/InsumosGlobal';
function OpcionesInsumos() {

  const { typing } = useContext(DataContext)
    

  return (
    <Navbar expand="sm" className="bg-body-tertiary" sticky="top" bg="dark" data-bs-theme="dark"  >
      <Container fluid>
        <Navbar.Brand href="/insumos/card" >   Insumos   </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/insumos/tabla">Vista de Tabla</Nav.Link>
            <AddInsumoModal />
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-4"
              size="me"
              aria-label="Buscar"
              onChange={(e)=>typing(e)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default OpcionesInsumos;