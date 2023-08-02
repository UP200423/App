import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NuevoProducto from '../Productos/NuevoProducto';
import { useContext } from 'react';
// import { SearchContext } from '../../views/Carta/CartaTabla';


function OpcionesProductos() {
  
  // const { search, updateSearch } = useContext(SearchContext);

  // const onSearch = (text)=>{
  //   updateSearch(text);
  // }
  return (
    <Navbar expand="sm" className="bg-body-tertiary" sticky="top"   >
      <Container fluid>
        <Navbar.Brand href="/Carta">Productos</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/carta">Carta</Nav.Link>
            <Nav.Link href="/cartatabla">Tabla</Nav.Link>
            
      
            <NuevoProducto/>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
            
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
              
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default OpcionesProductos;