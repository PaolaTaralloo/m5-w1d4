import React from 'react'
import { Navbar, Container, Nav, Form } from 'react-bootstrap';

export default function NavbarComponent({ search, handleSearch }) {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#pricing">Browse</Nav.Link>
        </Nav>

        <Form className='d-flex'>
          <Form.Control
            type="search"
            placeholder="Cerca"
            className="mr-2"
            value={search}
            onChange={handleSearch}
          />
        </Form>
      </Container>
    </Navbar>
  )
}
