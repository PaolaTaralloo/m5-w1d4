import React, { useContext } from 'react'
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { ThemeContext } from '../modules/context';
import { BsSun, BsMoon } from 'react-icons/bs'; 

export default function NavbarComponent({ search, handleSearch }) {

  const [theme, setTheme] = useContext(ThemeContext)

  return (
    <Navbar bg={theme} data-bs-theme={theme}>
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

        <Button
          variant="outline-secondary"
          onClick={() => {
            theme === 'light' ? setTheme('dark') : setTheme('light')
          }}
          className='ms-3'
        >
            {theme === 'light' ? <BsMoon /> : <BsSun />}</Button>
      </Container>
    </Navbar >
  )
}
