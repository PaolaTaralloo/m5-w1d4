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

  useEffect (() => {
    const filteredBooks = allBooks.filter ((book) => 
      book.title.toLowerCase().includes(search.toLowerCase())
  )
  setBooks(filteredBooks)
  }, [search])

  return (
    <>

      <Container className="mt-4 mb-5" >
        <Row>
        <Col md={8} sm={12} className = "mt-4 "> 
        <Row >
        <h4>Fantasy Books</h4>
          {books.map((book) => (
            <Col key={book.asin} lg={4} md={6} sm={12} className="mb-4">
              <SingleBookComp
                book={book}
                selected={selected}
                setSelected={setSelected}
              />
              {/* Show comment area below the book on small screens */}
              <div className="d-block d-md-none mt-3">
                {selected === book.asin && (
                  <CommentAreaComp asin={selected} />
                )}
              </div>
            </Col>
          ))}
          </Row>
          </Col>
          {/* Show comment area on the side for medium screens and larger */}
          <Col md={4} sm={12} className = "mt-4 d-none d-md-block">
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