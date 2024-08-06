import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaSearchengin } from "react-icons/fa";

function NavScrollExample() {
  return (
    <>
    <div className='sticky top-0 z-10'>
    <Navbar expand="lg" className="custom-navbar  text-lg lg:px-5">
      <Container fluid>
        <Navbar.Brand href="#" className='text-2xl text-white'>All Net</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav
            className="m-auto lex gap-x-10 text-xl  my-lg-0">
              <Nav.Link href="#action1" className='text-white'>Home</Nav.Link>
            <NavDropdown className='text-white' >
              <NavDropdown.Item className='custom-navbar text-white' href="#action3" >Action</NavDropdown.Item>
              <NavDropdown.Item className='custom-navbar' href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item className='custom-navbar' href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2" className='text-white'>Reach Us</Nav.Link>
            <Nav.Link href="#" >
              About Us
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Service"
              className="me-2 rounded-full bg-inherit border-black"
              aria-label="Search"
            />
            <div className='flex mx-2 hover:text-gray-600 cursor-pointer justify-center items-center'>
            <FaSearchengin  size={25} /></div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='h-1 bg-white'></div>
    </div>
    </>
  );
}

export default NavScrollExample;