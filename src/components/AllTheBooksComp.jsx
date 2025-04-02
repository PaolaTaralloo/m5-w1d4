import React, { useEffect, useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import SingleBookComp from '../components/SingleBookComp.jsx';
import CommentAreaComp from '../components/CommentAreaComp.jsx';

// Importa i dati dai file JSON
import fantasyBooks from '../data/fantasy.json';


// Unisci tutti i libri in un unico array
const allBooks = [...fantasyBooks];

const AllTheBooks = ({search}) => {
  const [selected, setSelected] = useState(null);
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
        <Row >
        <Col md={8} className = "mt-4">
        <Row>
        <h4>Fantasy Books</h4>
          {books.map((book) => (
            <SingleBookComp
            
            key={book.asin}
            book={book}
            selected={selected}
            setSelected={setSelected}/>
            
          ))}
          </Row>
          </Col>
          <Col md={4} className = "mt-4">
          <h4>Comment Area</h4>
          {selected ? ( 
            <CommentAreaComp asin={selected}></CommentAreaComp>
          ):(<span>Seleziona un libro e lascia un commento!</span>
          )}
         
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AllTheBooks;