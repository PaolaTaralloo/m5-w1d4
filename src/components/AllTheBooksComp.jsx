import React from 'react';

// import { Card, Container, Row, Col } from 'react-bootstrap';
import {Container, Row } from 'react-bootstrap';
import SingleBookComp from '../components/SingleBookComp.jsx';

// Importa i dati dai file JSON
import fantasyBooks from '../data/fantasy.json';
import historyBooks from '../data/history.json';
import horrorBooks from '../data/horror.json';
import romanceBooks from '../data/romance.json';
import scifiBooks from '../data/scifi.json';

// Unisci tutti i libri in un unico array
const allBooks = [
  ...fantasyBooks,
  ...historyBooks,
  ...horrorBooks,
  ...romanceBooks,
  ...scifiBooks
];

const AllTheBooks = () => {
  return (
    <Container className="mt-4, mb-5" >
      <Row>
        {allBooks.map((book) => (
          <SingleBookComp key={book.asin} book={book} />

          // <Col key={book.asin} md={3} >
          //   <Card className="mb-4">
          //     <Card.Img variant="top" src={book.img} alt={book.title} />
          //     <Card.Body>
          //       <Card.Title>{book.title}</Card.Title>
          //     </Card.Body>
          //   </Card>
          // </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;