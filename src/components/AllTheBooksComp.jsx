import React, { useEffect, useState } from 'react';

import { Container, Row } from 'react-bootstrap';
import SingleBookComp from '../components/SingleBookComp.jsx';

// Importa i dati dai file JSON
import fantasyBooks from '../data/fantasy.json';


// Unisci tutti i libri in un unico array
const allBooks = [...fantasyBooks];

const AllTheBooks = ({search}) => {
  const [books, setBooks] = useState (allBooks)
  // const [search, setSearch] = useState ()

  // const handleSearch = (event) => {
  //   setSearch (event.target.value)
  //   // console.log(search)

  useEffect (() => {
    const filteredBooks = allBooks.filter ((book) => 
      book.title.toLowerCase().includes(search.toLowerCase())
  )
  setBooks(filteredBooks)
  }, [search])

  return (
    <>
     {/* <Container className="mt-4, mb-3" >
      <Form>
        <Row>
          <Col className='mb-3'>
            <Form.Control placeholder="Cerca" onChange={handleSearch}/>
          </Col>
        </Row>
      </Form>
      </Container> */}

      <Container className="mt-4, mb-5" >
        <Row>
          {books.map((book) => (
            <SingleBookComp key={book.asin} book={book} />
            
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AllTheBooks;